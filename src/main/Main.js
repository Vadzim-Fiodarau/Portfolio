import styles from './Main.module.css'
import styleContainer from '../common/styles/Container.module.css'


export const Main = () => {
    return (
        <div className={styles.mainBlock}>
            <div className={styleContainer.container}>
            <div className={styles.text}>
                <span>Hi there</span>
                <h1>I am Vadim Fedorov</h1>
                <p>Frontend Developer </p>
            </div>
            <div className={styles.photo}></div>
            </div>
        </div>
    )
}