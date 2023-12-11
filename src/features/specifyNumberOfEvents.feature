Feature: Specify Number of Events
    Scenario: When the user hasnt specified a number, 32 events are shown by default
        Given the user hasnt specified the number of events
        When the user sees the list of events
        Then the number of events displayed will be 32
    Scenario: The user can change the number of events displayed
        Given the user is viewing events
        When the user wants to change the displayed number of events
        Then the number of events displayed will reflect the number chosen by the user