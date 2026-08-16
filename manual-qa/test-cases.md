# OrangeHRM Login - Test Cases

## Positive Testing

| ID | Test Case | Test Data | Expected Result |
|---|---|---|---|
| TC-001 | Login with valid credentials | Admin / admin123 | User is redirected to dashboard |
| TC-002 | Logout after successful login | Valid logged-in user | User is returned to login page |

## Negative Testing

| ID | Test Case | Test Data | Expected Result |
|---|---|---|---|
| TC-003 | Invalid username | InvalidUser / admin123 | Invalid credentials message displayed |
| TC-004 | Invalid password | Admin / wrongpass | Invalid credentials message displayed |
| TC-005 | Empty username | "" / admin123 | Username required validation displayed |
| TC-006 | Empty password | Admin / "" | Password required validation displayed |
| TC-007 | Empty username and password | "" / "" | Required field validation displayed |

---

## Equivalence Partitioning

Equivalence Partitioning divides input data into groups that are expected to behave similarly. A representative value from each group can then be tested.

For a hypothetical username field accepting 1–50 characters:

| Partition | Example | Expected |
|---|---|---|
| Invalid: 0 characters | Empty | Rejected |
| Valid: 1–50 characters | Admin | Accepted |
| Invalid: >50 characters | 51-character value | Rejected/validated |

### Example Test Cases

| ID | Technique | Test Data | Expected |
|---|---|---|---|
| EP-001 | Equivalence Partitioning | Empty username | Validation displayed |
| EP-002 | Equivalence Partitioning | Admin | Username accepted |
| EP-003 | Equivalence Partitioning | 51-character username | Validation/rejection |

---

## Boundary Value Analysis

Boundary Value Analysis focuses on values at and around the limits of an accepted range.

For a hypothetical username length of 1–50 characters:

| ID | Length | Expected |
|---|---:|---|
| BVA-001 | 0 | Invalid |
| BVA-002 | 1 | Valid |
| BVA-003 | 2 | Valid |
| BVA-004 | 49 | Valid |
| BVA-005 | 50 | Valid |
| BVA-006 | 51 | Invalid |

The important boundary values are just below, at, and just above the valid limits.

---

## Decision Table Testing

Login behavior depends on two conditions:

- Username validity
- Password validity

| Rule | Username | Password | Expected Result |
|---|---|---|---|
| R1 | Valid | Valid | Login successful |
| R2 | Valid | Invalid | Invalid credentials |
| R3 | Invalid | Valid | Invalid credentials |
| R4 | Invalid | Invalid | Invalid credentials |

Decision tables are useful when different combinations of conditions produce different expected outcomes.