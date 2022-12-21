# Post Migration Automation Challenge

# Table of contents
- [Table of contents](#table-of-contents)
  - [Usage](#usage)
    - [Running GitHub Actions](#running-github-actions)
    - [Running Locally](#running-locally)
  - [Design Decisions](#design-decisions)
    - [Fixtures](#fixtures)
    - [Test Organization](#test-organization)
    - [Data](#data)

# Usage
## Running GitHub Actions
GitHub actions have been created to manually run tests, and automatically run tests on every pull and PR. Manual runs take the base url as input, which is set to an environment variable that is read by playwright.config.ts. Go to https://github.com/benjaminzwicker/post-migration-automation/actions/workflows/test_manual.yml and select `Run workflow` to run manually

## Running Locally
* Clone: `git clone git@github.com:benjaminzwicker/post-migration-automation.git --checkout`
* Navigate to project: `cd '.\post-migration-automation\`
* From Playwright terminal open command prompt and set the environment variable `set BASE_URL=https://happy-field-011ab7b10.2.azurestaticapps.net/`
* Install packages from npm: `npm i`
* Run tests: `npx playwright test` (add the `--headed` tag to watch the tests running)

# Design Decisions
## Fixtures
Fixtures were used to create test environments. This design pattern is useful for organizing pages doing the initial setup of mainly every page that is needed for the tests. One notable quality is the payment_pages fixture extends the logged_in fixture since the payment pages are run on the presumption that the user is already logged in. This is not the case for the login_page fixture.

## Test Organization
Test files were organized by the area of the web app that was being tested. I find this a convenient way to organize tests instead of organizing a file by its test suite, since tags [can be added to tests to add them to test suites](https://playwright.dev/docs/test-annotations#tag-tests). I've add @postmigration to the tests as an example. The tests themselves were kept mainly independent so that they wouldn't influinceeachother. This means there's a new login for each test. Test time can be dramatically reduced by combining the checks into one test or restructuring the tests to use steps. Doing so would depend on the business requirements for testing.

## Data
JSON files were created to hold page data so that there was one place to maintain page elements. Email and password are not needed to login but were added anyway to demonstrate how they could work. A JSON file was created for all of the account data under the assumption that the test accounts we're using already exist. Some alternatives are to get them from environment variables, or [create them programmatically via signup, and then reuse the account in the scope of the worker fixture](https://playwright.dev/docs/next/test-fixtures#worker-scoped-fixtures).
