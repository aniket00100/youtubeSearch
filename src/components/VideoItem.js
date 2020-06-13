import React from "react";
import "./videoItem.css";

const VideoItem = props => {
  return (
    <div onClick={() => props.onVideoSelect(props.video)} className="video-item item">
      <img
        className="ui image"
        alt={props.video.snippet.title}
        src={props.video.snippet.thumbnails.medium.url}
      ></img>
      <div className="content">
        <div className="header">{props.video.snippet.title}</div>
        <p></p>
      </div>
    </div>
  );
};

export default VideoItem;
