import styles from './Project.module.css'


export const Project = (props) => {
    return (
        <div className={styles.project}>
            <div className={styles.imageContainer}>
                <a href={props.link}
                   className={styles.projectButton}
                >Open project</a>
            </div>
            <h3>{props.title}</h3>
            <div className={styles.description}>
                {props.description}
            </div>
        </div>
    )
}