import { Locator, Page } from '@playwright/test';
import * as cavagesPaymentPageData from '../data/cavages_payment_page.data.json';
import { PendingPaymentsPage } from './pending_payments.page';

export class CavagesPaymentPage {
  readonly page: Page;
  readonly detailsHeader: Locator;
  readonly approvalHistoryHeader: Locator;
  readonly auditTrailHeader: Locator;

  constructor(page: Page) {
    this.page = page;
    this.detailsHeader = this.page.getByText(cavagesPaymentPageData.details_header);
    this.approvalHistoryHeader = this.page.getByText(cavagesPaymentPageData.approval_history_header);
    this.auditTrailHeader = this.page.getByText(cavagesPaymentPageData.audit_trail_header);
  }

  async goto() {
    const pendingPaymentsPage = new PendingPaymentsPage(this.page);
    await pendingPaymentsPage.goto();
    await pendingPaymentsPage.selectCavages();
  }
};