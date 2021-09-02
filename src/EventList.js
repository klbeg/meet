import React, { Component } from 'react';

import Event from './Event';

class EventList extends Component {
  state = {
    eventsLength: 32,
  };

  render() {
    return (
      <ul className="event-list">
        {this.props.events
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
