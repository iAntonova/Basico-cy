# Basico-cy

npx cypress run --spec "cypress/e2e/gianni_course/**/*.cy.js"

npx cypress run --spec "cypress/e2e/gianni_course/webdriver-uni/*.js"

# override global varaible: 

npx cypress run --headed --browser chrome --spec cypress/e2e/course_gianni/webdriver-uni/contact-us.cy.js --env first_name=Bill

npx cypress run --headed --browser chrome --spec cypress/e2e/course_gianni/webdriver-uni/contact-us.cy.js --env first_name=Tim  --env webdriveruni_homepage=https://www.automationteststore.com/

npx cypress run --record --key 

npx cypress run --spec cypress/e2e/course_gianni/automation-test-store/contact-us.cy.js --record --key 386c0780-4bbe-4bad-a2b3-18fa3b8d511d


npx cypress run --browser chrome --headed

npm run triggerAllTests-headless

# 56: Reporters
https://docs.cypress.io/guides/tooling/reporters#Multiple-reporters
npm install --save-dev cypress-multi-reporters mocha-junit-reporter
result: npx junit-merge -d cypress/results/junit -o cypress/results/junit/results.xml
reporter-congig.json
{
    "reporterEnabled": "spec, mocha-junit-reporter",
    "mochaJunitReporterReporterOptions": {
        "mochaFile": "cypress/results/junit/results-[hash].xml"
    }
}

mochawesome-report-generator:
https://www.npmjs.com/package/mochawesome-report-generator
https://docs.cypress.io/guides/tooling/reporters#Multiple-reporters
> npm install --save-dev mochawesome mochawesome-merge mochawesome-report-generator
reporter-congig.json
{
    "reporterEnabled": "spec, cypress-multi-reporters",
    "mochaJunitReporterReporterOptions": {
      "mochaFile": "cypress/results/junit/results-[hash].xml"
    },
    "reporterOptions": {
      "reporterEnabled": "mochawesome",
      "mochawesomeReporterOptions": {
        "reportDir": "cypress/results/mochawesome",
        "quite": true,
        "overwrite": false,
        "html": false,
        "json": true
      }
    }
  }

  > npx mochawesome-merge cypress/results/mochawesome/*.json > mochawesome.json && npx marge mochawesome.json

https://docs.cypress.io/guides/tooling/reporters#Multiple-reporters

https://docs.cypress.io/api/plugins/configuration-api#Switch-between-multiple-configuration-files
  >npx cypress open --env configFile=staging

> npx cypress run --spec cypress/e2e/course_gianni/webdriver-uni/checkboxes.cy.js --env configFile=staging --headed

https://docs.cypress.io/guides/guides/test-retries

git:
> git remote -v

Running Specific Tests by Browser
https://docs.cypress.io/guides/guides/cross-browser-testing#Running-Specific-Tests-by-Browser

Cypress.isBrowser
https://docs.cypress.io/api/cypress-api/isbrowser#Arguments
