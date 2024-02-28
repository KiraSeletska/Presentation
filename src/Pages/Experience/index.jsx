import styles from "./experience.module.scss";
import { experienceData } from "../../data";
import { AdditionalInformation } from "../../components/AdditionalInformation";
import { ITExperience } from "../../components/ITExperience";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEye } from "@fortawesome/free-regular-svg-icons";
import { Resume } from "../../components/Resume";

export const Experience = () => {
  return (
    <div className={styles.wrapper}>
      <h2>Work Experience<span className={styles.progress}>in progress</span></h2>
     
      <ITExperience />
      {experienceData &&
        experienceData.map((el) => (
          <div key={el.id} className={styles.experience}>
            <section className={styles.positions}>
              {el.positions.map((position, ind) => (
                <h3 key={position + ind}>{position}</h3>
              ))}
            </section>

            <p className={styles.directings}>{el.directings}</p>
            <p className={styles.directions}>{el.direction}</p>
            <p className={styles.location}>{el.location}</p>
            <p className={styles.period}>{el.period} </p>
            <section className={styles.mainTasks}>
              <h3>Main task </h3>
              <p>{el.mainTasks}</p>
            </section>

            <section className={styles.responsibilities}>
              <h3>Main responsibilities</h3>
              <p>{el.responsibilities}</p>
            </section>
            <section className={styles.otherResponsibilities}>
              <h3>Other responsibilities</h3>
              <p>{el.otherResponsibilities}</p>
            </section>
          </div>
        ))}
    {/* <p className={styles.linkToCV}><FontAwesomeIcon icon={faEye} /> <a href="">More information about previous... </a></p>*/}
    <Resume/>
      <AdditionalInformation />
      <div>


      </div>
   
    </div>
  );
};
