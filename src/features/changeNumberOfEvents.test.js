import { loadFeature, defineFeature } from 'jest-cucumber';
import { mount, shallow } from 'enzyme';

import App from '../App';
import NumberOfEvents from '../NumberOfEvents';
import EventList from '../EventList';
import Event from '../Event';
import { mockData } from '../mock-data';

const feature = loadFeature('./src/features/changeNumberOfEvents.feature');
defineFeature(feature, (test) => {
  let AppWrapper;
  let NumberOfEventsWrapper;
  let EventsListWrapper;
  test('When a user hasnt specified a number of events 32 events should be shown', ({
    given,
    when,
    then,
  }) => {
    given('The app has been loaded', () => {
      AppWrapper = mount(<App />);
    });

    when('No number of events has been specified', () => {
      //  Is there a test I should put here?
    });

    then('Thirtytwo events shoul be shown by default', () => {
      expect(AppWrapper.find(EventList).find(Event)).toHaveLength(32);
    });
  });

  test('User can change the number of events to display', ({
    given,
    when,
    then,
  }) => {
    given('The app has been loaded', () => {
      AppWrapper = mount(<App />);
    });

    when('The user sets Sixteen as the number of events to display', () => {
      let inputNumberOfEvents =
        AppWrapper.find(NumberOfEvents).find('.setEventsLength');
      inputNumberOfEvents.simulate('change', { target: { value: 16 } });
    });
    then('Sixteen events should be shown', () => {
      expect(AppWrapper.find(EventList).find(Event)).toHaveLength(16);
    });
  });
});
