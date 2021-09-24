import axios from 'axios';
import './nprogress.css';
import NProgress from 'nprogress';

import { mockData } from './mock-data';

const getToken = async (code) => {
  const encodeCode = encodeURIComponent(code);
  const getTokenUrl =
    'https://309jzcntd7.execute-api.us-east-2.amazonaws.com/dev/api/token';
  const { access_token } = await fetch(getTokenUrl + '/' + encodeCode)
    .then((res) => {
      return res.json();
    })
    .catch((error) => {
      return error;
    });
  localStorage.setItem('access_token', access_token);
  return access_token;
};

export const getAccessToken = async () => {
  const accessToken = localStorage.getItem('access_token');
  const tokenCheck = localStorage.getItem('access_token');
  if (!accessToken || tokenCheck.error) {
    await localStorage.removeItem('access_token');
    const searchParams = new URLSearchParams(window.location.search);
    const code = await searchParams.get('code');
    if (!code) {
      const results = await axios.get(
        'https://309jzcntd7.execute-api.us-east-2.amazonaws.com/dev/api/get-auth-url'
      );
      const { authUrl } = results.data;
      return (window.location.href = authUrl);
    }
    return code && getToken(code);
  }
  return accessToken;
};

export const extractLocations = (events) => {
  var extractLocations = events.map((event) => event.location);
  var locations = [...new Set(extractLocations)];
  return locations;
};

//  currently unsure where I got this function

// const checkToken = async (accessToken) => {
//   const result = await fetch(
//     `https://www.googleapis.com/oauth2/v1/tokeninfo?access_token=${accessToken}`,
//     {
//       headers: {
//         'Access-Control-Allow-Origin': '*',
//       },
//     }
//   )
//     .then((res) => res.json())
//     .catch((error) => error.json());

//   return result;
// };

const removeQuery = () => {
  if (window.history.pushState && window.location.pathname) {
    var newurl =
      window.location.protocol +
      '//' +
      window.location.host +
      window.location.pathname;
    window.history.pushState('', '', newurl);
  } else {
    newurl = window.location.protocol + '//' + window.location.host;
    window.history.pushState('', '', newurl);
  }
};

export const getEvents = async () => {
  console.log('getEvents called');
  NProgress.start();

  /*  if (window.location.href.startsWith('http://localhost')) {
    NProgress.done();
    return mockData;
  } */

  if (!navigator.onLine) {
    let events;
    console.log('page appearing offline');
    const data = localStorage.getItem('lastEvents');
    NProgress.done();
    return data ? JSON.parse(events).events : [];
  }

  const token = await getAccessToken();

  if (token) {
    removeQuery();
    const url =
      'https://309jzcntd7.execute-api.us-east-2.amazonaws.com/dev/api/get-events' +
      '/' +
      token;
    console.log('url in getEvents: ', url);
    const result = await axios.get(url);
    console.log('results.data: ', result.data.events.data.items);
    if (result.data) {
      console.log('if results.data √');
      var locations = extractLocations(result.data.items);
      localStorage.setItem('lastEvents', JSON.stringify(result.data.items));
      localStorage.setItem('locations', JSON.stringify(locations));
    }
    NProgress.done();
    return result.data.events;
  }
};
