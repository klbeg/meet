import { loadFeature, defineFeature } from 'jest-cucumber';
import { mount, shallow } from 'enzyme';

import App from '../App';
import NumberOfEvents from '../NumberOfEvents';
import { mockData } from '../mock-data';

const feature = loadFeature('./src/features/changeNumberOfEvents.feature');
defineFeature(feature, (test) => {
  test('When a user hasnt specified a number of events 32 events should be shown', ({
    given,
    when,
    then,
  }) => {
    given('The app has been loaded', () => {});

    when('No number of events has been specified', () => {});

    then('Thirtytwo events shoul be shown by default', () => {});
  });

  test('User can change the number of events to display', ({
    given,
    when,
    then,
  }) => {
    given('The app has been loaded', () => {});

    when('The user sets Sixteen as the number of events to display', () => {});
    then('Sixteen events should be shown', () => {});
  });
});
