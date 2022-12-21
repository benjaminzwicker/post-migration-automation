import { Locator, Page } from '@playwright/test';
import { DashboardPage } from './dashboard.page';
import * as pendingPaymentsPageData from '../data/pending_payments_page.data.json'

export class PendingPaymentsPage {
  readonly page: Page;
  readonly pendingPaymentsHeader: Locator;
  readonly pendingPaymentItems: Locator;
  readonly cavagesContact: Locator;

  constructor(page: Page) {
    this.page = page;
    this.pendingPaymentsHeader = page.locator('h3', { hasText: pendingPaymentsPageData.pending_payments_header });
    this.pendingPaymentItems = page.getByRole('row');
    this.cavagesContact = page.getByRole('cell', { name: pendingPaymentsPageData.contacts.cavages });
  }

  async goto() {
    const dashboardPage = new DashboardPage(this.page);
    await dashboardPage.goto();
    await dashboardPage.selectPendingPayments();
  }

  async selectCavages() {
    await this.cavagesContact.click();
  }
};