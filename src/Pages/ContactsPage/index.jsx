import styles from "./contactsPage.module.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faWhatsapp } from "@fortawesome/free-brands-svg-icons";
import { faEnvelope } from "@fortawesome/free-regular-svg-icons";
import { faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { faGithub } from "@fortawesome/free-brands-svg-icons";

export const ContactsPage = () => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.container}>
      <h3>Contact me via social media or email</h3>
      <div className={styles.info}>
        <p>
          {" "}
          <a href="tel:+499999999999">
            {" "}
            <FontAwesomeIcon icon={faWhatsapp} />
          </a>
        </p>
        <p>
          {" "}
          <a href="mailto:seletskaya.kira@gmail.com">
            {" "}
            <FontAwesomeIcon icon={faEnvelope} />
          </a>
        </p>
        <p>
          {" "}
          <a href="https://www.linkedin.com/in/kira-seletska/" target="_blank">
          <FontAwesomeIcon icon={faLinkedin} />
          </a>
        </p>
        <p>
          <a href="https://github.com/KiraSeletska" target="_blank">
            {" "}
            <FontAwesomeIcon icon={faGithub} />
          </a>{" "}
        </p>
      </div>
      </div>
     
    </div>
  );
};
