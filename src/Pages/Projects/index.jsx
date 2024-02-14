import styles from './projects.module.scss';

export const Projects = () => {
  return(
     <div className={styles.wrapper}> 
<h2>In progress</h2> 
<div className={styles.sectionWrapper}>
<section className='game'></section>
<section className='portfolio'></section>
<section className='store'></section>
</div>


  </div>
)
};
