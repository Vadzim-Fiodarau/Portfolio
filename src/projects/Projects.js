import styles from './Projects.module.css'
import styleContainer from '../common/styles/Container.module.css'
import {Project} from "./project/Projects";
import {Title} from "../common/components/title/Title";


export const Projects = () => {
    return (
        <div className={styles.projectsBlock}>
            <div className={`${styleContainer.container} ${styles.projectsContainer}`}>
                <Title title={'Projects'}/>
                <div className={styles.projects}>

                    <Project title={'Todolist'}
                             description={'My first project in IT-INCUBATOR'}
                             link={'https://vadzim-fiodarau.github.io/Todolist'}
                             // image={'https://wallpaperaccess.com/full/2005056.png'}
                    />
                    <Project title={'Social Network'}
                             description={'My second project in IT-INCUBATOR'}
                             link={'https://Vadzim-Fiodarau.github.io/SocialNetwork'}
                             // image={'https://wallpaperaccess.com/full/2005056.png'}
                    />

                </div>
            </div>

        </div>
    )
}