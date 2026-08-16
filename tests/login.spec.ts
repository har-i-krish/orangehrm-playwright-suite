import { test, expect } from '@playwright/test';
import { LoginPage } from '../pages/LoginPage';
import { DashboardPage } from '../pages/DashboardPage';

interface LoginCredentials {
    username: string;
    password: string;
}

const validCredentials: LoginCredentials = {
    username: 'Admin',
    password: 'admin123'
};

test.describe('Login Tests - TypeScript', () => {

    let loginPage: LoginPage;

    test.beforeEach(async ({ page }) => {
        loginPage = new LoginPage(page);
        await loginPage.goto();
    });

    test('Valid Login', async ({ page }) => {

        await loginPage.login(
            validCredentials.username,
            validCredentials.password
        );

        await expect(page).toHaveURL(/dashboard/);

        const dashboardPage = new DashboardPage(page);

        await dashboardPage.logout();

        await expect(page).toHaveURL(/login/);
    });

    test('Invalid Password', async () => {

        const invalidCredentials: LoginCredentials = {
            username: 'Admin',
            password: 'wrongpass'
        };

        await loginPage.login(
            invalidCredentials.username,
            invalidCredentials.password
        );

        await expect(loginPage.errorMessage).toBeVisible();
    });

    test('Empty Username', async () => {

        const credentials: LoginCredentials = {
            username: '',
            password: 'admin123'
        };

        await loginPage.login(
            credentials.username,
            credentials.password
        );

        await expect(loginPage.requiredFieldMessage).toBeVisible();
    });

    test('Empty Password', async () => {

        const credentials: LoginCredentials = {
            username: 'Admin',
            password: ''
        };

        await loginPage.login(
            credentials.username,
            credentials.password
        );

        await expect(loginPage.requiredFieldMessage).toBeVisible();
    });

});