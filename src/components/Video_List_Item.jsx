import React from 'react';

export default class VideoListItem extends React.Component{

  render() {
    let video = this.props.video;
    return(
      <li>
        <img src = {video.snippet.thumbnails.default.url} />
        <div>{video.snippet.title}</div>
      </li>
    )
  }
}
