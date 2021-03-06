import React from "react";
import classes from "./Tours.module.scss";
import Card from "../Card/Card";
import { cards } from "../../App.data";

const Tours = () => (
  <section className={classes.Tours}>
    <div className={`${classes.CenterText} ${classes.MarginBottomBig}`}>
      <h2 className={classes.Heading}>Most popular tours</h2>
    </div>
    <div className={classes.Row}>
      {cards.map((c, i) => (
        <div key={i} className={classes.Col1of3}>
          <Card {...c}></Card>
        </div>
      ))}
    </div>
    <div className={`${classes.CenterText} ${classes.MarginTopHuge}`}>
      <button className={`${classes.Btn} ${classes.BtnGreen}`}>
        Discover All Tours
      </button>
    </div>
  </section>
);
export default Tours;
