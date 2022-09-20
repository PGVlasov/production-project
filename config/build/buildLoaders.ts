import webpack from "webpack";
import MiniCssExtractPlugin from "mini-css-extract-plugin";
import { BuildOptions } from "./types/config";

export function buildLoaders(options: BuildOptions): webpack.RuleSetRule[] {
  const svgLoader = {
    test: /\.svg$/,
    use: ["@svgr/webpack"],
  };

  const cssLoader = {
    test: /\.s[ac]ss$/i,
    use: [
      // isDev ? "style-loader"
      MiniCssExtractPlugin.loader,
      {
        loader: "css-loader",
        options: {
          modules: {
            auto: (resPath: string) => Boolean(resPath.includes(".module.")),
            // урок 5 середина
          },
        },
      },
      "sass-loader",
    ],
  };

  const typeScriptLoader = {
    test: /\.tsx?$/,
    use: "ts-loader",
    exclude: /node_modules/,
  };

  const fileLoader = {
    test: /\.(png|jpe?g|gif)$/i,
    loader: "file-loader",
    options: {
      name: "[path][name].[ext]",
    },
  };
  return [typeScriptLoader, cssLoader, fileLoader, svgLoader];
}
