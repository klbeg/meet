import React from 'react';
import { shallow } from 'enzyme';

import Event from '../Event';
import EventDetails from '../EventDetails';

describe('<EventDetails /> component', () => {
  let event = {
    summary: 'Learn JavaScript',
    description:
      'Have you wondered how you can ask Google to show you the list of the top ten must-see places in London? And how Google presents you the list? How can you submit the details of an application? Well, JavaScript is doing these. :) \n\nJavascript offers interactivity to a dull, static website. Come, learn JavaScript with us and make those beautiful websites.',
    location: 'London, UK',
    start: {
      dateTime: '2020-05-19T16:00:00+02:00',
      timeZone: 'Europe/Berlin',
    },
  };
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
