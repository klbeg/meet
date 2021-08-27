import React, { Component } from 'react';

import Event from './Event';
import { mockData } from './mock-data';

class EventList extends Component {
  state = {
    eventsLength: 32,
  };

  render() {
    const { events, numOfEvents } = this.props;
    return (
      <ul className="EventList">
        {/* {this.props.events.map((event) => ( */}
        {mockData
          .slice(
            0,
            this.props.numOfEvents
              ? this.props.numOfEvents
              : this.state.eventsLength
          )
          .map((event, i) => (
            <li key={event.id}>
              <span>{i}</span>
              <Event event={event} />
            </li>
          ))}
      </ul>
    );
  }
}

export default EventList;
