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
      this.onInputSearch(this.refs.searchTerm.value)
    }
  }

  onClickSearch(evt){
    this.onInputSearch(this.refs.searchTerm.value)
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
          ref = 'searchTerm'
          onChange = {() => this.setState({term: this.refs.searchTerm.value})}
          onKeyPress = {this.handleKeyPress.bind(this)} />
        <button onClick = {this.onClickSearch.bind(this)}>Search</button>
      </div>
    );
  }
}
// {evt => this.onInputSearch(evt.target.value)}
