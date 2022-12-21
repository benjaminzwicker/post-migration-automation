import { Locator, Page } from '@playwright/test';
import * as paymentApprovalPageData from '../data/payment_approval_page.data.json';

export class PaymentApprovalPage {
  readonly page: Page;

  constructor(page: Page) {
    this.page = page;
  }

  async goto() {
    await this.page.goto(paymentApprovalPageData.path);
  }
};