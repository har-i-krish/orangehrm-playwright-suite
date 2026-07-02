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

    test('Empty Username', async () => {

        await loginPage.login('', 'admin123');

        await expect(loginPage.requiredFieldMessage).toBeVisible();

    });

    test('Empty Password', async () => {

        await loginPage.login('Admin', '');

        await expect(loginPage.requiredFieldMessage).toBeVisible();

    });

});