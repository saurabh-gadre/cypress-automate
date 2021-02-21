Feature: Conduit Application
    @smoke
    Scenario: User is able to login into the Application
        Given User launches Conduit Application
        When User enters
              | username              | password |
              | test@mail.com         | admin123 |
        And User clicks on Sign In button
        Then "Your Feed" should be displayed
