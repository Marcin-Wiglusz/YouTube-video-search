import React from 'react';

export default class VideoListItem extends React.Component{

  render() {
    let video = this.props.video;
    console.log(video);
    return(
      <li>
        <img src = {video.snippet.thumbnails.default.url} />
        <div>{video.snippet.title}</div>
        <div>{video.snippet.description}</div>
        <div>{this.props.video.snippet.title}</div>
      </li>
    )
  }
}
