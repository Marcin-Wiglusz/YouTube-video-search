import React from 'react';
import YouTubeSearch from 'youtube-api-search';
import SearchBar from './Search_Bar';
import VideoList from './Video_List';
import VideoPlayer from './Video_Player';

//parent component should be responsible for fetching data
const ApiKey = 'AIzaSyDJS8d7gktqvFwX5XYRR-LMeaBaiNHPaiU';

export default class App extends React.Component {
  constructor() {
    super();

    this.state = {
      videos : []
    }

    YouTubeSearch({key: ApiKey, term: 'kadavar'}, (data) => {this.setState({videos: data});
    })
  }

  render() {
    // console.log(this.state.videos);
    return (
      <div>
        <SearchBar />
        <VideoPlayer video = {this.state.videos[3]}/>
        <VideoList videosArr = {this.state.videos}/>
      </div>
    );
  }
}
