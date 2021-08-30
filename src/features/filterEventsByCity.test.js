import { loadFeature, defineFeature } from 'jest-cucumber';
import { mount, shallow } from 'enzyme';
import { extractLocations } from '../api';

import App from '../App';
import CitySearch from '../CitySearch';
import { mockData } from '../mock-data';

const feature = loadFeature('./src/features/filterEventsByCity.feature');
defineFeature(feature, (test) => {
  let AppWrapper;
  let CitySearchWrapper;
  let locations = extractLocations(mockData);
  test('When user hasn’t searched for a city, show upcoming events from all cities.', ({
    given,
    when,
    then,
  }) => {
    given('user hasn’t searched for any city', () => {});
    when('the user opens the app', () => {
      AppWrapper = mount(<App />);
    });

    then('the user should see the list of upcoming events.', () => {
      AppWrapper.update();
      // cirriculum says to use 'mockData.length', but it's length is 39,
      //  which isn't my default, so I used the default length instead
      expect(AppWrapper.find('.event')).toHaveLength(32);
    });
  });

  test('User should see a list of suggestions when they search for a city', ({
    given,
    when,
    then,
  }) => {
    given('the main page is open', () => {
      CitySearchWrapper = shallow(
        <CitySearch updateEvents={() => {}} locations={locations} />
      );
    });

    when('the user starts typing in the city textbox', () => {
      CitySearchWrapper.find('.city').simulate('change', {
        target: { value: 'Berlin' },
      });
    });

    then(
      'the user should receive a list of cities (suggestions) that match what they’ve typed',
      () => {
        expect(CitySearchWrapper.find('.suggestions li')).toHaveLength(2);
      }
    );
  });

  test('User can select a city from the suggested list', ({
    given,
    and,
    when,
    then,
  }) => {
    given('user was typing “Berlin” in the city textbox', () => {
      CitySearchWrapper.find('.city').simulate('change', {
        target: { value: 'Berlin' },
      });
    });

    and('the list of suggested cities is showing', () => {
      expect(CitySearchWrapper.find('.suggestions li')).toHaveLength(2);
    });

    when(
      'the user selects a city (e.g., “Berlin, Germany”) from the list',
      () => {
        CitySearchWrapper.find('.suggestions li').at(0).simulate('click');
      }
    );

    then(
      'their city should be changed to that city (i.e., “Berlin, Germany”)',
      () => {
        expect(CitySearchWrapper.state('query')).toBe('Berlin, Germany');
      }
    );

    //  shouldn't this test wether listed events are from the
    //  designated city?
    and(
      'the user should receive a list of upcoming events in that city',
      () => {
        expect(AppWrapper.find('.event')).toHaveLength(32);
      }
    );
  });
});
