import { Locator, Page } from '@playwright/test';
import * as cavagesPaymentPageData from '../data/cavages_payment_page.data.json';

export class CavagesPaymentPage {
  readonly page: Page;

  constructor(page: Page) {
    this.page = page;
  }

  async goto() {
    await this.page.goto(cavagesPaymentPageData.path);
  }
};