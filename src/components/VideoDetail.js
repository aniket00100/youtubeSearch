import React from "react";

const VideoDetail = props => {
  // console.log("from videoDetail", props);

  if (!props.video) {
    return (
      <div
        style={{ width: "100%", display: "flex", paddingTop: "20px" }}
        className="ui relaxed divided list"
      >
        Loading...
      </div>
    );
  }

  const videoSrc = `https://www.youtube.com/embed/${props.video.id.videoId}`;

  console.log(videoSrc);
  return (
    <div style={{ width: "100%", paddingTop: "8px", position: 'relative' }}>
      <div className="ui embed" style={{width: '100%'}}>
        <iframe src={videoSrc} title="video player" />
      </div>
      <div className="ui segment">
        <h4 className="ui header">{props.video.snippet.title}</h4>
        <p>{props.video.snippet.description}</p>
      </div>
      {/* <div style={{width: '100%', display: "block"}}>{props.video.snippet.description}</div> */}
    </div>
  );
};

export default VideoDetail;
