# Basico-cy

npx cypress run --spec "cypress/e2e/gianni_course/**/*.cy.js"

npx cypress run --spec "cypress/e2e/gianni_course/webdriver-uni/*.js"

# override global varaible: 

npx cypress run --headed --browser chrome --spec cypress/e2e/course_gianni/webdriver-uni/contact-us.cy.js --env first_name=Bill

npx cypress run --headed --browser chrome --spec cypress/e2e/course_gianni/webdriver-uni/contact-us.cy.js --env first_name=Tim  --env webdriveruni_homepage=https://www.automationteststore.com/