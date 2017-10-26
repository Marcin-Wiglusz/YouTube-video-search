import React from 'react';

export default class VideoListItem extends React.Component{

  render() {
    
    let video = this.props.video;
    return(
      <li onClick = {() => this.props.onVideoSelect(video)}>
        <img src = {video.snippet.thumbnails.default.url} />
        <div>{video.snippet.title}</div>
        <div>{video.snippet.channelTitle}</div>
        <div>{video.snippet.description}</div>
      </li>
    )
  }
}
