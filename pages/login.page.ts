import { Locator, Page } from '@playwright/test';
import * as loginPageData from "../data/login_page.data.json";

export class LoginPage {
  readonly page: Page;
  readonly emailInput: Locator;
  readonly passwordInput: Locator;
  readonly signInButton: Locator;

  constructor(page: Page) {
    this.page = page;
    this.emailInput = page.getByPlaceholder(loginPageData.textInputs.email);
    this.passwordInput = page.getByPlaceholder(loginPageData.textInputs.password);
    this.signInButton = page.locator('a', { hasText: loginPageData.buttons.signIn }).first();
  }

  async goto() {
    await this.page.goto(loginPageData.path);
  }

  async signIn({ email, password }) {
    await this.emailInput.fill(email);
    await this.passwordInput.fill(password);
    await this.signInButton.click();
  }
};