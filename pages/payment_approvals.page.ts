import { Locator, Page } from '@playwright/test';
import { DashboardPage } from './dashboard.page';

export class PaymentApprovalsPage {
  readonly page: Page;
  readonly paymentApprovalItems: Locator;

  constructor(page: Page) {
    this.page = page;
    this.paymentApprovalItems = page.getByRole('row');
  }

  async goto() {
    const dashboardPage = new DashboardPage(this.page);
    await dashboardPage.goto();
    await dashboardPage.selectPaymentApprovals();
  }
};