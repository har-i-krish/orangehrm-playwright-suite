Feature: OrangeHRM Login

  Scenario: Successful login
    Given I am on the OrangeHRM login page
    When I login with valid credentials
    Then I should see the dashboard

  Scenario: Invalid username
    Given I am on the OrangeHRM login page
    When I login with an invalid username
    Then I should see the invalid credentials message

  Scenario: Invalid password
    Given I am on the OrangeHRM login page
    When I login with a valid username and invalid password
    Then I should see the invalid credentials message

  Scenario: Empty credentials
    Given I am on the OrangeHRM login page
    When I login without entering credentials
    Then I should see the required field validation