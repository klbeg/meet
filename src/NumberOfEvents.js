import React, { Component } from 'react';
import { ErrorAlert } from './Alert';

class NumberOfEvents extends Component {
  state = {
    eventsLength: 32,
    infoText: '',
  };

  handleUpdateEventsLength = (event) => {
    const value = parseInt(event.target.value);
    this.setState({
      eventsLength: value,
    });
    this.props.updateNumberOfEvents(value);
    value > 32 || value === 0
      ? this.setState({ infoText: 'Select a number from 1 - 32' })
      : this.setState({ infoText: '' });
  };

  render() {
    return (
      <div className="NumberOfEvents">
        <label className="input-label" for="set-events-length">
          Set list length
        </label>
        <input
          id="set-events-length"
          onChange={this.handleUpdateEventsLength}
          type="text"
        />
        <ErrorAlert text={this.state.infoText} />
      </div>
    );
  }
}

export default NumberOfEvents;
