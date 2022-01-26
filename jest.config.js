const config = {
  preset: 'ts-jest',
  testEnvironment: 'node',
  moduleNameMapper:{
    "\\.(css|less|sass|scss)$": "<rootDir>/__mocks__/styleMock.js",
  }
};

module.exports = config;
