Feature: Show and Hide Event Details
    Scenario: An event element is collapsed by default
        Given the user opens the app
        When the user views the list of events
        Then all events will be collapsed by default.
    Scenario: User can expand an event to see details
        Given the user sees a list of events
        When a user selects to view the events details
        Then the details will show for the chosen event.
    Scenario: User can collapse an event to hide details
        Given the user views the event details
        When the user clicks a button to hide the event details
        Then the details of that event will be hidden.