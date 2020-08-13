import React from "react";
import classes from "./Navigation.module.scss";

const Navigation = () => (
  <div className={classes.Navigation}>
    <input type="checkbox" className={classes.Checkbox} id="nav" />
    <label htmlFor="nav" className={classes.NavBtn}>
      <span className={classes.NavIcon}></span>
    </label>
    <div className={classes.Background}></div>
    <nav className={classes.Nav}>
      <ul className={classes.List}>
        <li className={classes.Item}>
          <a className={classes.Link} href="/#">
            <span>1</span>
            About Natours
          </a>
        </li>
        <li className={classes.Item}>
          <a className={classes.Link} href="/#">
            <span>2</span>
            Your Benefits
          </a>
        </li>
        <li className={classes.Item}>
          <a className={classes.Link} href="/#">
            <span>3</span>
            Popular tours
          </a>
        </li>
        <li className={classes.Item}>
          <a className={classes.Link} href="/#">
            <span>4</span>
            Stories
          </a>
        </li>
        <li className={classes.Item}>
          <a className={classes.Link} href="/#">
            <span>5</span>
            Book Now
          </a>
        </li>
      </ul>
    </nav>
  </div>
);
export default Navigation;
