import React, { Component } from 'react';
import EventDetails from './EventDetails';

class Event extends Component {
  state = {
    showDetails: undefined,
  };
  handleShowDetails = () => {
    this.setState({
      showDetails: true,
    });
  };

  handleHideDetails = () => {
    this.setState({
      showDetails: false,
    });
  };

  render() {
    return (
      <div className="event">
        {this.state.showDetails ? <EventDetails /> : <div />}
        <button className="show-details" onClick={this.handleShowDetails}>
          Show Details
        </button>
        <button className="hide-details" onClick={this.handleHideDetails}>
          Hide Details
        </button>
      </div>
    );
  }
}

export default Event;
