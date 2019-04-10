import React, { Component } from "react";
import VideoCover from "react-video-cover";

export class Cover extends Component {
  componentDidMount() {
    this.videoRef.play();
  }
  render() {
    const videoOptions = {
      src: require("../resources/video/Smoke_Dark_11_Videvo.mov"),
      ref: videoRef => {
        this.videoRef = videoRef;
      }
    };
    return (
      <div
        style={{
          width: "100vw",
          height: "100vh",
          overflow: "hidden"
        }}
      >
        <VideoCover videoOptions={videoOptions} />
      </div>
    );
  }
}
export default Cover;
