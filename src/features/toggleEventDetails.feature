Feature: Toggle show/hide event details

Scenario: By default, event details should be collapsed
Given The page is loaded
When The user hasn't expanded event details
Then Event details should be collapsed by default

Scenario: User can expant event details
Given The event details are collapsed
When The user clicks the show-details button
Then Event details should be expanded for that event

Scenario: User can collapse the event details 
Given Event details are expanded
When The user clicks the hide-details button
Then The event details should be collapsed

