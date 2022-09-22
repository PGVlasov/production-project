import path from "path";
import HtmlWebpackPlugin from "html-webpack-plugin";
import webpack from "webpack"; //to access built-in plugins
import MiniCssExtractPlugin from "mini-css-extract-plugin";
import { BuildOptions } from "./types/config";

export function buildPlugins({
  pathes,
  isDev,
}: BuildOptions): webpack.WebpackPluginInstance[] {
  return [
    new HtmlWebpackPlugin({
      template: pathes.html,
    }),
    new webpack.ProgressPlugin(),
    new MiniCssExtractPlugin({
      filename: "css/[name].[contenthash:8].css",
      chunkFilename: "css/[name].[contenthash:8].css",
    }),
    new webpack.DefinePlugin({ __IS_DEV__: JSON.stringify(isDev) }),
    new webpack.HotModuleReplacementPlugin(),
  ];
}
