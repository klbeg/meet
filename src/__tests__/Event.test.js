import React from 'react';
import { shallow } from 'enzyme';

import Event from '../Event';
import EventDetails from '../EventDetails';

describe('<EventDetails /> component', () => {
  let EventWrapper;
  beforeAll(() => {
    EventWrapper = shallow(<Event />);
  });

  test('Event details should be collapsed by default', () => {
    EventWrapper.setState({
      showDetails: false,
    });
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