import { expect, test } from '../fixtures/login_page.fixture';
import * as testAccountData from '../data/test_account.data.json';
import * as companySelectPageData from '../data/company_select_page.data.json';

test('Sign in should navigate to company select page @post-migration', async ({ loginPage, page }) => {
  await loginPage.signIn({
    email: testAccountData.email,
    password: testAccountData.password
  });
  await expect(page).toHaveURL(companySelectPageData.path);
});