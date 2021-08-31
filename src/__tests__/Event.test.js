import React from 'react';
import { shallow } from 'enzyme';

import Event from '../Event';
import EventDetails from '../EventDetails';
import { mockData } from '../mock-data';

describe('<EventDetails /> component', () => {
  let event = mockData[0];
  let EventWrapper;
  beforeAll(() => {
    EventWrapper = shallow(<Event event={event} />);
  });

  test('Event details should be collapsed by default', () => {
    expect(EventWrapper.find(EventDetails)).toHaveLength(0);
  });

  test('can click show details to expand EventDetails', () => {
    EventWrapper.setState({ showDetails: false });
    EventWrapper.find('.show-details').simulate('click');
    expect(EventWrapper.find(EventDetails)).toHaveLength(1);
  });

  test('while details are expanded, clicking showDetails button will collapse details', () => {
    EventWrapper.setState({ showDetails: true });
    EventWrapper.find('.hide-details').simulate('click');
    expect(EventWrapper.find(EventDetails)).toHaveLength(0);
  });
});
