import React from 'react';

export default class SearchBar extends React.Component {
  constructor() {
    super();

    this.state = {
      term: ''
    };
  }

  render() {
    return(
      <div>
        <input
          value = {this.state.term}
          onChange = {evt => this.setState({term: evt.target.value})} />
      </div>
    );
  }
}
