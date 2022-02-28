import styles from './Nav.module.css'

export const Nav = () => {
    return (
        <div className={styles.nav}>
            <a className={styles.link} href=''>Main</a>
            <a className={styles.link} href=''>Skills</a>
            <a className={styles.link} href=''>Project</a>
            <a className={styles.link} href=''>About</a>
        </div>
    )
}