import { BundleAnalyzerPlugin } from "webpack-bundle-analyzer";
import { BundleStatsWebpackPlugin } from "bundle-stats-webpack-plugin";
import { webpackCommonConfig } from "../webpack-common.js";
import { merge } from "webpack-merge";

export default merge(
  webpackCommonConfig,
  {
    mode: "production",
    plugins: [
      new BundleAnalyzerPlugin({
        analyzerMode: "static",
        openAnalyzer: false,
        reportFilename: "../builder/bundle-analyzer-report.html"
      }),
      new BundleStatsWebpackPlugin({
        baseline: true,
        outDir: "../builder",
      }),
    ],
  },
);
