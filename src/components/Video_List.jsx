import React from 'react';
import VideoListItem from './Video_List_Item';

export default class VideoList extends React.Component {

  render() {

    return (
      <ul>
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
