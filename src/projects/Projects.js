import styles from './Projects.module.scss'
import styleContainer from '../common/styles/Container.module.css'
import {Project} from "./project/Project";
import {Title} from "../common/components/title/Title";
import todoImage from './../assets/image/todo.jpg'
import socialImage from './../assets/image/social.jpg'


export const Projects = () => {
    const social = {
        backgroundImage: `url(${socialImage})`
    }
    const todo = {
        backgroundImage: `url(${todoImage})`
    }

    return (
        <div className={styles.projectsBlock}>
            <div className={`${styleContainer.container} ${styles.projectsContainer}`}>
                <Title title={'Projects'}/>
                <div className={styles.projects}>

                    <Project title={'Todolist'}
                             description={'My first project in IT-INCUBATOR'}
                             link={'https://vadzim-fiodarau.github.io/Todolist'}
                             style={social}
                    />
                    <Project title={'Social Network'}
                             description={'My second project in IT-INCUBATOR'}
                             link={'https://Vadzim-Fiodarau.github.io/SocialNetwork'}
                             style={todo}
                    />

                </div>
            </div>

        </div>
    )
}