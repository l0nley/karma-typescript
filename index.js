module.exports = {
    "framework:karma-typescript": ["factory", require("./lib/framework")],
    "preprocessor:karma-typescript": ["factory", require("./lib/preprocessor").preprocessor],
    "preprocessor:karma-typescript-style-preprocessor": ["factory", require("./lib/style/preprocessor").preprocessor],
    "reporter:karma-typescript": ["type", require("./lib/reporter")]
};
