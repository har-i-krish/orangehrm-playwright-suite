const { test, expect } = require('@playwright/test');

const { LoginPage } = require('../pages/LoginPage');
const { PimPage } = require('../pages/PimPage');
const employees = require('../test-data/employees.json');

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

    test('Add Multiple Employees using JSON', async ({ page }) => {

        for (const employee of employees) {

            await pimPage.openPIM();

            await pimPage.openAddEmployee();

            const employeeId = await pimPage.addEmployee(
                employee.firstName,
                employee.lastName
            );

            // Verify employee was created successfully
            await expect(pimPage.successToast).toBeVisible();

            // Verify we reached Personal Details page
            await expect(page).toHaveURL(/viewPersonalDetails/);

            console.log(
                `Employee Created -> ${employee.firstName} ${employee.lastName} | ID: ${employeeId}`
            );

        }

    });

});