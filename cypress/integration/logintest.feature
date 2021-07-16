Feature: login

    Scenario: login with the correct credential
        Given I am on the login page
        When I input the correct username and password
        And I click on the signin button
        Then I should login successfully


    Scenario: login with the locked out username
        Given I am on the login page
        When I input the locked out username and password
        And I click on the signin button
        Then I should get user has been locked out error

    Scenario: login with the correct username and incorrect password
        Given I am on the login page
        When I input the correct username and incorrect password
        And I click on the signin button
        Then I should get "Username and password do not match" error

    Scenario: login with the correct username and incorrect password
        Given I am on the login page
        When I input the correct username and empty password
        And I click on the signin button
        Then I should get "Password is required" error