import React from 'react';
import VideoListItem from './Video_List_Item';

export default class VideoList extends React.Component {

//key could be etag from YT API (videoClip.etag)
  createVideoList(videoClip, i) {
    // console.log(videoClip);
    return (
      <VideoListItem
        key = {i}
        video = {videoClip}>
      </VideoListItem>
    );
  }

  render() {
    return (
      <ul>
        {this.props.videosArr.map(this.createVideoList)}
      </ul>

    )
  }
}
