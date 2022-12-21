import { test as baseTest } from './logged_in.fixture';
import { CompanySelectPage } from '../pages/company_select.page';

type Pages = {
    companySelectPage: CompanySelectPage;
  };

export const test = baseTest.extend<Pages>({
  companySelectPage: async ({ page }, use) => {
    const companySelectPage = new CompanySelectPage(page);
    companySelectPage.goto();
    await use(companySelectPage);
  }
});

export { expect } from '@playwright/test';