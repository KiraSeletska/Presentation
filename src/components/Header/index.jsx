import styles from "./header.module.scss";
import { useState } from "react";
import { NavLink } from "react-router-dom";

export const Header = () => {
  return (
    <header className={styles.menuContainer}>
      <nav className={styles.wrapper}>
        <ul>
          <NavLink to={"/Home"}>
            {" "}
            <li>HOME</li>
          </NavLink>
          <NavLink to={"/About"}>
            {" "}
            <li>ABOUT</li>
          </NavLink>
          <NavLink to={"/Experience"}>
            {" "}
            <li>EXPERIENCE</li>
          </NavLink>

          <li>PROJECTS</li>
          <li>CONTACT</li>
        </ul>
      </nav>
    </header>
  );
};
