import { webpackCommonConfig } from "../webpack-common.js";
import { BUILD_DIR } from "../constants.js";
import { merge } from "webpack-merge";

export default merge(webpackCommonConfig, {
  mode: "development",
  devtool: "eval-cheap-module-source-map",
  devServer: {
    contentBase: BUILD_DIR,
    host: "0.0.0.0",
    port: "3000",
    hot: true,
    overlay: true,
    compress: true,
  },
});
