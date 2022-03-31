import styles from './Main.module.css'
import styleContainer from '../common/styles/Container.module.css'
import ReactTypingEffect from 'react-typing-effect';

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
                        <div>
                            <ReactTypingEffect
                            text={"Front-end developer (React) from Belarus. Nice to meet you."}
                            speed={100}
                            eraseSpeed={50}
                            eraseDelay={7000}
                            typingDelay={0}
                            className={styles.mainPositionText}
                        />
                        </div>
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