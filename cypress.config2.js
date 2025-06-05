import { defineConfig } from "cypress";

export default defineConfig({
  e2e: {
    baseUrl: 'https://guest:welcome2qauto@qauto2.forstudy.space/',
    defaultCommandTimeout: 10000,
    retries: { "runMode": 1, "openMode": 1 },
    video: false,
    screenshotOnRunFailure: true,
    testIsolation: true
  },

env: {
AUTH_USERNAME: 'guest',
AUTH_PASSWORD: 'welcome2qauto',
TEST_USER_EMAIL: 'dkolokhin+1@gmail.com',
TEST_USER_PASSWORD: 'Cypress8067',
}

});
