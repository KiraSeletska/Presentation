import styles from "./ITExperience.module.scss";
import { ITexperienceData } from "../../data";

export const ITExperience = () => {
  return (
    <div className={styles.wrapper}>
      <h2>IT experience</h2>
      <section className={styles.positions}>
        <h3>{ITexperienceData.positions}</h3>
      </section>

      <section className={styles.period}>
        <p>{ITexperienceData.period} </p>
      </section>
      <section className={styles.directing}>
        {ITexperienceData.directings.map((directing, ind) => (
          <p key={directing + ind}>{directing}</p>
        ))}
      </section>
      <div className={styles.tasksContainer}>
        <section className={styles.mainTasks}>
          <h3>Main task Website </h3>
          <p>{ITexperienceData.mainTaskWebsite}</p>
          <h3>Responsibilities</h3>
          <p>{ITexperienceData.responsibilitiesWebsite}</p>
        </section>

        <section className={styles.mainTasks}>
          <h3>Main task Game </h3>
          <p>{ITexperienceData.mainTaskGame}</p>
          <h3>Responsibilities</h3>
          <p>{ITexperienceData.responsibilitiesGame}</p>
        </section>
      </div>

      <section className={styles.skills}>
        <h3>Skill used</h3>
        <p>{ITexperienceData.skillsUsed}</p>
      </section>
    </div>
  );
};
