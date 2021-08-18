import ForkTsCheckerWebpackPlugin from "fork-ts-checker-webpack-plugin";

export const tsLoaderConfig = {
  module: {
    rules: [
      {
        test: /\.(t|j)sx?$/,
        loader: "ts-loader",
        exclude: /node_modules/,
        options: {
          transpileOnly: true,
        },
      },
    ],
  },
  resolve: {
    extensions: [".tsx", ".ts", ".js", "json"],
  },
  plugins: [new ForkTsCheckerWebpackPlugin()],
};

