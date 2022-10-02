import { buildCssLoader } from "../build/loaders/buildCSSLoaders";
import path from "path";
import webpack, { RuleSetRule } from "webpack";
import { BuildPathes } from "../build/types/config";
import MiniCssExtractPlugin from "mini-css-extract-plugin";

export default ({ config }: { config: webpack.Configuration }) => {
  const pathes: BuildPathes = {
    build: "",
    entry: "",
    html: "",
    src: path.resolve(__dirname, "..", "..", "src"),
  };

  config.resolve.modules.push(pathes.src);
  config.resolve.extensions.push(".ts", ".tsx");

  config.module.rules = config.module.rules.map((rule: RuleSetRule) => {
    if (/svg/.test(rule.test as string)) {
      return { ...rule, exclude: /\.svg$/i };
    }
    return rule;
  });

  config.module.rules.push({
    test: /\.svg$/,
    use: ["@svgr/webpack"],
  });

  config.module.rules.push(buildCssLoader(true));

  return config;
};

// const path = require('path');
// const MiniCssExtractPlugin = require('mini-css-extract-plugin');

// module.exports = function({ config }: { config: webpack.Configuration }) {
//   config.module.rules.push({
//     test: /\.scss$/,
//     loaders: [MiniCssExtractPlugin.loader, 'css-loader', 'sass-loader'],
//     include: path.resolve(__dirname, '../')
//   });

//   config.plugins.push(new MiniCssExtractPlugin({ filename: '[name].css' }))

//   return config;
// };
