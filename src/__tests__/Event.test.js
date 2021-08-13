import React from 'react';
import { shallow } from 'enzyme';

import Event from '../Event';
import EventDetails from '../EventDetails';

describe('<EventDetails /> component', () => {
  let EventWrapper;
  beforeAll(() => {
    EventWrapper = shallow(<Event />);
    EventWrapper.setState({
      showDetails: false,
    });
  });

  test('Event details should be collapsed by default', () => {
    expect(EventWrapper.find(EventDetails)).toHaveLength(0);
  });

  test('can click show details to expand EventDetails', () => {
    EventWrapper.find('.event button').simulate('click');
    expect(EventWrapper.find(EventDetails)).toHaveLength(1);
  });
});
