import styles from './Skills.module.css'
import styleContainer from '../common/styles/Container.module.css'
import {Skill} from "./skill/Skill";
import {Title} from "../common/components/title/Title";

export const Skills = () => {
    return (
        <div className={styles.skillsBlock}>
            <div className={`${styleContainer.container} ${styles.skillsContainer}`}>
                <Title title={'Skills'}/>
                <div className={styles.skills}>
                    <Skill title={'JavaScript'} description={'Scripting programming language with dynamic typing that defines the behavior of a web application.'} />
                    <Skill title={'CSS'} description={'Language for describing the appearance of a document written using a markup language.'}/>
                    <Skill title={'React'} description={'Library for developing user interfaces and creating one-page applications using components and Virtual DOM.'}/>
                    <Skill title={'Redux'} description={'Library for managing the state of the application using tools that allow you to build the architecture of a web application and greatly simplify the transfer of data.'}/>
                    <Skill title={'TypeScript'} description={'Programming language that is a web application development tool that solves typing problems and extends the capabilities of the JavaScript language.'}/>
                </div>
            </div>

        </div>
    )
}