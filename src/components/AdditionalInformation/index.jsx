import { totalExperienceData } from "../../data";
import styles from "./additionalInformation.module.scss";

export const AdditionalInformation = () => {

  return (
    <section className={styles.wrapper}>
      <h2>Additional Information</h2>
      <p className={styles.totalInfo}>{totalExperienceData.totalDev}</p>
      <ul>
      <h3>Technical Stack </h3>
      {totalExperienceData.technicalStack.map((skill) => (
        <li key={skill}>- {skill}</li>
      ))}
   
      </ul>
      <h3>Basic knowledge </h3>

<p>{totalExperienceData.basicTechnikalStack}</p>

      <h4>{totalExperienceData.informationPhrase}</h4>

      <p className={styles.totalInfo}>{totalExperienceData.totalSales}</p>
      <p className={styles.typeOfGoods}>{totalExperienceData.typesOfGoods}</p>
      <ul>
      <h3>Skills </h3>
      {totalExperienceData.experianceAndSkills.map((skill) => (
        <li key={skill}>- {skill}</li>
      ))}
      </ul>
    
      <div className={styles.personaleQualities}>
        <h3>Personale qualities </h3>
        <p>{totalExperienceData.personaleQualities}</p>
      </div>
    </section>
  );
};
