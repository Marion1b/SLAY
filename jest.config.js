export default {
    testEnvironment: "jsdom",
    transform: {
      "^.+\\.tsx?$": "ts-jest",
      '^.+\\.svg$': 'jest-transformer-svg',
    },
    moduleNameMapper: {
        "\\.(css|less|sass|scss)$": "identity-obj-proxy",
        "^@/(.*)$": "<rootDir>/src/$1",
      },
    setupFilesAfterEnv: ["<rootDir>/jest.setup.ts"],
  };