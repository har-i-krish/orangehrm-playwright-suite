# QA Fundamentals

## Severity vs Priority

### Severity

Severity describes the technical/business impact of a defect on the system.

### Priority

Priority describes how urgently the defect should be fixed.

Example:

A login failure affecting every user:
- Severity: Critical
- Priority: High

A visual typo before an important client demonstration:
- Severity: Low
- Priority: High

---

# Defect Lifecycle

Typical lifecycle:

New
→ Assigned
→ Open
→ In Progress
→ Fixed
→ Retest
→ Verified
→ Closed

Possible alternative states include:

### Reopened
The defect still exists after the developer marked it fixed.

### Rejected
The reported behavior is determined not to be a valid defect.

### Duplicate
The same issue has already been reported.

### Deferred
The defect is valid but the team decides to fix it later.

### Cannot Reproduce
The team cannot reproduce the reported behavior using the available information and environment.

---

# SDLC

Software Development Life Cycle:

1. Requirements
2. Design
3. Development
4. Testing
5. Deployment
6. Maintenance

An SDET/QA engineer can contribute during requirements analysis, test planning, automation development, test execution, defect investigation, regression testing and CI/CD.

---

# STLC

Software Testing Life Cycle:

1. Requirement Analysis
2. Test Planning
3. Test Case Development
4. Test Environment Setup
5. Test Execution
6. Defect Reporting
7. Test Closure

STLC focuses specifically on the activities involved in testing the software.

---

# Smoke Testing

Smoke testing is a quick set of high-level checks used to determine whether a build is stable enough for deeper testing.

Example:
- Application opens
- Login works
- Dashboard loads

---

# Sanity Testing

Sanity testing is focused testing of a specific area after a change or fix.

Example:

After a developer fixes login validation, test:
- Valid login
- Invalid login
- Empty credentials

---

# Regression Testing

Regression testing verifies that existing functionality still works after changes are introduced.

Example:

After changing the login module, test login plus other important existing application functionality to ensure the change did not introduce unintended problems.

---

# Equivalence Partitioning

Inputs are divided into groups expected to behave similarly. Representative values from each group can be tested instead of every possible value.

Example:

For a field accepting 1–50 characters:

- 0 characters → invalid partition
- 1–50 characters → valid partition
- >50 characters → invalid partition

---

# Boundary Value Analysis

Tests values around the boundaries of an input range.

For 1–50:

- 0
- 1
- 2
- 49
- 50
- 51

---

# Decision Table Testing

Decision tables test combinations of conditions and their expected outcomes.

For login:

| Username | Password | Result |
|---|---|---|
| Valid | Valid | Login |
| Valid | Invalid | Error |
| Invalid | Valid | Error |
| Invalid | Invalid | Error |

---

# Manual Testing vs Automation

Manual testing is useful for exploratory testing, usability evaluation, new functionality and scenarios where human judgment is important.

Automation is useful for repeatable regression tests, large test suites, API validation, CI execution and frequently executed scenarios.

Automation does not replace all manual testing.

---

# SDET / QA Automation Responsibilities

An SDET may:

- Analyze requirements
- Design test scenarios
- Develop automated tests
- Maintain Page Objects/frameworks
- Perform API testing
- Investigate failures
- Report defects
- Execute regression suites
- Integrate tests with CI/CD
- Review test results
- Collaborate with developers