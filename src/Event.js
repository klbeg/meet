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
    const eventObject = this.props.event;
    return (
      <div className="event">
        <h3>{eventObject.summary}</h3>
        <p>
          {eventObject.start.dateTime}
          {` (${eventObject.start.timeZone} Standard Time)`}
        </p>
        <p>{`@${eventObject.summary} | ${eventObject.location}`}</p>
        {this.state.showDetails ? <EventDetails /> : <div />}
        {this.state.showDetails ? (
          <div />
        ) : (
          <button
            className="show-details"
            onClick={() => this.handleShowDetails(true)}
          >
            Show Details
          </button>
        )}
        {this.state.showDetails ? (
          <button
            className="hide-details"
            onClick={() => this.handleShowDetails(false)}
          >
            Hide Details
          </button>
        ) : (
          <div />
        )}
      </div>
    );
  }
}

export default Event;
