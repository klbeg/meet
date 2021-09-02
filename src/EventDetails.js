import React, { Component } from 'react';

class EventDetails extends Component {
  render() {
    return <div>{this.props.event.description}</div>;
  }
}

export default EventDetails;
