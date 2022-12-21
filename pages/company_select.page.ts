import { Locator, Page } from '@playwright/test';
import * as companySelectPageData from '../data/company_select_page.data.json';

export class CompanySelectPage {
  readonly page: Page;
  readonly companiesHeader: Locator;
  readonly plooto: Locator;

  constructor(page: Page) {
    this.page = page;
    this.companiesHeader = page.locator('a', { hasText: companySelectPageData.companies_header });
    this.plooto = page.getByRole('row').getByText(companySelectPageData.companies.plooto).first();
  }

  async goto() {
    await this.page.goto(companySelectPageData.path);
  }

  async selectPlooto() {
    await this.plooto.click();
  }
};