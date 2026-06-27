class DashboardPage {

    constructor(page) {

        this.page = page;

        this.userDropdown = page.locator('.oxd-userdropdown-tab');

        this.logoutButton = page.getByRole('menuitem', {
            name: 'Logout'
        });

    }

    async logout() {

        await this.userDropdown.click();

        await this.logoutButton.click();

    }

}

module.exports = { DashboardPage };