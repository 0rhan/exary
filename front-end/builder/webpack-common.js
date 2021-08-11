import {
  APP_DIR,
  APP_PATH_ALIASES,
  ENTRY_FILE_DIR,
  BUILD_DIR,
} from "./constants.js";
import HtmlWebpackPlugin from "html-webpack-plugin";
import CompressionPlugin from "compression-webpack-plugin";
import { tsLoaderConfig } from "./parts/ts-loader.js";
import { cssLoaderConfig } from "./parts/css-loader.js";
import { htmlLoaderConfig } from "./parts/html-loader.js";
import { assetsLoaderConfig } from "./parts/assets-loader.js";
import { merge } from "webpack-merge";

// merge shared loaders
const commonLoaders = merge([
  tsLoaderConfig,
  cssLoaderConfig,
  htmlLoaderConfig,
  assetsLoaderConfig,
]);

export const webpackCommonConfig = {
  entry: ENTRY_FILE_DIR,
  output: {
    filename: "[name].[contenthash].js",
    path: BUILD_DIR,
    clean: true,
  },
  ...commonLoaders,
  optimization: {
    minimize: true,
    runtimeChunk: "single",
    moduleIds: "deterministic",
    splitChunks: {
      chunks: "all",
      maxSize: 249856,
    },
  },
  plugins: [
    new HtmlWebpackPlugin({
      inject: "body",
      template: `${APP_DIR}/index.html`,
      filename: "index.html",
      title: "Exary App",
    }),
    new CompressionPlugin({
      exclude: /bundle-stats.html|bundleAnalyzeReport.html/,
    }),
  ],
  resolve: {
    alias: APP_PATH_ALIASES,
  },
};
