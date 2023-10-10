import styles from "./about.module.scss";
import { AboutWork } from "../../components/AboutPage/AboutWork";
import { AboutLife } from './../../components/AboutPage/AboutLife/index';
export const About = () => {
  return (
    <div className={styles.wrapper}>
        <h2>About Work</h2>
     <AboutWork/>
     <h2>About Life</h2>
     <AboutLife/>
    </div>
  );
};
