import { Configuration } from "webpack";

import { BuildOptions } from "./types";

export function buildDevServer({
  port,
  paths,
}: BuildOptions): Configuration["devServer"] {
  return {
    port: port ?? 3000,
    static: paths.html,
    historyApiFallback: true,
    hot: true,
    // open: true,
  };
}
