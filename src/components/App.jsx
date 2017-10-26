import React from 'react';
import YouTubeSearch from 'youtube-api-search';
import SearchBar from './Search_Bar';
import VideoList from './Video_List';
import VideoPlayer from './Video_Player';

import '../styles/app.css';

//parent component should be responsible for fetching data
const ApiKey = 'AIzaSyDJS8d7gktqvFwX5XYRR-LMeaBaiNHPaiU';

export default class App extends React.Component {
  constructor() {
    super();

    this.state = {
      videos: [],
      selected: null
    }

    this.searchVideo('kadavar');
  }



  searchVideo(term) {
    YouTubeSearch({key: ApiKey, term: term, maxResults: 50}, (data) => {this.setState(
      {videos: data, selected: data[0]});
    })
  }

  render() {

    return (
      <div>
        <SearchBar onSearchVideo = {term => this.searchVideo(term)} />
        <VideoPlayer video = {this.state.selected} />
        <VideoList
          onVideoSelect = {selected => this.setState({selected})}
          videosArr = {this.state.videos} />
      </div>
    );
  }
}
