import { test as baseTest } from './logged_in.fixture';
import { CompanySelectPage } from '../pages/company_select.page';
import { DashboardPage } from '../pages/dashboard.page';
import { PaymentApprovalsPage } from '../pages/payment_approvals.page';
import { PendingPaymentsPage } from '../pages/pending_payments.page';
import { PaymentApprovalPage } from '../pages/payment_approval.page';

type Pages = {
    companySelectPage: CompanySelectPage;
    dashboardPage: DashboardPage;
    paymentApprovalsPage: PaymentApprovalsPage;
    pendingPaymentsPage: PendingPaymentsPage;
    paymentApprovalPage: PaymentApprovalPage;
  };

export const test = baseTest.extend<Pages>({
  companySelectPage: async ({ page }, use) => {
    const companySelectPage = new CompanySelectPage(page);
    await companySelectPage.goto();
    await use(companySelectPage);
  },
  
  dashboardPage: async ({ page }, use) => {
    const dashboardPage = new DashboardPage(page);
    await dashboardPage.goto();
    await use(dashboardPage);
  },

  paymentApprovalsPage: async ({ page }, use) => {
    const paymentApprovalsPage = new PaymentApprovalsPage(page);
    await paymentApprovalsPage.goto();
    await use(paymentApprovalsPage);
  },

  pendingPaymentsPage: async ({ page }, use) => {
    const pendingPaymentsPage = new PendingPaymentsPage(page);
    await pendingPaymentsPage.goto();
    await use(pendingPaymentsPage);
  },

  paymentApprovalPage: async ({ page }, use) => {
    const paymentApprovalPage = new PaymentApprovalPage(page);
    await paymentApprovalPage.goto();
    await use(paymentApprovalPage);
  },
});
export { expect } from '@playwright/test';