import React from "react";
import classes from "./Header.module.scss";

const Header = () => (
  <header className={classes.Header}>
    <div className={classes.LogoBox}>
      <img
        src={require("../../assets/logo-white.png")}
        alt="Logo"
        className={classes.Logo}
      />
    </div>
    <div className={classes.TextBox}>
      <h1 className={classes.Heading}>
        <span className={classes.HeadingPrimary}>Outdoors </span>
        <span className={classes.HeadingSecondary}>Is where life happens</span>
      </h1>
      <button
        className={`${classes.Btn} ${classes.BtnWhite} ${classes.BtnAnimated}`}
      >
        Discover our tours
      </button>
    </div>
  </header>
);
export default Header;
