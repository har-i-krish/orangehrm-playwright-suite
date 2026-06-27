class PimPage {

    constructor(page) {

        this.page = page;

        this.pimMenu = page.getByRole('link', {
            name: 'PIM'
        });

        this.employeeNameInput = page.locator('.oxd-input').first();

        this.searchButton = page.getByRole('button', {
            name: 'Search'
        });

        this.tableRows = page.locator('.oxd-table-row');

    }

    async openPIM() {

        await this.pimMenu.click();

    }

    async searchEmployee(name) {

        await this.employeeNameInput.fill(name);

        await this.searchButton.click();

    }

    async getResultCount() {

        return await this.tableRows.count();

    }

}

module.exports = { PimPage };