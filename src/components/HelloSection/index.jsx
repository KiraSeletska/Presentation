import styles from "./hello.module.scss";
import smile from "../../images/animation/free-icon-smile-12428685.png"



export const HelloSection = () => {

  //<Smiley />
  return (
    <section className={styles.wrapper}>
      <div className={styles.text}>
        <p className={styles.hello}>Hello! I`m</p>
        <h2 className={styles.name}> KIRA SELETSKA</h2>
        <div className={styles.smileText}>
          If work does not bring you joy, then you will remain unhappy and poor.
          I am a happy person 
          <div className={styles.smile}>
            <img src={smile} alt="" srcset="" />
          </div>
         
        </div>
        <p>
          I'm a front-end programmer and I made this site to make it easier for
          you to get to know me. I tried to make it simple, understandable and
          beautiful, so that our acquaintance would be as pleasant as possible.
        </p>

        <p>
          I suggest you start exploring from the ABOUT page, but you can always
          find what you need in the top menu.
        </p>
      </div>
    </section>
  );
};
