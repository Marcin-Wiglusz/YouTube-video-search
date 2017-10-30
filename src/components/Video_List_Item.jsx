import React from 'react';
import MediaQuery from 'react-responsive';
import '../styles/video_list_item.css';
import '../styles/video_list.css';

export default class VideoListItem extends React.Component{

  render() {

    let video = this.props.video;
    console.log(video);
    // styles for tablet-list-item are in video_list.scss
    return(
      <div className = 'tablet-list-item'>
        <a href = '#'>
          <li
            className = 'list-item'
            onClick = {() => this.props.onVideoSelect(video)}>
            <div className = 'img-container'>
              <MediaQuery maxDeviceWidth = {650}>
                <img src = {video.snippet.thumbnails.default.url} />
              </MediaQuery>
              <MediaQuery minDeviceWidth = {651}>
                <img src = {video.snippet.thumbnails.medium.url} />
              </MediaQuery>
            </div>
            <div className = 'list-item-descr'>
              <p className = 'title'>{video.snippet.title}</p>
              <p className = 'channelTitle'>{video.snippet.channelTitle}</p>
            </div>
          </li>
        </a>
      </div>
    )
  }
}
