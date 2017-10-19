import React from 'react';

export default class VideoPlayer extends React.Component{

  render() {
    let video = this.props.video;
    console.log(video);
    if (!video) {
      return <div>Wait for it...</div>
    }
    return(
      <div>
        <iframe src = {video.snippet.thumbnails.default.url}></iframe>
        <div>
          <div>{video.snippet.title}</div>
          <div>{video.snippet.description}</div>
        </div>
      </div>
    );
  }
}
