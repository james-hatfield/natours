import React from "react";
import classes from "./About.module.scss";

const About = () => (
  <section className={classes.About}>
    <div className={`${classes.CenterText} ${classes.MarginBottomBig}`}>
      <h2 className={classes.Heading}>Exciting tours for adventurous people</h2>
    </div>
    <div className={classes.Row}>
      <div className={classes.Col1of2}>
        <h3 className={`${classes.SubHeading}  ${classes.MarginBottomSmall}`}>
          You're going to fall in love with nature
        </h3>
        <p className={classes.Paragraph}>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto
          omnis illo iusto, quos placeat voluptatum sit? Eveniet, deleniti saepe
          quidem placeat fugiat beatae. Iusto nemo eveniet aut vero autem nisi?
        </p>
        <h3 className={`${classes.SubHeading}  ${classes.MarginBottomSmall}`}>
          Live adventures like you never have before
        </h3>
        <p className={classes.Paragraph}>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto
          omnis illo iusto, quos placeat voluptatum sit?
        </p>
        <button className={classes.BtnText}>Learn More &rarr;</button>
      </div>
      <div className={classes.Col1of2}>
        <div className={classes.Composition}>
          <img
            className={`${classes.CompositionPhoto} ${classes.Ph1}`}
            src={require("../../assets/nat-1-large.jpg")}
            alt="Nature 1"
          />
          <img
            className={`${classes.CompositionPhoto} ${classes.Ph2}`}
            src={require("../../assets/nat-2-large.jpg")}
            alt="Nature 2"
          />
          <img
            className={`${classes.CompositionPhoto} ${classes.Ph3}`}
            src={require("../../assets/nat-3-large.jpg")}
            alt="Nature 3"
          />
        </div>
      </div>
    </div>
  </section>
);
export default About;
