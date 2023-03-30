# Basico-cy

npx cypress run --spec "cypress/e2e/gianni_course/**/*.cy.js"

npx cypress run --spec "cypress/e2e/gianni_course/webdriver-uni/*.js"

# override global varaible: 

npx cypress run --headed --browser chrome --spec cypress/e2e/course_gianni/webdriver-uni/contact-us.cy.js --env first_name=Bill

npx cypress run --headed --browser chrome --spec cypress/e2e/course_gianni/webdriver-uni/contact-us.cy.js --env first_name=Tim  --env webdriveruni_homepage=https://www.automationteststore.com/

npx cypress run --record --key 386c0780-4bbe-4bad-a2b3-18fa3b8d511d

npx cypress run --spec cypress/e2e/course_gianni/automation-test-store/contact-us.cy.js --record --key 386c0780-4bbe-4bad-a2b3-18fa3b8d511d


npx cypress run --browser chrome --headed

