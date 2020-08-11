import React from "react";
import classes from "./Card.module.scss";

export interface ICard {
  color: "Primary" | "Secondary" | "Tertiary";
  image: "Image1" | "Image2" | "Image3";
  heading: string;
  details: string[];
  price: number;
}

const Card = (props: ICard) => {
  const details = props.details.map((d, i) => <li key={i}>{d}</li>);
  return (
    <div className={classes.Card}>
      <div className={`${classes.CardSide} ${classes.Front}`}>
        <div className={`${classes.CardImage} ${classes[props.image]}`}></div>
        <h4 className={classes.CardHeading}>
          <span>{props.heading}</span>
        </h4>
        <div className={classes.CardDetails}>
          <ul>{details}</ul>
        </div>
      </div>
      <div
        className={`${classes.CardSide} ${classes.Back} ${
          classes[props.color]
        }`}
      >
        <div className={classes.CallToAction}>
          <div className={classes.Price}>
            <p className={classes.Only}>Only</p>
            <p className={classes.PriceValue}>${props.price}</p>
          </div>
          <button className={classes.Btn}>Book Now!</button>
        </div>
      </div>
    </div>
  );
};
export default Card;
