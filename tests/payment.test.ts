import { expect, test } from '../fixtures/payment_pages.fixture';
import * as dashboardPageData from '../data/dashboard_page.data.json';

test('Company Selection page displays a list of companies containing Plooto @postmigration', async ({ companySelectPage }) => {
  await expect(companySelectPage.companiesHeader).toBeVisible;
});

test('Selecting Plooto from company selection will lead to the dashboard @postmigration', async ({ companySelectPage, page }) => {
    await companySelectPage.selectPlooto();
    await expect(page).toHaveURL(dashboardPageData.path);
});