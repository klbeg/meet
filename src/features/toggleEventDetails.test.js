import { loadFeature, defineFeature } from 'jest-cucumber';
import { mount } from 'enzyme';

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
    given('The event details are collapsed', () => {
      AppWrapper = mount(<App />);
      expect(
        AppWrapper.find(EventList).find(Event).find(EventDetails)
      ).toHaveLength(0);
    });

    when('The user clicks the show-details button', () => {
      AppWrapper.setState({ numOfEvents: 1 });
      EventWrapper = AppWrapper.find(EventList).find(Event);
      EventWrapper.find('.show-details').simulate('click');
    });

    then('Event details should be expanded for that event', () => {
      expect(
        AppWrapper.find(EventList).find(Event).find(EventDetails)
      ).toHaveLength(1);
    });
  });
  test('User can collapse the event details', ({ given, when, then }) => {
    given('Event details are expanded', () => {
      AppWrapper.setState({ numOfEvents: 1 });
      EventWrapper = AppWrapper.find(EventList).find(Event);
      EventWrapper.setState({ showDetails: true });
      expect(
        AppWrapper.find(EventList).find(Event).find(EventDetails)
      ).toHaveLength(1);
    });

    when('The user clicks the hide-details button', () => {
      AppWrapper.setState({ numOfEvents: 1 });
      EventWrapper = AppWrapper.find(EventList).find(Event);
      EventWrapper.find('.hide-details').simulate('click');
    });

    then('The event details should be collapsed', () => {
      expect(
        AppWrapper.find(EventList).find(Event).find(EventDetails)
      ).toHaveLength(0);
    });
  });
});
