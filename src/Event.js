import React, { Component } from 'react';
import EventDetails from './EventDetails';

class Event extends Component {
  state = {
    showDetails: undefined,
  };
  handleShowDetails = (value) => {
    this.setState({
      showDetails: value,
    });
  };

  render() {
    return (
      <div className="event">
        {this.state.showDetails ? <EventDetails /> : <div />}
        <button
          className="show-details"
          onClick={() => this.handleShowDetails(true)}
        >
          Show Details
        </button>
        <button
          className="hide-details"
          onClick={() => this.handleShowDetails(false)}
        >
          Hide Details
        </button>
      </div>
    );
  }
}

export default Event;
