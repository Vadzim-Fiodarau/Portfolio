import styles from './Projects.module.css'
import styleContainer from '../common/styles/Container.module.css'


export const Projects = () => {
    return (
        <div className={styles.projectsBlock}>
            <div className={`${styleContainer.container} ${styles.projectsContainer}`}>
                <h2 className={styles.title}>Projects</h2>
                <div className={styles.projects}>

                    <div className={styles.project}>
                        <div className={styles.imageContainer}>
                            <a href={'#'} className={styles.projectButton}>OPEN PROJECT</a>
                        </div>
                        <h3>Todolist</h3>
                        <div className={styles.description}>
                            My first project in IT-INCUBATOR
                        </div>
                    </div>

                    <div className={styles.project}>
                        <div className={styles.imageContainer}>
                            <a href={'#'} className={styles.projectButton}>OPEN PROJECT</a>
                        </div>
                        <h3>Social Network</h3>
                        <div className={styles.description}>
                            My second project in IT-INCUBATOR
                        </div>
                    </div>
                </div>
            </div>

        </div>
    )
}