const { test, expect } = require('@playwright/test');
const { LoginPage } = require('../pages/LoginPage');

test.describe('Login Tests', () => {

    let loginPage;

    test.beforeEach(async ({ page }) => {
        loginPage = new LoginPage(page);
        await loginPage.goto();
    });

    test('Valid Login', async ({ page }) => {

        await loginPage.login('Admin', 'admin123');

        await expect(page).toHaveURL(/dashboard/);

    });

    test('Invalid Password', async () => {

        await loginPage.login('Admin', 'wrongpass');

        await expect(loginPage.errorMessage).toBeVisible();

    });

});