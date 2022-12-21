import { Locator, Page } from '@playwright/test';
import * as dashboardPageData from '../data/dashboard_page.data.json';
import { CompanySelectPage } from './company_select.page';

export class DashboardPage {
  readonly page: Page;
  readonly paymentApprovals: Locator;
  readonly pendingPayments: Locator;

  constructor(page: Page) {
    this.page = page;
    this.paymentApprovals = page.getByRole('link', { name: dashboardPageData.nav.paymentApprovals });
    this.pendingPayments = page.getByRole('link', { name: dashboardPageData.nav.pendingPayments });
  }

  async goto() {
    const companySelectPage = new CompanySelectPage(this.page);
    await companySelectPage.goto();
    await companySelectPage.selectPlooto();
  }

  async selectPaymentApprovals() {
    await this.paymentApprovals.first().click()
  }

  async selectPendingPayments() {
    await this.pendingPayments.first().click()
  }
};