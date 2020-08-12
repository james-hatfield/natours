import React from "react";
import classes from "./Booking.module.scss";

const Booking = () => (
  <section className={classes.Booking}>
    <div className={classes.Row}>
      <div className={classes.Book}>
        <div className={classes.BookForm}>
          <div className={`${classes.CenterText} ${classes.MarginBottomMed}`}>
            <h2 className={classes.Heading}>Start booking now</h2>
          </div>
          <form action="#" className={classes.Form}>
            <div className={classes.FormGroup}>
              <input
                id="name"
                type="text"
                required
                className={classes.FormInput}
                placeholder="Full Name"
              />
              <label htmlFor="name" className={classes.FormLabel}>
                Full name
              </label>
            </div>
            <div className={classes.FormGroup}>
              <input
                id="email"
                type="email"
                required
                className={classes.FormInput}
                placeholder="Email address"
              />
              <label htmlFor="email" className={classes.FormLabel}>
                Email address
              </label>
            </div>
            <div className={classes.FormGroup}>
              <div className={classes.FormRadioGroup}>
                <input
                  type="radio"
                  id="small"
                  name="size"
                  className={classes.FormRadioInput}
                />
                <label className={classes.FormRadioLabel} htmlFor="small">
                  <span className={classes.FormRadioBtn}></span>Small tour group
                </label>
              </div>
              <div className={classes.FormRadioGroup}>
                <input
                  type="radio"
                  id="large"
                  name="size"
                  className={classes.FormRadioInput}
                />
                <label className={classes.FormRadioLabel} htmlFor="large">
                  <span className={classes.FormRadioBtn}></span>Large tour group
                </label>
              </div>
            </div>
            <div className={`${classes.FormGroup} ${classes.MarginTopMed}`}>
              <button className={`${classes.Btn} ${classes.BtnGreen}`}>
                Next step &rarr;
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  </section>
);
export default Booking;
