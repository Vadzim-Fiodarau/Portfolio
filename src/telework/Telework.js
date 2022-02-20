import styles from './Telework.module.css'
import styleContainer from "../common/styles/Container.module.css";

export const Telework = () => {
    return (
        <div className={styles.teleworkBlock}>
            <div className={`${styleContainer.container} ${styles.teleworkContainer}`}>
                <div className={styles.telework}>
                    <h2>I am available for remote work</h2>
                    <button type={'submit'}>Hire me</button>
                </div>
            </div>
        </div>
    )
}