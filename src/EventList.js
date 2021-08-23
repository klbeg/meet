import React, { Component } from 'react';

import Event from './Event';
import { mockData } from './mock-data';

class EventList extends Component {
  state = {
    eventsLength: [],
  };
  render() {
    const { events, numOfEvents } = this.props;
    return (
      <ul className="EventList">
        {/* {this.props.events.map((event) => ( */}
        {mockData.slice(0, 32).map((event) => (
          <li key={event.id}>
            <Event event={event} />
          </li>
        ))}
      </ul>
    );
  }
}

export default EventList;
