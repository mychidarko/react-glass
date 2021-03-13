const { override, addWebpackAlias } = require("customize-cra");
const path = require("path");

module.exports = override(
    addWebpackAlias({
        // eslint-disable-next-line no-useless-computed-key
        ["@"]: path.resolve(__dirname, "src"),
    })
);