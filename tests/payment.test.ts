import { expect, test } from '../fixtures/payment_pages.fixture';
import * as dashboardPageData from '../data/dashboard_page.data.json';
import * as paymentApprovalsPageData from '../data/payment_approvals_page.data.json';
import * as pendingPaymentsPageData from '../data/pending_payments_page.data.json';
import * as cavagesPaymentPageData from '../data/cavages_payment_page.data.json'

test('Company Selection page displays a list of companies containing Plooto @postmigration', async ({ companySelectPage }) => {
  await expect(companySelectPage.companiesHeader).toBeVisible;
  await expect(await companySelectPage.companiesList.count()).toBeGreaterThan(1)
});

test('Selecting Plooto from company selection will lead to the dashboard @postmigration', async ({ companySelectPage, page }) => {
    await companySelectPage.selectPlooto();
    await expect(page).toHaveURL(dashboardPageData.path);
});

test('Plooto dashboard can navigate to payment approvals @postmigration', async ({ dashboardPage, page }) => {
  await dashboardPage.selectPaymentApprovals();
  await expect(page).toHaveURL(paymentApprovalsPageData.path);
});

test('Plooto dashboard can navigate to pending payments @postmigration', async ({ dashboardPage, page }) => {
  await dashboardPage.selectPendingPayments();
  await expect(page).toHaveURL(pendingPaymentsPageData.path);
});

test('Payment approvals has a single payment approval @postmigration', async ({ paymentApprovalsPage, page }) => {
  await expect(paymentApprovalsPage.paymentApprovalsHeader).toBeVisible;
  await expect(paymentApprovalsPage.paymentApprovalItems).toHaveCount(2); // Two including header
});

test('Pending payments displays multiple pending payments @postmigration', async ({ pendingPaymentsPage, page }) => {
  await expect(pendingPaymentsPage.pendingPaymentsHeader).toBeVisible;
  await expect(await pendingPaymentsPage.pendingPaymentItems.count()).toBeGreaterThan(1);
});

test('Pending payments page can navigate to cavages payment approval page @postmigration', async ({ pendingPaymentsPage, page }) => {
  await pendingPaymentsPage.selectCavages();
  await expect(page).toHaveURL(cavagesPaymentPageData.path);
});

test('Cavages payment approval page displays payment details header @postmigration', async ({ cavagesPaymentPage }) => {
  await expect(cavagesPaymentPage.detailsHeader).toBeVisible();
});

test('Cavages payment approval page displays payment approval history header @postmigration', async ({ cavagesPaymentPage }) => {
  await expect(cavagesPaymentPage.approvalHistoryHeader).toBeVisible();
});

test('Cavages payment approval page displays audit trail header @postmigration', async ({ cavagesPaymentPage }) => {
  await expect(cavagesPaymentPage.auditTrailHeader).toBeVisible();
});