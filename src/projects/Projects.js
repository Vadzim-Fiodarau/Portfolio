import styles from './Projects.module.scss'
import styleContainer from '../common/styles/Container.module.css'
import {Project} from "./project/Project";
import {Title} from "../common/components/title/Title";
import todoImage from './../assets/image/todo.jpg'
import socialImage from './../assets/image/social.jpg'
import counterImage from './../assets/image/counter.jpg'


export const Projects = () => {
    const social = {
        backgroundImage: `url(${socialImage})`
    }
    const todo = {
        backgroundImage: `url(${todoImage})`
    }
    const counter = {
        backgroundImage: `url(${counterImage})`
    }

    return (
        <section className={styles.projectsBlock} id={'projectsId'}>
            <div className={`${styleContainer.container} ${styles.projectsContainer}`}>
                <Title title={'Projects'}/>
                <div className={styles.projects}>

                    <Project title={'Todolist'}
                             description={'Web application designed to conveniently structure information about all current tasks in one place.'}
                             secondTitle={'Technologies:'}
                             secondDescription={'ReactJS, TS, Redux-thunk, Axios, Formik, Material UI, Sass.'}
                             link={'https://vadzim-fiodarau.github.io/Todolist'}
                             style={todo}
                    />
                    <Project title={'Social Network'}
                             description={'Web application that allows registered users to post information and communicate with each other.'}
                             secondTitle={'Technologies:'}
                             secondDescription={'ReactJS, TS, Redux-thunk, Axios, Redux-form, CSS.'}
                             link={'https://Vadzim-Fiodarau.github.io/SocialNetwork'}
                             style={social}
                    />
                    <Project title={'Simple Counter'}
                             description={'Simple counter with additional settings'}
                             secondTitle={'Technologies:'}
                             secondDescription={'ReactJS, TS, Redux, CSS.'}
                             link={'https://Vadzim-Fiodarau.github.io/SimpleCounterWithRedux'}
                             style={counter}
                    />

                </div>
            </div>

        </section>
    )
}