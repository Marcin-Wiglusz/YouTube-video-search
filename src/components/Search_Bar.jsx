import React from 'react';

export default class SearchBar extends React.Component {
  constructor() {
    super();

    this.state = {
      term: ''
    };
  }

  onInputSearch(term) {
    this.setState({term});
    this.props.onSearchVideo(term)
  }

  render() {
    return(
      <div>
        <input
          value = {this.state.term}
          onChange = {evt => this.onInputSearch(evt.target.value)} />
      </div>
    );
  }
}
