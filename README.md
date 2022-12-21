# Post Migration Automation Challenge

# Table of contents
- [Table of contents](#table-of-contents)
  - [Usage](#usage)
    - [Running GitHub Actions](#github-actions)
    - [Running Locally](#running-locally)
  - [Design Decisions](#design-decisions)
    - [Fixtures](#fixtures)
    - [Test Organization](#test-organization)
    - [Data](#data)

# Usage
## Running GitHub Actions
GitHub actions have been created to manually run tests, and automatically run tests on every pull and PR. Manual runs take the base url as input, which is set to an environment variable that is read by playwright.config.ts.

## Running Locally
* Clone: `git clone git@github.com:benjaminzwicker/post-migration-automation.git --checkout`
* Navigate to project: `cd '.\post-migration-automation\`
* Run tests: `npx playwright test`

# Design Decisions
## Fixtures
Fixtures were used to create test environments. This design pattern is useful for organizing pages doing the initial setup of mainly every page that is needed for the tests. One notable quality is the payment_pages fixture extends the logged_in fixture since the payment pages are run on the presumption that the user is already logged in. This is not the case for the login_page fixture.

## Test Organization
Tests were organized by the area of the web app that was being tested. I find this a convenient way to organize tests instead of organizing a file by its test suite, since tags [can be added to tests to add them to test suites](https://playwright.dev/docs/test-annotations#tag-tests). I've add @postmigration to the tests as an example.

## Data
JSON files were created to hold page data so that there was one place to maintain page elements. Email and password are not needed to login but were added anyway to demonstrate how they could work. A JSON file was created for all of the account data under the assumption that the test accounts we're using already exist. Some alternatives are to get them from environment variables, or [create them programmatically via signup, and then reuse the account in the scope of the worker fixture](https://playwright.dev/docs/next/test-fixtures#worker-scoped-fixtures).
