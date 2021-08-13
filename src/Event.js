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

  //  added this back.  If I call this.handleShowDetails(variable),
  //  the function doesn't actually work right.  it won't set the state properly.
  //  I'm guessing I need to use a different syntax in the onClick handler
  //  for things to work correctly.  Going to look into it
  handleHideDetails = () => {
    this.setState({
      showDetails: false,
    });
  };

  /*
    Here's the function I would like to have controll show/hide details

    toggleShowDetails = () => {
      this.setState({
        showDetails: !this.showDetails 
        //  essentially, set showDetails to whatever it is not
        //  if it's truthy, make it falsy and visa versa
      })
    }

  */

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
