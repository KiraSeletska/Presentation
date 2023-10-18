import styles from "./myInfo.module.scss";
import jsImg from "../../../images/icons_coding/logo-javascript.svg";
import tsImg from "../../../images/icons_coding/typescript.svg";
import reactImg from "../../../images/icons_coding/react-2.svg";
import reduxImg from "../../../images/icons_coding/redux.svg";
import sassImg from "../../../images/icons_coding/sass-1.svg";
import mobXImg from "../../../images/icons_coding/mobx.svg";
export const MyInfo = () => {
  return (
    <div className={styles.infoWrapper}>
      <h1>FRONTEND DEVELOPER</h1>
      <div className={styles.icons}>
          <img src={jsImg} alt="Javascript" />
          <img src={tsImg} alt="Typescript" />
          <img src={reactImg} alt="React" />
          <img src={reduxImg} alt="Redux" />
          <img src={mobXImg} alt="MobX" />
          <img src={sassImg} alt="Sass" />
        </div>
      <div className={styles.basicInfoWrapper}>
        <p className={styles.typeInfo}> Residence:</p>{" "}
        <p>Germany, Traunstein (Bayern)</p>
        <p className={styles.typeInfo}>Citizenship:</p> <p>Ukrainian</p>
      </div>
    </div>
  );
};
