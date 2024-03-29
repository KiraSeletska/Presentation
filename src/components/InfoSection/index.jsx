import styles from "./infoSection.module.scss";
import photo from "../../images/photo/0.jpg";
import { MyInfo } from "./MyInfo";

export const InfoSection = () => {
  return (
    <section className={styles.container}>
      <div className={styles.wrapper}>
        <div className={styles.photoWrapper}>
          <img src={photo} alt="Author's" />
        </div>
        <MyInfo />
      </div>
    </section>
  );
};
