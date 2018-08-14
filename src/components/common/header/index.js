import * as React from "react";
// import style from "./header.style.scss";

export default () => {
  return (
    <nav className="level">
      <p className="level-item has-text-centered">
        <a className="link is-info">Home</a>
      </p>
      <p className="level-item has-text-centered">
        <a className="link is-info">Menu</a>
      </p>
      <p className="level-item has-text-centered">
        <img
          src="https://bulma.io/images/bulma-type.png"
          alt=""
          style={{ height: "30px" }}
        />
      </p>
      <p className="level-item has-text-centered">
        <a className="link is-info">Reservations</a>
      </p>
      <p className="level-item has-text-centered">
        <a className="link is-info">Contact</a>
      </p>
    </nav>
  );
};
