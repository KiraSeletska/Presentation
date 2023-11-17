import styles from "./contscts.module.scss";

export const Contacts = () => {
  return (
    <div className={styles.contactInfoWrapper}>
      <div className={styles.typeInfo}>
        <p>Phone:</p>
        <p>Emaile:</p>
        <p>LinkedIn:</p>
        <p>Github:</p>
      </div>
      <div className={styles.info}>
        <p>
          {" "}
          <a href="tel:+499999999999">+49 999 999 99 99</a>
        </p>
        <p>
          {" "}
          <a href="mailto:seletskaya.kira@gmail.com">seletskaya.kira@gmail.com</a>
        </p>
        <p>
          {" "}
          <a href="https://www.linkedin.com/in/kira-seletska/" target="_blank">
            inkedin.com/in/kira-seletska
          </a>
        </p>
        <p>
          <a href="https://github.com/KiraSeletska" target="_blank">github.com/KiraSeletska</a>{" "}
        </p>
      </div>
    </div>
  );
};
