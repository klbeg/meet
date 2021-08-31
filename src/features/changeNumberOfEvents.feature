Feature: Specify number of events

Scenario: When a user hasnt specified a number of events 32 events should be shown
Given The app has been loaded
When No number of events has been specified
Then Thirtytwo events shoul be shown by default

Scenario: User can change the number of events to display
Given The app has been loaded
When The user sets Sixteen as the number of events to display
Then Sixteen events should be shown