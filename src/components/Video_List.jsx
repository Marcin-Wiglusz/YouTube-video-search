import React from 'react';
import VideoListItem from './Video_List_Item';
import '../styles/video_list.css';


export default class VideoList extends React.Component {

  render() {

    return (
      <ul className = 'list-container'>
        {this.props.videosArr.map((videoClip) => {
          return (
            <VideoListItem
              onVideoSelect = {this.props.onVideoSelect}
              key = {videoClip.etag}
              video = {videoClip} />
          );
        })}
      </ul>

    )
  }
}
