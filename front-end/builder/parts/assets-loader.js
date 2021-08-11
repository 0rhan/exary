export const assetsLoaderConfig = {
  module: {
    rules: [
      {
        test: /\.(png|jpg|svg|gif|jpeg)$/i,
        type: "asset/resource",
      },
    ],
  },
};
