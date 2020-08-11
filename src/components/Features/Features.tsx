import React from "react";
import Language from "@material-ui/icons/Language";
import Explore from "@material-ui/icons/Explore";
import Map from "@material-ui/icons/Map";
import Heart from "@material-ui/icons/FavoriteBorder";
import classes from "./Features.module.scss";
import LinearGradient from "../LinearGradient/LinerGradient";

const Features = () => (
  <section className={classes.Features}>
    <div className={classes.Row}>
      <div className={classes.Col1of4}>
        <div className={classes.FeatureBox}>
          <Language
            component={(svgProps) => <LinearGradient {...svgProps} />}
            className={classes.Icon}
          ></Language>
          <h3 className={`${classes.SubHeading} ${classes.MarginSmall}`}>
            Explore the world
          </h3>
          <p className={classes.Text}>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sed, atque
            voluptas culpa harum recusandae rerum.
          </p>
        </div>
      </div>
      <div className={classes.Col1of4}>
        <div className={classes.FeatureBox}>
          <Explore
            component={(svgProps) => <LinearGradient {...svgProps} />}
            className={classes.Icon}
          ></Explore>
          <h3 className={`${classes.SubHeading} ${classes.MarginSmall}`}>
            Meet Nature
          </h3>
          <p className={classes.Text}>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sed, atque
            voluptas culpa harum recusandae rerum.
          </p>
        </div>
      </div>
      <div className={classes.Col1of4}>
        <div className={classes.FeatureBox}>
          <Map
            component={(svgProps) => <LinearGradient {...svgProps} />}
            className={classes.Icon}
          ></Map>
          <h3 className={`${classes.SubHeading} ${classes.MarginSmall}`}>
            Find your way
          </h3>
          <p className={classes.Text}>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sed, atque
            voluptas culpa harum recusandae rerum.
          </p>
        </div>
      </div>
      <div className={classes.Col1of4}>
        <div className={classes.FeatureBox}>
          <Heart
            component={(svgProps) => <LinearGradient {...svgProps} />}
            className={classes.Icon}
          ></Heart>
          <h3 className={`${classes.SubHeading} ${classes.MarginSmall}`}>
            Live a healthier life
          </h3>
          <p className={classes.Text}>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sed, atque
            voluptas culpa harum recusandae rerum.
          </p>
        </div>
      </div>
    </div>
  </section>
);
export default Features;
