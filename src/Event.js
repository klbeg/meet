import React, { Component } from 'react';
import EventDetails from './EventDetails';

class Event extends Component {
  state = {
    showDetails: true,
  };
  handleShowDetails = () => {
    this.setState({
      showDetails: true,
    });
  };

  render() {
    return (
      <div className="event">
        {this.state.showDetails ? <EventDetails /> : <div />}
        <button onClick={this.handleShowDetails}>Show Details</button>
      </div>
    );
  }
}

export default Event;
