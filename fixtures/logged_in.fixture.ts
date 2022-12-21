import { test as base } from '@playwright/test';
import { LoginPage } from '../pages/login.page';
import * as accountData from "../data/test_account.data.json";

export const test = base.extend<{}>({
    page: async({ page }, use) => {
        const loginPage = new LoginPage(page);
        await loginPage.goto();
        await loginPage.signIn({
            email: accountData.email,
            password: accountData.password
        });
        await use(loginPage.page);
    }
});
export { expect } from '@playwright/test';