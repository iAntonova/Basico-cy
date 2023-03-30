const { defineConfig } = require("cypress");

module.exports = defineConfig({
  projectId: 'rm1kkv',
  e2e: {
    //baseUrl: 'https://test.raiser.work/#',
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
    specPattern: 'cypress/e2e/course_gianni/**/*.{js,jsx,ts,tsx,feature}',
    excludeSpecPattern: 'cypress/e2e/course_gianni/other/*.js',
    baseUrl: "http://www.webdriveruniversity.com",
    chromeWebSecurity: false,
    defaultCommandTimeout:10000,
    pageLoadTimeout: 120000,
    screenshotOnRunFailure: true,
    trashAssetsBeforeRuns: true,
    video: false,
    videoUploadOnPasses: false,
    viewportHeight: 1080,
    viewportWidth: 1920,
    env:{
      first_name: "Sarah",
      webdriveruni_homepage: "http://www.webdriveruniversity.com"
    }
  },
  
});
