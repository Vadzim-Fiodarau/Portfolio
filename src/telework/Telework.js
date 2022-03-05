import styles from './Telework.module.css'
import styleContainer from "../common/styles/Container.module.css";

export const Telework = () => {
    return (
        <section className={styles.teleworkBlock} id={'teleworkId'}>
            <div className={`${styleContainer.container} ${styles.teleworkContainer}`}>
                <div className={styles.telework}>
                    <h2 className={styles.teleworkTitle}>I am available for remote work</h2>
                    <a href={'https://www.linkedin.com/in/vadimfedoroff/'}
                       className={styles.teleworkButton}> Hire me
                    </a>
                </div>
            </div>
        </section>
    )
}