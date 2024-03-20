import styles from "./footer.module.scss";

import emailLogo from "../../images/icons/gmail-icon-2.svg"
import githubLogo from "../../images/icons/github-icon-1.svg"
import linkedinLogo from "../../images/icons/linkedin-icon-2.svg"
import phoneLogo from '../../images/icons/mobile-phone-1.svg'



export const Footer = () => {
  return (
    <footer className={styles.footerContainer}>
      <div className={styles.wrapper}>
        <div className={styles.contacts}>
          <ul>
            <li>
              <a href="tel:+499999999999"><img src={phoneLogo} alt="Phone" /></a>
            </li>
            <li>
              <a href="mailto:seletskaya.kira@gmail.com"><img src={emailLogo} alt="Email"/></a>
            </li>
            <li>
              <a href="https://www.linkedin.com/in/kira-seletska/" target="_blank" rel="noreferrer"><img src={linkedinLogo} alt="Linkedin" /></a>
            </li>
            <li>
              <a href="https://github.com/KiraSeletska" target="_blank" rel="noreferrer"><img src={githubLogo} alt="GitHub" /> </a>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  );
};
