import styles from './Project.module.css'


export const Project = (props) => {
    return (
        <div className={styles.project}>
            <div className={styles.imageContainer} style={props.style}>
                <a href={props.link}
                   className={styles.projectButton}
                >Open project</a>
            </div>
            <div className={styles.projectInfo}>
                <h3 className={styles.projectTitle}>{props.title}</h3>
                <span className={styles.description}>{props.description}</span>
            </div>

        </div>
    )
}