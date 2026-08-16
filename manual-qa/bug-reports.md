# OrangeHRM Login - Bug Reports

## BUG-001

### Title
Valid users cannot log into OrangeHRM

### Environment
- Application: OrangeHRM Demo
- Browser: Chrome
- OS: Windows

### Preconditions
A valid OrangeHRM username and password are available.

### Steps to Reproduce
1. Open the OrangeHRM login page.
2. Enter a valid username.
3. Enter a valid password.
4. Click Login.

### Test Data
Username: Admin  
Password: admin123

### Expected Result
The user should be successfully authenticated and redirected to the dashboard.

### Actual Result
The application displays an "Invalid credentials" message and does not allow login.

### Severity
Critical

### Priority
High

### Status
New

---

## BUG-002

### Title
Login page logo is slightly misaligned

### Environment
- Application: OrangeHRM Demo
- Browser: Chrome
- OS: Windows

### Preconditions
Login page is accessible.

### Steps to Reproduce
1. Open the OrangeHRM login page.
2. Observe the company logo.

### Expected Result
The logo should be correctly aligned according to the UI design.

### Actual Result
The logo appears slightly shifted horizontally.

### Severity
Low

### Priority
Low

### Status
New

---

## BUG-003

### Title
Typographical error displayed on login page before client demonstration

### Environment
- Application: OrangeHRM Demo
- Browser: Chrome
- OS: Windows

### Preconditions
Login page is accessible.

### Steps to Reproduce
1. Open the OrangeHRM login page.
2. Observe the welcome text.

### Expected Result
The text should display:

"Welcome to OrangeHRM"

### Actual Result
The text displays:

"Welcom to OrangeHRM"

### Severity
Low

### Priority
High

### Status
New

### Business Context
A major client demonstration is scheduled for the following day, so the issue should be corrected urgently despite having low functional impact.