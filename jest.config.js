module.exports = {
    verbose: true,
    "setupFiles": ["./src/test/test-setup.js"],
    "coveragePathIgnorePatterns": ["./src/test/test-setup.js"],
    "moduleNameMapper": {
        // "\\.(jpg|jpeg|png|gif|eot|otf|webp|svg|ttf|woff|woff2|mp4|webm|wav|mp3|m4a|aac|oga)$": "<rootDir>/__mocks__/fileMock.js",
        "\\.(scss|css|less)$": "/home/goat/projects/d3-react/__mocks__/styleMock.js"
    }
};
