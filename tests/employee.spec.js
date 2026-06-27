const { test, expect } = require('@playwright/test');

const { LoginPage } = require('../pages/LoginPage');
const { PimPage } = require('../pages/PimPage');

test.describe('Employee Module', () => {

    let loginPage;
    let pimPage;

    test.beforeEach(async ({ page }) => {

        loginPage = new LoginPage(page);
        pimPage = new PimPage(page);

        await loginPage.goto();
        await loginPage.login('Admin', 'admin123');

    });

    test('Open PIM Module', async ({ page }) => {

        await pimPage.openPIM();

        await expect(page).toHaveURL(/pim/);

    });

    test('Search Employee', async ({ page }) => {

        await pimPage.openPIM();

        await pimPage.searchEmployee('Linda');

        expect(
            await pimPage.getResultCount()
        ).toBeGreaterThan(0);

    });

});