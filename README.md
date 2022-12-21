# post-migration-automation
Automation Challenge

# Design Notes
## Accounts
Email and password are not needed to login but were implemented anyway to demonstrate how they could work. A JSON file was created for all of the account data under the assumption that the test accounts we're using already exist. Some alternatives are to get them from environment variables, or [create them programmatically via signup, and then reuse the account in the scope of the worker fixture](https://playwright.dev/docs/next/test-fixtures#worker-scoped-fixtures).
