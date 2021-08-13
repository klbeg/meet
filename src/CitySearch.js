import React, { Component } from 'react';

class CitySearch extends Component {
  state = {
    query: '',
    suggestions: [],
  };

  handleInputChange = (event) => {
    const value = event.target.value;
    this.setState({
      query: value,
      suggestions: [],
    });
  };

  render() {
    return (
      <div className="CitySearch">
        <input
          className="city"
          value={this.state.query}
          onChange={this.handleInputChange}
          type="text"
        />
        <ul className="suggestions">
          {this.state.suggestions.map((suggestion) => (
            <li key={suggestion}>{suggestion}</li>
          ))}
          <li key="all">
            <b>See all cities</b>
          </li>
        </ul>
      </div>
    );
  }
}

export default CitySearch;
