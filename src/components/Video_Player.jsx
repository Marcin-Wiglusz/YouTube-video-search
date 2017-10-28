import React from 'react';
import '../styles/video_player.css';

export default class VideoPlayer extends React.Component{
  constructor() {
    super();

    this.state = {
      active: true
    };
  }

  toggleClass() {
    let toggle = this.state.active;
    this.setState({active: !toggle})
  }

  render() {
    let video = this.props.video;
    // App is rendering before YT fills videos array and video is undefined.
    if (!video) {
      //if there is no video yet, return below div
      return <div>Wait for it...</div>
    }
    let id = video.id.videoId;
    let url = `https://www.youtube.com/embed/${id}`;

    return(
      <div className = 'player'>
        <iframe src = {url} title = 'player'></iframe>
        <div className = 'player-text'>
          <h1>{video.snippet.title}</h1>
          <div className = 'text-wrapper'>
            <p
              className = 'channel'>
              {video.snippet.channelTitle}
            </p>
            <div
              onClick = {() => this.toggleClass()}
              className = {this.state.active ? 'drop down' : 'drop up'}></div>
          </div>
          <p
            className = {this.state.active ? 'descr hide' : 'descr show'}>
            {video.snippet.description}
          </p>
        </div>
        <hr/>
      </div>
    );
  }
}
