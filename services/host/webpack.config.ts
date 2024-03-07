import path from "path";
import webpack from "webpack";

import { buildWebpack, BuildMode, BuildPaths, BuildPlatform  } from "@packages/build-config";

import packageJson from './package.json'

interface EnvVariables {
  mode: BuildMode;
  analyzer?: boolean;
  port: number;
  platform?: BuildPlatform;
  SHOP_REMOTE_URL?: string
  ADMIN_REMOTE_URL?: string
}

const paths: BuildPaths = {
  entry: path.resolve(__dirname, "src", "index.tsx"),
  output: path.resolve(__dirname, "build"),
  html: path.resolve(__dirname, "public", "index.html"),
  src: path.resolve(__dirname, "src"),
  public: path.resolve(__dirname, "public"),
};

export default (env: EnvVariables) => {
  const config = buildWebpack({
    port: env.port ?? 3000,
    mode: env.mode ?? "development",
    paths,
    analyzer: env.analyzer,
    platform: env.platform ?? "desktop",
  });

  const SHOP_REMOTE_URL = env.SHOP_REMOTE_URL ?? 'http://localhost:3001'
  const ADMIN_REMOTE_URL = env.ADMIN_REMOTE_URL ?? 'http://localhost:3002'

  config.plugins.push(new webpack.container.ModuleFederationPlugin(({
    name: 'host',
    filename: 'remoteEntry.js',

    remotes: {
      shop: `shop@${SHOP_REMOTE_URL}/remoteEntry.js`,
      admin: `admin@${ADMIN_REMOTE_URL}/remoteEntry.js`,
    },

    shared: {
      ...packageJson.dependencies,
      react: {
        eager: true,
        requiredVersion: packageJson.dependencies['react']
      },
      'react-dom': {
        eager: true,
        requiredVersion: packageJson.dependencies['react-dom']
      },
      'react-router-dom': {
        eager: true,
        requiredVersion: packageJson.dependencies['react-router-dom']
      }
    }
  })))

  return config;
};
