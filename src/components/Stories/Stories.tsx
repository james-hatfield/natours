import React from "react";
import classes from "./Stories.module.scss";
import { stories, video } from "../../App.data";
import BackgroundVideo from "../BackgroundVideo/BackgroundVideo";

const Stories = () => (
  <section className={classes.Stories}>
    <BackgroundVideo {...video} />
    <div className={`${classes.CenterText} ${classes.MarginBottomBig}`}>
      <h2 className={classes.Heading}>We make people genuinely happy</h2>
    </div>
    {stories.map((s, i) => (
      <div key={i} className={classes.Row}>
        <div className={classes.Story}>
          <figure className={classes.Shape}>
            <img src={s.img} alt={s.alt} />
            <figcaption className={classes.Caption}>{s.author}</figcaption>
          </figure>
          <div className={classes.StoryText}>
            <h3
              className={`${classes.SubHeading}  ${classes.MarginBottomSmall}`}
            >
              {s.title}
            </h3>
            <p>{s.description}</p>
          </div>
        </div>
      </div>
    ))}
  </section>
);
export default Stories;
