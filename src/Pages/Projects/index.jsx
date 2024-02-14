import styles from "./projects.module.scss";
import { projectsData } from "../../data";
import pa from "../../images/projects/store/1.png";
export const Projects = () => {
  console.log(projectsData.map((el) => el.pic.map((el) => el)));

  return (
    <div className={styles.wrapper}>
      <h2>In progress</h2>
      <div className={styles.sectionWrapper}>
        {projectsData &&
          projectsData.map((el, i) => (
            <section key={i}>
              <h3>{el.title}</h3>
              <p className={styles.details}>{el.technicalDetails}</p>
<p>Task: {el.task}</p>
              <div className={styles.pics}>
                {el.pic.map((el, i) => (
                  <div key={i}>
                    <img src={el} alt="" />
                  </div>
                ))}
              </div>
              {el.video && (
                <video autoPlay loop muted playsInline>
                  <source src={el.video} type="video/mp4" />
                  Ваш браузер не поддерживает тег video.
                </video>
              )}
              <div className={styles.link}>
                {el.projectLink && (
                  <a href={el.projectLink} rel="noreferrer" target="_blank">
                    Refer to view
                  </a>
                )}
                {el.sourceLink && (
                  <a href={el.sourceLink} rel="noreferrer" target="_blank">
                    Refer to code
                  </a>
                )}
              </div>
              <p>{el.description}</p>
            </section>
          ))}
      </div>
    </div>
  );
};
