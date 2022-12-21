import { Locator, Page } from '@playwright/test';
import * as companySelectPageData from '../data/company_select_page.data.json';

export class CompanySelectPage {
  readonly page: Page;
  readonly plooto: Locator;

  constructor(page: Page) {
    this.page = page;
    this.plooto = page.getByRole('row').getByText(companySelectPageData.companies.plooto).first();
  }

  async goto() {
    await this.page.goto(companySelectPageData.path);
  }

  async selectPlooto() {
    await this.plooto.click();
  }
};