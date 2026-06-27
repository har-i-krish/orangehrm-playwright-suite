const { test, expect } = require('@playwright/test');
const { LoginPage } = require('../pages/LoginPage');
const { DashboardPage } = require('../pages/DashboardPage');

test.describe('Login Tests', () => {

    let loginPage;

    test.beforeEach(async ({ page }) => {
        loginPage = new LoginPage(page);
        await loginPage.goto();
    });

    test('Valid Login', async ({ page }) => {

        await loginPage.login('Admin', 'admin123');

        await expect(page).toHaveURL(/dashboard/);

        const dashboardPage = new DashboardPage(page);

        await dashboardPage.logout();

        await expect(page).toHaveURL(/login/);

    });

    test('Invalid Password', async () => {

        await loginPage.login('Admin', 'wrongpass');

        await expect(loginPage.errorMessage).toBeVisible();

    });

    test('Empty Username', async ({ page }) => {

        await loginPage.login('', 'admin123');

        await expect(
            page.locator('.oxd-input-group__message').first()
        ).toBeVisible();

    });

    test('Empty Password', async ({ page }) => {

        await loginPage.login('Admin', '');

        await expect(
            page.locator('.oxd-input-group__message').first()
        ).toBeVisible();

    });

});