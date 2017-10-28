import React from 'react';
import '../styles/video_list_item.css';

export default class VideoListItem extends React.Component{

  render() {

    let video = this.props.video;
    console.log(video);
    return(
      <div>
        <li
          className = 'list-item'
          onClick = {() => this.props.onVideoSelect(video)}>
          <div>
            <img src = {video.snippet.thumbnails.default.url} />
          </div>
          <div>
            <p>{video.snippet.title}</p>
            <p>{video.snippet.channelTitle}</p>
          </div>
        </li>
      </div>
    )
  }
}
