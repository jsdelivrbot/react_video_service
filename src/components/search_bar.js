import React, { Component } from 'react';

class SearchBar extends Component {
  constructor(properties) {
    super(properties);

    this.state = {term: ''}
  }

  render() {
    return (
      <div>
        <input
          value={this.state.term}
          onChange={this.handleInputChange.bind(this)}
        />
      </div>
    );
  }

  handleInputChange(e) {
    this.setState({term: e.target.value})
  }
}

export default SearchBar;
