import styles from "./ITExperience.module.scss";
import { ITexperienceData } from "../../data";

export const ITExperience = () => {
  return (
    <div className={styles.wrapper}>
      <h3>{ITexperienceData.positions}</h3>
      <p className={styles.period}>{ITexperienceData.period} </p>

      <section className={styles.directings}>
        {ITexperienceData.directings.map((directing, ind) => (
         
                 <p key={directing + ind}>{directing} </p>
          
        
   
        ))}
      </section>
      <h3>Tasks </h3>

        <p>{ITexperienceData.mainTask}</p>

      <div className={styles.tasksContainer}>
        
      <section className={styles.mainTasks}>
          <h3>Main task Game </h3>
          <p>{ITexperienceData.mainTaskGame}</p>
          <p>{ITexperienceData.descrGame}</p>

          <h3>Responsibilities</h3>
          <p>{ITexperienceData.responsibilitiesGame}</p>
        </section>

        <section className={styles.mainTasks}>
          <h3>Main task Website </h3>
          <p>{ITexperienceData.mainTaskWebsite}</p>
          <h3>Responsibilities</h3>
          <p>{ITexperienceData.responsibilitiesWebsite}</p>
        </section>

      </div>

      <section className={styles.skills}>
        <h3>Skill used</h3>
        <p>{ITexperienceData.skillsUsed}</p>
      </section>
    </div>
  );
};
