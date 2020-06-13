import React from "react";
import VideoItem from "./VideoItem";

const VideoList = props => {
  const renderedList = props.videos.map(video => {
    return <VideoItem 
              key={video.id.videoId}
              onVideoSelect={props.onVideoSelect}
              video={video}
              >
            </VideoItem>;
  });

  return (
    <div
      className="ui relaxed divided list"
      style={{ width: "100%", float: "left", paddingTop: '2%' }}
      >
      {renderedList}
    </div>
  );
};

export default VideoList;
