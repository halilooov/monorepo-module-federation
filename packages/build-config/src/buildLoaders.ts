import { Configuration } from "webpack";
import MiniCssExtractPlugin from "mini-css-extract-plugin";
import ReactRefreshTypeScript from "react-refresh-typescript";

import { BuildOptions } from "./types";

export function buildLoaders({
  mode,
}: BuildOptions): Configuration["module"]["rules"] {
  const isDev = mode === "development";

  const assetLoader = {
    test: /\.(png|jpg|jpeg|gif)$/i,
    type: "asset/resource",
  };

  const svgLoader = {
    test: /\.svg$/i,
    issuer: /\.[jt]sx?$/,
    use: [
      {
        loader: "@svgr/webpack",
        options: {
          icon: true,
          svgoConfig: {
            plugins: [
              { name: "convertColors", params: { currentColor: true } },
            ],
          },
        },
      },
    ],
  };

  const cssLoaderWithModules = {
    loader: "css-loader",
    options: {
      modules: {
        localIdentName: isDev ? "[path][name]__[local]" : "[hash:base64:8]",
      },
    },
  };

  const cssLoader = {
    test: /\.css$/i,
    use: [
      isDev ? "style-loader" : MiniCssExtractPlugin.loader,
      cssLoaderWithModules,
    ],
  };

  const scssLoader = {
    test: /\.s[ac]ss$/i,
    use: [
      isDev ? "style-loader" : MiniCssExtractPlugin.loader,
      cssLoaderWithModules,
      "sass-loader",
    ],
  };

  /**
   * В случае использования ts-loader
   */
  const tsLoader = {
    test: /\.tsx?$/,
    use: [
      {
        loader: "ts-loader",
        options: {
          getCustomTransformers: () => ({
            before: [isDev && ReactRefreshTypeScript()].filter(Boolean),
          }),
          transpileOnly: isDev,
        },
      },
    ],
    exclude: /node_modules/,
  };

  /**
   * В случае использования babel-loader
   */
  // const babelLoader = {
  //   test: /\.tsx$/,
  //   exclude: /node_modules/,
  //   use: {
  //     loader: "babel-loader",
  //     options: {
  //       presets: [
  //         "@babel/preset-env",
  //         "@babel/preset-typescript",
  //         ["@babel/preset-react", { runtime: isDev ? "automatic" : "classic" }],
  //       ],
  //     },
  //   },
  // };

  return [assetLoader, svgLoader, cssLoader, scssLoader, tsLoader];
}
