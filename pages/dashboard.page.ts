import { Locator, Page } from '@playwright/test';
import * as dashboardPageData from '../data/dashboard_page.data.json';

export class DashboardPage {
  readonly page: Page;

  constructor(page: Page) {
    this.page = page;
  }

  async goto() {
    await this.page.goto(dashboardPageData.path);
  }
};