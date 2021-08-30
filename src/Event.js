import React, { Component } from 'react';
import EventDetails from './EventDetails';

class Event extends Component {
  state = {
    showDetails: false,
  };
  handleShowDetails = (value) => {
    this.setState({
      showDetails: value,
    });
  };

  render() {
    return (
      <div className="event">
        <h3>{this.props.event.summary}</h3>
        <p>
          {this.props.event.start.dateTime}
          {` (${this.props.event.start.timeZone} Standard Time)`}
        </p>
        <p>{`${this.props.event.summary} | ${this.props.event.location}`}</p>
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
