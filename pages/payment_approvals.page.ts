import { Locator, Page } from '@playwright/test';
import * as paymentApprovalsPageData from '../data/payment_approvals_page.data.json';

export class PaymentApprovalsPage {
  readonly page: Page;

  constructor(page: Page) {
    this.page = page;
  }

  async goto() {
    await this.page.goto(paymentApprovalsPageData.path);
  }
};