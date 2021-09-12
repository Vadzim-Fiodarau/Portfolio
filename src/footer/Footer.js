import styles from "./Footer.module.css"
import styleContainer from "../common/styles/Container.module.css";


export const Footer = () => {
    return (
        <div className={styles.footerBlock}>
            <div
                className={`${styleContainer.container} ${styles.footerContainer}`}>
                    <h2>Vadim Fedorov</h2>
                <div className={styles.footer}>
                    <div className={styles.icon}></div>
                    <div className={styles.icon}></div>
                    <div className={styles.icon}></div>
                </div>
                <h2>&copy; 2021 All right reserved</h2>
            </div>
        </div>
    )
}