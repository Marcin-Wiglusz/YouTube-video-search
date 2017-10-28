import React from 'react';
import '../styles/search_bar.css';

export default class SearchBar extends React.Component {
  constructor() {
    super();

    this.state = {
      term: 'kadavar',
      active: true
    };
  }

  toggleClass() {
    let toggle = this.state.active;
    this.setState({active: !toggle})
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
      <div className = 'search-div'>
        <div className = 'logo'></div>
        <div className = 'forms-wrap'>
          <input
            className = {this.state.active ? 'hide': 'show'}
            value = {this.state.term}
            ref = 'searchTerm'
            onFocus = {() => this.refs.searchTerm.select()}
            onChange = {() => this.setState({term: this.refs.searchTerm.value})}
            onKeyPress = {this.handleKeyPress.bind(this)} />
          <button onClick =
            {() => {this.onClickSearch(); this.toggleClass()}}>
            <svg viewBox='0 0 24 24'>
              <path
                d="M15.5 14h-.79l-.28-.27C15.41 12.59 16 11.11 16 9.5 16 5.91 13.09 3 9.5 3S3 5.91 3 9.5 5.91 16 9.5 16c1.61 0 3.09-.59 4.23-1.57l.27.28v.79l5 4.99L20.49 19l-4.99-5zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5 14 7.01 14 9.5 11.99 14 9.5 14z">
              </path>
            </svg>
          </button>
        </div>
      </div>
    );
  }
}
