import { Locator, Page } from '@playwright/test';
import * as companySelectPageData from '../data/company_select_page.data.json';

export class CompanySelectPage {
  readonly page: Page;
  readonly companiesList: Locator;
  readonly plooto: Locator;
  readonly companiesHeader: Locator;

  constructor(page: Page) {
    this.page = page;
    this.companiesList = page.getByRole('row');
    this.plooto = page.getByRole('row').getByText(companySelectPageData.companies.plooto).first();
    this.companiesHeader = page.locator('a', { hasText: companySelectPageData.companies_header });
  }

  async goto() {
    await this.page.goto(companySelectPageData.path);
  }

  async selectPlooto() {
    await this.plooto.click();
  }
};