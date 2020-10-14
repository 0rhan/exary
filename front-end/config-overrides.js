const { override, addBabelPlugins, addWebpackAlias } = require("customize-cra");
const path = require("path");

module.exports = override(
  addBabelPlugins("babel-plugin-styled-components"),
  addWebpackAlias({
    ["Components"]: path.resolve(__dirname, "./src/Components"),
    ["Constants"]: path.resolve(__dirname, "./src/Constants"),
    ["Screens"]: path.resolve(__dirname, "./src/Screens"),
    ["State"]: path.resolve(__dirname, "./src/State"),
    ["Containers"]: path.resolve(__dirname, "./src/Containers"),
  })
);
