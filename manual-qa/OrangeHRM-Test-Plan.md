# OrangeHRM Login - Test Plan

## 1. Objective

Validate the OrangeHRM login functionality to ensure that users can successfully authenticate with valid credentials and that invalid or incomplete credentials are handled correctly.

## 2. Scope

### In Scope

- Login page availability
- Username field
- Password field
- Login button
- Valid login
- Invalid username
- Invalid password
- Empty username
- Empty password
- Empty username and password
- Required-field validation
- Invalid credential error message
- Successful redirection to dashboard
- Logout after successful login

### Out of Scope

- Employee management
- Leave management
- Recruitment
- Performance management
- Admin configuration
- Database testing
- Performance/load testing
- Security penetration testing

## 3. Test Environment

- Application: OrangeHRM Demo
- Browser: Chromium
- OS: Windows
- Testing Types: Manual + UI Automation
- Test Data: Valid and invalid login credentials

## 4. Test Types

- Functional Testing
- Positive Testing
- Negative Testing
- Boundary Value Analysis
- Equivalence Partitioning
- Decision Table Testing
- Smoke Testing
- Regression Testing
- UI Validation

## 5. Entry Criteria

Testing can begin when:

- Login page is accessible
- Test environment is available
- Valid test credentials are available
- Login functionality is deployed

## 6. Exit Criteria

Testing can be considered complete when:

- All planned login test cases have been executed
- Critical defects are resolved or accepted
- Regression testing is complete
- Test results are documented

## 7. Risks

- Demo environment may be unavailable
- Test credentials may change
- Third-party/demo environment performance may affect results
- UI changes may invalidate existing test cases

## 8. Assumptions

- The OrangeHRM demo environment is available during testing
- Valid credentials are provided
- The application is accessible through a supported browser