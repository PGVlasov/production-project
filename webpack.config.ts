import path from "path";
import webpack from "webpack"; //to access built-in plugins
import { buildPlugins } from "./config/build/buildPlugins";
import { buildLoaders } from "./config/build/buildLoaders";
import { buildResolves } from "./config/build/buildResilves";
import { buildWebpackConfig } from "./config/build/buildWebpackConfig";
import { BuildEnv, BuildPathes } from "./config/build/types/config";

export default (env: BuildEnv) => {
  const pathes: BuildPathes = {
    entry: path.resolve(__dirname, "src", "index.tsx"),
    build: path.resolve(__dirname, "build"),
    html: path.resolve(__dirname, "public", "index.html"),
    src: path.resolve(__dirname, "src"),
  };

  const mode = env.mode || "development";
  const PORT = env.port || 3000;

  const isDev = mode === "development";
  const config: webpack.Configuration = buildWebpackConfig({
    mode: "production",
    pathes,
    isDev,
    port: PORT,
  });
  return config;
};
