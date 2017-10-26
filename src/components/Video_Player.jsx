import React from 'react';

export default class VideoPlayer extends React.Component{

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
      <div>
        <iframe src = {url}></iframe>
        <div>
          <div>{video.snippet.title}</div>
          <div>{video.snippet.description}</div>
        </div>
      </div>
    );
  }
}
