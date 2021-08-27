import React, { Component } from 'react';

class NumberOfEvents extends Component {
  state = {
    eventsLength: 32,
  };

  handleUpdateEventsLength = (event) => {
    const value = parseInt(event.target.value);
    this.setState({
      eventsLength: value,
    });
    this.props.updateNumberOfEvents(value);
  };

  render() {
    return (
      <div>
        <input
          className="setEventsLength"
          onChange={this.handleUpdateEventsLength}
          type="text"
          placeholder="setEventsLength"
        />
      </div>
    );
  }
}

export default NumberOfEvents;
