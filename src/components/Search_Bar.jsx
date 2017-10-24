import React from 'react';

export default class SearchBar extends React.Component {
  constructor() {
    super();

    this.state = {
      term: ''
    };
  }

  handleKeyPress(evt) {
    if (evt.key == 'Enter') {
      this.onInputSearch(evt.target.value)
    }
  }

  onClickSearch(evt){
    this.onInputSearch(evt.target.value)
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
          onChange = {evt => this.setState({term: evt.target.value})}
          onKeyPress = {this.handleKeyPress.bind(this)} />
        <button onClick = {() => this.onClickSearch()}>Search</button>
      </div>
    );
  }
}
// {evt => this.onInputSearch(evt.target.value)}
