import React from "react";
import classes from "./BookingModal.module.scss";

const BookingModal = () => (
  <div className={classes.Backdrop} id="popup">
    <div className={classes.Content}>
      <div className={classes.ImageContainer}>
        <img src={require("../../../assets/nat-8.jpg")} alt="Tour" />
        <img src={require("../../../assets/nat-9.jpg")} alt="Tour" />
      </div>
      <div className={classes.ContentText}>
        <a className={classes.CloseModal} href="#section-tours">
          &#10005;
        </a>
        <h2 className={classes.Heading}>Start booking now</h2>
        <h3 className={classes.SubHeading}>
          Important &ndash; Please read these terms before booking
        </h3>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Eligendi vero
          exercitationem architecto quisquam necessitatibus. Eligendi deleniti
          in, ipsa neque sit laudantium laborum non quasi, et, vel harum ab
          perferendis voluptatibus vitae fugiat facere voluptatem doloremque
          quod ullam? Nisi incidunt porro aliquam ut eveniet non illum odio
          voluptas dolorem veniam laudantium eaque quasi, consectetur quia.
          Aliquam hic numquam eum sequi beatae perspiciatis totam sit. Deserunt,
          veritatis cumque saepe corrupti harum consequuntur facilis et cum
          possimus nam adipisci sapiente est sequi. Ea, dolore quas unde dolorum
          incidunt consequuntur, harum totam sed ab consequatur autem nihil
          suscipit cupiditate necessitatibus reprehenderit distinctio officia.
          Nisi.
        </p>
        <button className={`${classes.Btn} ${classes.BtnGreen} }`}>
          Book Now!
        </button>
      </div>
    </div>
  </div>
);
export default BookingModal;
