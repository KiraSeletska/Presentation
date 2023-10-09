import React, { useEffect, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAnglesUp } from "@fortawesome/free-solid-svg-icons";
import styles from "./upButton.module.scss";

export const UpButton = () => {
  const [isVisible, setIsVisible] = useState(false);

  const rootElement = document.getElementById("root");

  const scrollToTop = () => {
    rootElement.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  const handleScroll = () => {
    rootElement.scrollTop > 300 ? setIsVisible(true) : setIsVisible(false);
  };
  useEffect(() => {
    const rootElement = document.getElementById("root");
    if (rootElement) {
      rootElement.addEventListener("scroll", handleScroll);
      return () => {
        rootElement.removeEventListener("scroll", handleScroll);
      };
    }
  }, []);

  return (
    <div className={isVisible ? styles.visible : ""}>
      <button onClick={scrollToTop}>
        <FontAwesomeIcon icon={faAnglesUp} />
      </button>
    </div>
  );
};
