# OrangeHRM Playwright Automation Framework

An end-to-end UI automation framework for the OrangeHRM demo application built using **Playwright** and **JavaScript**, following the **Page Object Model (POM)** design pattern.

This project demonstrates UI automation, reusable page objects, data-driven testing with JSON, and Playwright best practices for a junior QA Automation portfolio.

---

## Features

### Authentication Module

| Test Scenario | Description |
|--------------|-------------|
| ✅ Valid Login | Logs in with valid credentials and verifies dashboard access |
| ✅ Invalid Password | Verifies error message for incorrect password |
| ✅ Empty Username | Validates required username field |
| ✅ Empty Password | Validates required password field |
| ✅ Logout | Logs out successfully and returns to the login page |

---

### Employee Module

| Test Scenario | Description |
|--------------|-------------|
| ✅ Open PIM Module | Navigates successfully to the PIM module |
| ✅ Add Multiple Employees | Creates multiple employees |
| ✅ Data-Driven Testing | Reads employee data from a JSON file |
| ✅ Employee Creation Validation | Verifies successful employee creation using success notifications |

---

# Tech Stack

| Technology | Purpose |
|------------|---------|
| Playwright | Browser automation framework |
| JavaScript (Node.js) | Test scripting language |
| Page Object Model (POM) | Framework architecture |
| JSON | External test data |
| Git & GitHub | Version control |
| HTML Reports | Test execution reporting |

---

# Project Structure

```text
orangehrm-playwright-suite
│
├── pages
│   ├── LoginPage.js
│   ├── DashboardPage.js
│   └── PimPage.js
│
├── tests
│   ├── login.spec.js
│   └── employee.spec.js
│
├── test-data
│   └── employees.json
│
├── playwright.config.js
├── package.json
├── package-lock.json
├── .gitignore
└── README.md
```

---

# Design Pattern

This framework follows the **Page Object Model (POM)**.

### Advantages

- Encapsulates page locators and actions
- Improves code reusability
- Reduces duplication
- Makes tests easier to maintain
- Keeps test scripts clean and readable

---

# Test Coverage

## login.spec.js

- ✅ Valid Login
- ✅ Invalid Password
- ✅ Empty Username
- ✅ Empty Password
- ✅ Logout

---

## employee.spec.js

- ✅ Open PIM Module
- ✅ Add Multiple Employees
- ✅ JSON Data-Driven Testing
- ✅ Employee Creation Validation

---

# Getting Started

## Prerequisites

- Node.js 16+
- npm

---

## Installation

```bash
npm install
npx playwright install
```

---

## Run All Tests

```bash
npx playwright test
```

---

## Run Login Tests

```bash
npx playwright test tests/login.spec.js
```

---

## Run Employee Tests

```bash
npx playwright test tests/employee.spec.js
```

---

## Run in Headed Mode

```bash
npx playwright test --headed
```

---

## View HTML Report

```bash
npx playwright show-report
```

---

# Reporting

Playwright automatically generates an HTML report after test execution containing:

- Test execution summary
- Pass/Fail status
- Execution duration
- Error details (if any)
- Trace information (when enabled)

---

# Current Project Status

- ✅ 6 Automated Test Cases
- ✅ Page Object Model (POM)
- ✅ JSON Data-Driven Testing
- ✅ HTML Reporting
- ✅ Chromium Test Execution
- ✅ Modular Project Structure

---

# Skills Demonstrated

- Playwright Automation
- JavaScript (ES6)
- Page Object Model (POM)
- JSON Data-Driven Testing
- Assertions
- Async/Await
- Locator Strategies
- Reusable Automation Framework Design
- Git & GitHub

---

# Future Improvements

- Employee Search Automation
- Employee Edit Functionality
- Employee Delete Functionality
- Cross-Browser Testing (Firefox & WebKit)
- GitHub Actions CI/CD Pipeline
- Environment Variables (.env)
- API Testing with Playwright

---

# Author

**Harikrishnan J**

Aspiring QA Automation Engineer

- GitHub: *Add your GitHub profile link*
- LinkedIn: *Add your LinkedIn profile link*

---

## Test Results

✔ **6 Tests Passed**

```
6 passed (30.1s)
```