import React from "react";
import Language from "@material-ui/icons/Language";
import classes from "./Features.module.scss";

const Features = () => (
  <section className={classes.Features}>
    <div className={classes.Row}>
      <div className={classes.Col1of4}>
        <div className={classes.FeatureBox}>
          <Language className={classes.Icon}></Language>
          <h3 className={classes.SubHeading}>Explore the world</h3>
          <p className={classes.Text}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum,
            quibusdam!
          </p>
        </div>
      </div>
      <div className={classes.Col1of4}>
        <div className={classes.FeatureBox}>test</div>
      </div>
      <div className={classes.Col1of4}>
        <div className={classes.FeatureBox}>test</div>
      </div>
      <div className={classes.Col1of4}>
        <div className={classes.FeatureBox}>test</div>
      </div>
    </div>
  </section>
);
export default Features;
