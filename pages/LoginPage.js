class LoginPage {

    constructor(page) {

        this.page = page;

        this.usernameInput = page.locator('input[name="username"]');

        this.passwordInput = page.locator('input[name="password"]');

        this.loginButton = page.locator('button[type="submit"]');

        this.errorMessage = page.locator('.oxd-alert-content-text');

        // Shown under a field (e.g. username/password) when left empty
        this.requiredFieldMessage = page.locator('.oxd-input-group__message').first();
    }

    async goto() {
        await this.page.goto(
            'https://opensource-demo.orangehrmlive.com/web/index.php/auth/login'
        );
    }

    async login(username, password) {
        await this.usernameInput.fill(username);
        await this.passwordInput.fill(password);
        await this.loginButton.click();
    }

    async getErrorMessage() {
        return await this.errorMessage.textContent();
    }

}

module.exports = { LoginPage };