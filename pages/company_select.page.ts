import { Locator, Page } from '@playwright/test';
import * as companySelectPageData from '../data/companySelectPage.data.json';

export class CompanySelectPage {
  readonly page: Page;

  constructor(page: Page) {
    this.page = page;
  }

  async goto() {
    await this.page.goto(companySelectPageData.path);
  }
}