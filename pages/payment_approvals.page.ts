import { Locator, Page } from '@playwright/test';
import { DashboardPage } from './dashboard.page';
import * as paymentApprovalsPageData from '../data/payment_approvals_page.data.json';

export class PaymentApprovalsPage {
  readonly page: Page;
  readonly paymentApprovalsHeader: Locator;
  readonly paymentApprovalItems: Locator;

  constructor(page: Page) {
    this.page = page;
    this.paymentApprovalsHeader = page.locator('h3', { hasText: paymentApprovalsPageData.payment_approvals_header })
    this.paymentApprovalItems = page.getByRole('row');
  }

  async goto() {
    const dashboardPage = new DashboardPage(this.page);
    await dashboardPage.goto();
    await dashboardPage.selectPaymentApprovals();
  }
};