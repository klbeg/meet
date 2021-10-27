import React, { Component } from 'react';
import {
  ScatterChart,
  Scatter,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from 'recharts';

import './App.scss';
import EventGenre from './EventGenre';
import EventList from './EventList';
import CitySearch from './CitySearch';
import NumberOfEvents from './NumberOfEvents';
import WelcomeScreen from './WelcomeScreen';
import { getEvents, extractLocations, checkToken, getAccessToken } from './api';

import { mockData } from './mock-data';

class App extends Component {
  state = {
    events: [],
    locations: [],
    numOfEvents: 32,
    showWelcomeScreen: false,
  };

  async componentDidMount() {
    this.mounted = true;
    const accessToken = localStorage.getItem('access_token');
    const isTokenValid = (await checkToken(accessToken)).error ? false : true;
    const searchParams = new URLSearchParams(window.location.search);
    const code = searchParams.get('code');

    if (this.mounted) {
      this.setState({
        events: mockData,
        locations: extractLocations(mockData),
      });
    }

    // this.setState({ showWelcomeScreen: !(code || isTokenValid) });

    // if ((code || isTokenValid) && this.mounted) {
    //   getEvents().then((events) => {
    //     if (this.mounted) {
    //       this.setState({
    //         events: events,
    //         locations: extractLocations(events),
    //       });
    //     }
    //   });
    // }
  }

  componentWillUnmount() {
    this.mounted = false;
  }

  getScatterData = () => {
    const { locations, events } = this.state;
    const data = locations.map((location) => {
      const number = events.filter(
        (event) => event.location === location
      ).length;
      const city = location.split(', ').shift();

      return { city, number };
    });
    return data;
  };

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
  };

  render() {
    const { locations, numberOfEvents, events } = this.state;
    if (this.state.showWelcomeScreen === undefined)
      return <div className="App" />;
    return (
      <div className="App">
        <div className="list-modifier-container">
          <CitySearch
            locations={this.state.locations}
            updateEvents={this.updateEvents}
          />
          <NumberOfEvents updateNumberOfEvents={this.updateNumberOfEvents} />
        </div>
        <div className="data-vis-wrapper">
          <ResponsiveContainer height={300} width={400}>
            <ScatterChart
              width={50}
              height={20}
              margin={{
                top: 20,
                right: 20,
                bottom: 20,
                left: 20,
              }}
            >
              <CartesianGrid />
              <XAxis
                type="category"
                dataKey="city"
                name="city"
                angle="45"
                label={{
                  value: 'City',
                  position: 'bottom',
                  dy: 20,
                }}
              />
              <YAxis
                type="number"
                dataKey="number"
                name="number of events"
                allowDecimals={false}
                label={{
                  value: 'Number of events',
                  angle: -90,
                  position: 'insideCenter',
                  dx: -10,
                }}
              />
              <Tooltip cursor={{ strokeDasharray: '3 3' }} />
              <Scatter data={this.getScatterData()} fill="#8884d8" />
            </ScatterChart>
          </ResponsiveContainer>
          <EventGenre events={events} />
        </div>
        <EventList
          events={this.state.events}
          numOfEvents={this.state.numOfEvents}
        />
        <WelcomeScreen
          showWelcomeScreen={this.state.showWelcomeScreen}
          getAccessToken={() => {
            getAccessToken();
          }}
        />
      </div>
    );
  }
}

export default App;
