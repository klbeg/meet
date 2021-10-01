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
      <div className={this.state.showDetails ? 'event' : 'event short'}>
        <h3>{this.props.event.summary}</h3>
        <p>
          {this.props.event.start.dateTime.slice(0, 10)}
          {` (${this.props.event.start.timeZone} Standard Time)`}
        </p>
        <p>{`${this.props.event.summary} | ${this.props.event.location}`}</p>
        {this.state.showDetails ? (
          <EventDetails event={this.props.event} />
        ) : (
          <div />
        )}
        <button
          className="show-details"
          onClick={
            !this.state.showDetails
              ? () => this.handleShowDetails(true)
              : () => this.handleShowDetails(false)
          }
        >
          Show Details
        </button>
      </div>
    );
  }
}

export default Event;
