module.exports = {
  roots: ["<rootDir>/src", "<rootDir>/test"],
  testMatch: ["**/?(*.)+(test).[jt]s?(x)"],
  setupFilesAfterEnv: ["<rootDir>/src/setupTests.js"],
  testEnvironment: "jsdom",
};