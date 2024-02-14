import styles from "./header.module.scss";
import { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope} from "@fortawesome/free-regular-svg-icons";
import { faHouse } from "@fortawesome/free-solid-svg-icons";
import { faAddressCard } from "@fortawesome/free-regular-svg-icons";
import { faBriefcase } from "@fortawesome/free-solid-svg-icons";
import { faDiagramProject } from "@fortawesome/free-solid-svg-icons";
//,faHouse, faAddressCard, faBriefcase, faDiagramProject 

export const Header = () => {
  const [isMobileScreen, setIsMobileScreen] = useState(false);

  const handleResize = () => {
    setIsMobileScreen(window.innerWidth <= 600);
  }

  useEffect(() => {
    // Вызываем handleResize() при загрузке страницы
    handleResize();

    // Добавляем слушатель события resize
    window.addEventListener('resize', handleResize);

    // Убираем слушатель события при размонтировании компонента
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <header className={styles.menuContainer}>
      <nav className={styles.wrapper}>
        <ul>
          <NavLink to={"/Home"} activeclassname="active">
         
            <li className={styles.li}>HOME</li>
            <li className={styles.mobileLi}><FontAwesomeIcon icon={faHouse} /></li>
          </NavLink>
          <NavLink to={"/About"} activeclassname="active">
       
            <li className={styles.li}>ABOUT</li>
            <li className={styles.mobileLi}><FontAwesomeIcon icon={faAddressCard} /></li>
          </NavLink>
          <NavLink to={"/Experience"} activeclassname="active">
       
            <li className={styles.li}>EXPERIENCE</li>
            <li className={styles.mobileLi}><FontAwesomeIcon icon={faBriefcase} /></li>
          </NavLink>
          <NavLink to={"/Projects"} activeclassname="active">
          <li className={styles.li}>PROJECTS</li>
          </NavLink>
          <li className={styles.mobileLi}><FontAwesomeIcon icon={faDiagramProject} /></li>
          <NavLink to={"/ContactsPage"} activeclassname="active">
          <li className={styles.li}>CONTACTS</li>
          <li className={styles.mobileLi}><FontAwesomeIcon icon={faEnvelope} /></li>
          </NavLink>
        </ul>
      </nav>
    </header>
  );
};
