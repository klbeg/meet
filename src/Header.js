import { Component } from 'react';

import CitySearch from './CitySearch';
import NumberOfEvents from './NumberOfEvents';

class Header extends Component {
  render() {
    return (
      <div className="Header">
        <h1>Social Dev</h1>
        <div className="list-modifier-container">
          <NumberOfEvents />
          <CitySearch />
        </div>
      </div>
    );
  }
}

export default Header;
