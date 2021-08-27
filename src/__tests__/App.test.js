import React from 'react';
import { shallow, mount } from 'enzyme';

import App from '../App';
import EventList from '../EventList';
import Event from '../Event';
import CitySearch from '../CitySearch';
import NumberOfEvents from '../NumberOfEvents';

import { mockData } from '../mock-data';
import { extractLocations, getEvents } from '../api';

describe('<App /> component', () => {
  let AppWrapper;
  beforeAll(() => {
    AppWrapper = shallow(<App />);
  });
  test('render list of events', () => {
    expect(AppWrapper.find(EventList)).toHaveLength(1);
  });

  test('render CitySearch', () => {
    expect(AppWrapper.find(CitySearch)).toHaveLength(1);
  });
});

//  start integrated testing
describe('<App /> integration', () => {
  test('App passes "events" state as a prop to EventList', () => {
    const AppWrapper = mount(<App />);
    const AppEventsState = AppWrapper.state('events');

    expect(AppEventsState).not.toEqual(undefined);
    expect(AppWrapper.find(EventList).props().events).toEqual(AppEventsState);
    AppWrapper.unmount();
  });

  test('App passes "locations" state as a prop to CitySearch', () => {
    const AppWrapper = mount(<App />);
    const AppLocationsState = AppWrapper.state('locations');

    expect(AppLocationsState).not.toEqual(undefined);
    expect(AppWrapper.find(CitySearch).props().locations).toEqual(
      AppLocationsState
    );
    AppWrapper.unmount();
  });

  test('get list of events matching the city selected by the user', async () => {
    const AppWrapper = mount(<App />);
    const CitySearchWrapper = AppWrapper.find(CitySearch);
    const locations = extractLocations(mockData);
    CitySearchWrapper.setState({ suggestions: locations });
    const suggestions = CitySearchWrapper.state('suggestions');
    const selectedIndex = Math.floor(Math.random() * suggestions.length - 1);
    const selectedCity = suggestions[selectedIndex];
    await CitySearchWrapper.instance().handleItemClicked(selectedCity);
    const allEvents = await getEvents();
    const eventsToShow = allEvents.filter(
      (event) => event.location === selectedCity
    );
    expect(AppWrapper.state('events')).toEqual(eventsToShow);
    AppWrapper.unmount();
  });

  test('get list of all events when user "See all cities"', async () => {
    const AppWrapper = mount(<App />);
    const suggestionItems = AppWrapper.find(CitySearch).find('.suggestions li');
    await suggestionItems.at(suggestionItems.length - 1).simulate('click');
    const allEvents = await getEvents();
    expect(AppWrapper.state('events')).toEqual(allEvents);
    AppWrapper.unmount();
  });

  test('list of events loaded by default on page load', async () => {
    const AppWrapper = mount(<App />);
    const EventsListWrapper = AppWrapper.find(EventList);
    const EventWrapper = EventsListWrapper.find(Event);
    expect(EventWrapper.length).toBeGreaterThan(1);
  });

  test('if no number of events is specified 32 events should be shown', async () => {
    const AppWrapper = mount(<App />);
    const EventsListWrapper = AppWrapper.find(EventList);
    const EventWrapper = EventsListWrapper.find(Event);
    expect(EventWrapper).toHaveLength(32);
  });

  test('if state.numOfEvents = 16, 16 events should be shown', async () => {
    const AppWrapper = mount(<App />);
    const EventsListWrapper = AppWrapper.find(EventList);
    EventsListWrapper.setState({ eventsLength: 16 });
    const EventWrapper = EventsListWrapper.find(Event);
    expect(EventsListWrapper.state('eventsLength')).toBe(16);
    expect(EventWrapper).toHaveLength(16);
  });
});
