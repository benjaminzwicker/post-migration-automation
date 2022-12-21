import { Locator, Page } from '@playwright/test';
import * as pendingPaymentsPageData from '../data/pending_payments_page.data.json';

export class PendingPaymentsPage {
  readonly page: Page;

  constructor(page: Page) {
    this.page = page;
  }

  async goto() {
    await this.page.goto(pendingPaymentsPageData.path);
  }
};