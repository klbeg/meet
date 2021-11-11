import React, { Component } from 'react';

import Event from './Event';
import { InfoAlert } from './Alert';

class EventList extends Component {
  state = {
    eventsLength: 32,
  };

  render() {
    return (
      <div className="event-list-container">
        <InfoAlert
          text={!navigator.onLine ? 'This page is appearing offline.' : ''}
        />
        <div className="event-list">
          {this.props.events
            .slice(
              0,
              this.props.numOfEvents
                ? this.props.numOfEvents
                : this.state.eventsLength
            )
            .map((event) => (
              <div class="event-container" key={event.id}>
                <Event event={event} />
              </div>
            ))}
        </div>
      </div>
    );
  }
}

export default EventList;
