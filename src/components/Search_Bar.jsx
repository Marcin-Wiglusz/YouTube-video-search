import React from 'react';
import '../styles/search_bar.css';

export default class SearchBar extends React.Component {
  constructor() {
    super();

    this.state = {
      term: ''
    };
  }

  handleKeyPress(evt) {
    if (evt.key === 'Enter') {
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
      <div className='search-bar'>
        <div className='input-wrap'>
          <input
            value = {this.state.term}
            ref = 'searchTerm'
            onChange = {() => this.setState({term: this.refs.searchTerm.value})}
            onKeyPress = {this.handleKeyPress.bind(this)} />
          <button onClick = {this.onClickSearch.bind(this)}>Search
          </button>
        </div>
      </div>
    );
  }
}
