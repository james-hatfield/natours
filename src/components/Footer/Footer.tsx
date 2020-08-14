import React from "react";
import classes from "./Footer.module.scss";

const Footer = () => (
  <footer className={classes.Footer}>
    <div className={classes.LogoBox}>
      <picture className={classes.Logo}>
        <source
          srcSet={`${require("../../assets/logo-green-small-1x.png")} 1x, 
              ${require("../../assets/logo-green-small-2x.png")} 2x`}
          media="(max-width: 37.5em)"
        />
        <img
          srcSet={`${require("../../assets/logo-green-1x.png")} 1x, 
              ${require("../../assets/logo-green-2x.png")} 2x`}
          alt="Full Logo"
        />
      </picture>
    </div>
    <div className={classes.Row}>
      <div className={classes.Col1of2}>
        <div className={classes.Nav}>
          <ul className={classes.List}>
            <li className={classes.Item}>
              <a href="/#" className={classes.Link}>
                Company
              </a>
            </li>
            <li className={classes.Item}>
              <a href="/#" className={classes.Link}>
                Contact us
              </a>
            </li>
            <li className={classes.Item}>
              <a href="/#" className={classes.Link}>
                Careers
              </a>
            </li>
            <li className={classes.Item}>
              <a href="/#" className={classes.Link}>
                Privacy policy
              </a>
            </li>
            <li className={classes.Item}>
              <a href="/#" className={classes.Link}>
                Terms
              </a>
            </li>
          </ul>
        </div>
      </div>
      <div className={classes.Col1of2}>
        <p className={classes.Copyright}>
          All rights reserved. Copyright &copy; Lorem ipsum dolor sit amet,
          consectetur adipisicing elit. Cumque excepturi repellat aut quidem
          numquam fugit perspiciatis quos quibusdam consectetur placeat.
        </p>
      </div>
    </div>
  </footer>
);
export default Footer;
