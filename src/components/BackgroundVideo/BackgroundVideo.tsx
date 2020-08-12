import React from "react";
import classes from "./BackgroundVideo.module.scss";
import { IBackgroundVideo } from "../../App.types";

const BackgroundVideo = (props: IBackgroundVideo) => (
  <div className={classes.VideoContainer}>
    <video className={classes.Video} autoPlay muted loop>
      {props.sources.map((s, i) => (
        <source key={i} src={s.src} type={s.type} />
      ))}
      Your browser is not supported!
    </video>
  </div>
);
export default BackgroundVideo;
