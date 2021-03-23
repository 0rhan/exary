const { override, addBabelPlugins, addWebpackAlias } = require("customize-cra");
const path = require("path");

module.exports = override(
  addBabelPlugins("babel-plugin-styled-components"),
  addWebpackAlias({
    ["UI"]: path.resolve(__dirname, "./src/UI"),
    ["Domains"]: path.resolve(__dirname, "./src/Domains"),
    ["State"]: path.resolve(__dirname, "./src/State"),
  })
);
