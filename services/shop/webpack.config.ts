import path from "path";

import { buildWebpack, BuildMode, BuildPaths, BuildPlatform  } from "@packages/build-config";
import webpack from "webpack";

import packageJson from './package.json'


interface EnvVariables {
  mode: BuildMode;
  analyzer?: boolean;
  port: number;
  platform?: BuildPlatform;
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
    port: env.port ?? 3001,
    mode: env.mode ?? "development",
    paths,
    analyzer: env.analyzer,
    platform: env.platform ?? "desktop",
  });

  config.plugins.push(new webpack.container.ModuleFederationPlugin(({
    name: 'shop',
    filename: 'remoteEntry.js',
    exposes: {
      './Router': path.resolve(__dirname, 'src', 'components', 'Router', 'Router.tsx')
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
