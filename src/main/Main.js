import styles from './Main.module.css'
import styleContainer from '../common/styles/Container.module.css'


export const Main = () => {
    return (
        <section className={styles.mainBlock} id={'mainId'}>
            <div className={styleContainer.container}>
            <div className={styles.text}>
                <span className={styles.greetings}>Hi there, I'm</span>
                <span >
                     <span className={styles.nameText}> Vadim Fedorov</span>
                </span>
                <div>
                    <span className={styles.position}>
                        <div>Frontend Developer</div>
                        <span className={styles.positionText}></span>
                    </span>
                </div>

            </div>
            <div className={styles.photo}>

            </div>
            </div>
        </section>
    )
}