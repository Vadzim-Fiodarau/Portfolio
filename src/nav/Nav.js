import styles from './Nav.module.css'

export const Nav = () => {
    return (
        <div className={styles.nav}>
            <a href=''>Main</a>
            <a href=''>Skills</a>
            <a href=''>Project</a>
            <a href=''>About</a>
        </div>
    )
}