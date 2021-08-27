import React from 'react';
import { shallow } from 'enzyme';

import NumberOfEvents from '../NumberOfEvents';

describe('<NumberOfEvents /> componenet', () => {
  let NumberOfEventsWrapper;
  beforeAll(() => {
    NumberOfEventsWrapper = shallow(
      <NumberOfEvents updateNumberOfEvents={jest.fn()} />
    );
  });
  test('is NumberOfEvents rendering', () => {
    expect(NumberOfEventsWrapper.find('div')).toHaveLength(1);
  });

  test('renders a text box', () => {
    expect(NumberOfEventsWrapper.find('input')).toHaveLength(1);
  });

  test('default state of eventsLength should be 32', () => {
    expect(NumberOfEventsWrapper.state('eventsLength')).toBe(32);
  });

  test('entering a number in NumberOfEvents text box should set state to value entered', () => {
    let eventObject = { target: { value: '16' } };
    NumberOfEventsWrapper.find('.setEventsLength').simulate(
      'change',
      eventObject
    );
    expect(NumberOfEventsWrapper.state('eventsLength')).toBe(16);
  });
});
