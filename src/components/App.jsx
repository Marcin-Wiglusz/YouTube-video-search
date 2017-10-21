import React from 'react';
import YouTubeSearch from 'youtube-api-search';
import SearchBar from './Search_Bar';
import VideoList from './Video_List';
import VideoPlayer from './Video_Player';

//parent component should be responsible for fetching data
const ApiKey = 'AIzaSyDJS8d7gktqvFwX5XYRR-LMeaBaiNHPaiU';

export default class App extends React.Component {
  constructor(props) {
    super(props);
    // console.log(this.props);
    this.state = {
      videos: [],
      selected: null
    }



    YouTubeSearch({key: ApiKey, term: 'kadavar'}, (data) => {this.setState(
      {videos: data, selected: data[0]});
    })
  }

  onVideoSelect() {
    this.setState(selected: selected)
  }

  render() {
    // console.log(this.state.videos);
    return (
      <div>
        <SearchBar />
        <VideoPlayer
          video = {this.state.selected} />
        <VideoList
          onVideoSelect = {this.onVideoSelect.bind(this)}
          videosArr = {this.state.videos} />
      </div>
    );
  }
}
