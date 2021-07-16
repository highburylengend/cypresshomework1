Feature: login

    Scenario: login with the correct credential
        Given I am on the login page
        When I input the correct username and password
        And I click on the signin button
        Then I should login successfully

    Scenario Outline: login with the incorrect credential
        Given I am on the login page
        When I input the '<username>' and '<password>'
        And I click on the signin button
        Then I should get '<errorMessage>' message
        Examples:
            | username        | password     | errorMessage                          |
            | locked_out_user | secret_sauce | Sorry, this user has been locked out. |
            | standard_user   | 123456       | Username and password do not match    |
            | standard_user   |              | Password is required                  |