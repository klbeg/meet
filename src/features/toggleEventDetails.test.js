import { loadFeature, defineFeature } from 'jest-cucumber';
import { mount, shallow } from 'enzyme';
import { extractLocations } from '../api';

import App from '../App';
import Event from '../Event';
import EventDetails from '../EventDetails';
import { mockData } from '../mock-data';
import EventList from '../EventList';

const feature = loadFeature('./src/features/toggleEventDetails.feature');
defineFeature(feature, (test) => {
  let AppWrapper;
  let EventWrapper;

  let event = mockData[0];

  test('By default, event details should be collapsed', ({
    given,
    when,
    then,
  }) => {
    given('The page is loaded', () => {
      AppWrapper = mount(<App />);
    });

    when("The user hasn't expanded event details", () => {
      //  What to test here that isn't the same as "then" step?
      //  Possibly check that Event.state.showDetails === false?
    });

    then('Event details should be collapsed by default', () => {
      expect(
        AppWrapper.find(EventList).find(Event).find(EventDetails)
      ).toHaveLength(0);
    });
  });
  test('User can expant event details', ({ given, when, then }) => {
    given('The event details are collapsed', () => {});

    when('The user clicks the show-details button', () => {});

    then('Event details should be expanded for that event', () => {});
  });
  test('User can collapse the event details', ({ given, when, then }) => {
    given('Event details are expanded', () => {});

    when('The user clicks the hide-details button', () => {});

    then('The event details should be collapsed', () => {});
  });
});
