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
    AppWrapper.unmount();
  });

  test('App passes state.numOfEvents as a prop to EventList', () => {
    const AppWrapper = mount(<App />);
    const AppNumOfEventsState = AppWrapper.state('numOfEvents');
    expect(AppNumOfEventsState).not.toEqual(undefined);
    expect(AppWrapper.find(EventList).props().numOfEvents).toEqual(
      AppNumOfEventsState
    );
    AppWrapper.unmount();
  });

  test('putting 16 into NumberOfEvents will set App.props.numOfEvents to 16', async () => {
    const AppWrapper = mount(<App />);
    const SetEventsLength =
      AppWrapper.find(NumberOfEvents).find('.setEventsLength');
    const numOfEventsChange = { target: { value: 16 } };
    SetEventsLength.simulate('change', numOfEventsChange);
    expect(AppWrapper.state('numOfEvents')).toEqual(16);
    AppWrapper.unmount();
  });

  test('inputting 16 into NumberOfEvents will set EventList.props.numOfEvents to 16', async () => {
    const AppWrapper = mount(<App />);
    const SetEventsLength =
      AppWrapper.find(NumberOfEvents).find('.setEventsLength');
    const numOfEventsChange = { target: { value: 16 } };
    SetEventsLength.simulate('change', numOfEventsChange);
    expect(AppWrapper.find(EventList).props().numOfEvents).toEqual(16);
    AppWrapper.unmount();
  });

  test('if no number of events is specified 32 events should be shown', async () => {
    const AppWrapper = mount(<App />);
    const EventsListWrapper = AppWrapper.find(EventList);
    const EventWrapper = EventsListWrapper.find(Event);
    expect(EventWrapper).toHaveLength(32);
    AppWrapper.unmount();
  });

  test('inputting 16 into NumberOfEvents, EventList should show 16 events', async () => {
    const AppWrapper = mount(<App />);
    const SetEventsLength =
      AppWrapper.find(NumberOfEvents).find('.setEventsLength');
    const numOfEventsChange = { target: { value: 16 } };
    SetEventsLength.simulate('change', numOfEventsChange);
    expect(AppWrapper.find(EventList).find('ul li')).toHaveLength(16);
    AppWrapper.unmount();
  });
});
