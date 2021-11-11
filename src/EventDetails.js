import React, { Component } from 'react';

class EventDetails extends Component {
  render() {
    return <div class="event-details">{this.props.event.description}</div>;
  }
}

export default EventDetails;
