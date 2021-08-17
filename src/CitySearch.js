import React, { Component } from 'react';

class CitySearch extends Component {
  state = {
    query: '',
    suggestions: [],
  };

  handleItemClicked = (suggestion) => {
    this.setState({
      query: suggestion,
      suggestions: [],
    });

    this.props.updateEvents(suggestion);
  };

  handleInputChange = (event) => {
    const value = event.target.value;

    //  Ask John why indexOf.(value.toUpperCase()) > -1;
    //  I don't know what this does, or why
    const suggestions = this.props.locations.filter((location) => {
      return location.toUpperCase().indexOf(value.toUpperCase()) > -1;
    });
    this.setState({
      query: value,
      suggestions,
    });
  };

  render() {
    return (
      <div className="CitySearch">
        <input
          className="city"
          placeholder="Search for a city"
          value={this.state.query}
          onChange={this.handleInputChange}
          type="text"
        />
        <ul className="suggestions">
          {this.state.suggestions.map((suggestion) => (
            <li
              onClick={() => this.handleItemClicked(suggestion)}
              key={suggestion}
            >
              {suggestion}
            </li>
          ))}
          {this.state.suggestions.length === 1 ? (
            <li key="all" onClick={() => this.handleItemClicked('all')}>
              <b>See all cities</b>
            </li>
          ) : (
            <div />
          )}
        </ul>
      </div>
    );
  }
}

export default CitySearch;
