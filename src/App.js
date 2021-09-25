import React, { Component } from 'react';

import './App.css';
import EventList from './EventList';
import CitySearch from './CitySearch';
import NumberOfEvents from './NumberOfEvents';
// import { mockData } from './mock-data';
import { extractLocations, getEvents } from './api';

class App extends Component {
  state = {
    events: [],
    locations: [],
    numOfEvents: 32,
  };

  componentDidMount() {
    this.mounted = true;
    getEvents().then((response) => {
      let events = response.data.items;
      console.log('events in componentDidMount: ', events);
      if (this.mounted) {
        this.setState({ events: events, locations: extractLocations(events) });
      }
    });

    // this.mounted = true;
    // this.setState({
    //   events: mockData,
    //   locations: extractLocations(mockData),
    // });
  }

  componentWillUnmount() {
    this.mounted = false;
  }

  updateNumberOfEvents = (value) => {
    this.setState({
      numOfEvents: value,
    });
  };

  updateEvents = (location) => {
    getEvents().then((events) => {
      const locationEvents =
        location === 'all'
          ? events
          : events.filter((event) => event.location === location);
      this.setState({
        events: locationEvents,
      });
    });
    // const locationEvents =
    //   location === 'all'
    //     ? mockData
    //     : mockData.filter((event) => event.location === location);
    // this.setState({
    //   events: locationEvents,
    // });
  };

  render() {
    return (
      <div className="App">
        <CitySearch
          locations={this.state.locations}
          updateEvents={this.updateEvents}
        />
        <NumberOfEvents updateNumberOfEvents={this.updateNumberOfEvents} />
        <EventList
          events={this.state.events}
          numOfEvents={this.state.numOfEvents}
        />
      </div>
    );
  }
}

export default App;
