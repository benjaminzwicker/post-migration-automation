import { test as baseTest } from '@playwright/test';
import { LoginPage } from '../pages/login.page';

export const test = baseTest.extend<{ loginPage: LoginPage }>({
  loginPage: async ({ page }, use) => {
    const loginPage = new LoginPage(page);
    await loginPage.goto();
    await use(loginPage);
  }
});

export { expect } from '@playwright/test';