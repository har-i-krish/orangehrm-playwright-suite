const { Given, When, Then } = require('@cucumber/cucumber');
const { expect } = require('@playwright/test');
const { LoginPage } = require('../../pages/LoginPage');

const VALID_USERNAME = 'Admin';
const VALID_PASSWORD = 'admin123';

Given('I am on the OrangeHRM login page', async function () {
    this.loginPage = new LoginPage(this.page);

    await this.loginPage.goto();
});

When('I login with valid credentials', async function () {
    await this.loginPage.login(
        VALID_USERNAME,
        VALID_PASSWORD
    );
});

When('I login with an invalid username', async function () {
    await this.loginPage.login(
        'InvalidUser',
        VALID_PASSWORD
    );
});

When('I login with a valid username and invalid password', async function () {
    await this.loginPage.login(
        VALID_USERNAME,
        'InvalidPassword'
    );
});

When('I login without entering credentials', async function () {
    await this.loginPage.login('', '');
});

Then('I should see the dashboard', async function () {
    await expect(this.page).toHaveURL(/dashboard/);
});

Then('I should see the invalid credentials message', async function () {
    await expect(this.loginPage.errorMessage).toBeVisible();
});

Then('I should see the required field validation', async function () {
    await expect(this.loginPage.requiredFieldMessage).toBeVisible();
});