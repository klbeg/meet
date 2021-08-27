import React, { Component } from 'react';

class CitySearch extends Component {
  state = {
    query: '',
    suggestions: [],
    showSuggestions: undefined,
  };

  handleItemClicked = (suggestion) => {
    this.setState({
      query: suggestion,
      showSuggestions: false,
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
          placeholder="CitySearch"
          value={this.state.query}
          onChange={this.handleInputChange}
          onFocus={() => {
            this.setState({ showSuggestions: true });
          }}
          type="text"
        />
        <ul
          className="suggestions"
          style={this.state.showSuggestions ? {} : { display: 'none' }}
        >
          {this.state.suggestions.map((suggestion) => (
            <li
              onClick={() => this.handleItemClicked(suggestion)}
              key={suggestion}
            >
              {suggestion}
            </li>
          ))}
          <li key="all" onClick={() => this.handleItemClicked('all')}>
            <b>See all cities</b>
          </li>
        </ul>
      </div>
    );
  }
}

export default CitySearch;
