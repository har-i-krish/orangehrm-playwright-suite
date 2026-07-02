class PimPage {

    constructor(page) {
        this.page = page;

        // Navigation
        this.pimMenu = page.getByRole('link', { name: 'PIM' });
        this.addEmployeeButton = page.getByRole('button', { name: 'Add' });

        // Search
        this.employeeIdSearch = page.locator(
            'label:has-text("Employee Id") + div input'
        );
        this.searchButton = page.getByRole('button', { name: 'Search' });
        this.tableDataRows = page.locator('.oxd-table-body .oxd-table-row');

        // Add Employee
        this.firstNameInput = page.locator('input[name="firstName"]');
        this.lastNameInput = page.locator('input[name="lastName"]');
        this.employeeIdInput = page.getByRole('textbox').nth(4);
        this.saveButton = page.getByRole('button', { name: 'Save' });

        // Success Toast
        this.successToast = page.locator('.oxd-toast--success');
    }

    async openPIM() {
        await this.pimMenu.click();
        await this.page.waitForURL(/pim/, { timeout: 10000 });
    }

    async openAddEmployee() {
        await this.addEmployeeButton.click();
        await this.page.waitForURL(/addEmployee/, { timeout: 10000 });
    }

    async addEmployee(firstName, lastName) {

        const employeeId = Math.floor(
            100000 + Math.random() * 900000
        ).toString();

        await this.firstNameInput.fill(firstName);

        await this.lastNameInput.fill(lastName);

        await this.employeeIdInput.fill(employeeId);

        await this.saveButton.click();

        await this.successToast.waitFor({
            state: 'visible',
            timeout: 15000
        });

        return employeeId;
    }

    async searchEmployee(employeeId) {

        await this.employeeIdSearch.fill(employeeId);

        await this.searchButton.click();

        await this.page.waitForLoadState('networkidle');

    }

    async getResultCount() {

        return await this.tableDataRows.count();

    }

}

module.exports = { PimPage };