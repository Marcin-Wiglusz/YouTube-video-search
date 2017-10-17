import React from 'react';
import YouTubeSearch from 'youtube-api-search';
import SearchBar from './Search_Bar';

const ApiKey = 'AIzaSyDJS8d7gktqvFwX5XYRR-LMeaBaiNHPaiU';

export default class App extends React.Component {

  render() {
    return (
      <div>
        <SearchBar />
      </div>
    );
  }
}
