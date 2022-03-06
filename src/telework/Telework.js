import styles from './Telework.module.css'
import styleContainer from "../common/styles/Container.module.css";
import {Title} from "../common/components/title/Title";

export const Telework = () => {
    return (
        <section className={styles.teleworkBlock} id={'teleworkId'}>
            <div className={`${styleContainer.container} ${styles.teleworkContainer}`}>
                <div className={styles.telework}>
                    <Title title={'I am available for remote work'}/>
                    <a href={'https://www.linkedin.com/in/vadimfedoroff/'}
                       className={styles.teleworkButton}> Hire me
                    </a>
                </div>
            </div>
        </section>
    )
}