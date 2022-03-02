import styles from './Project.module.scss'


export const Project = (props) => {
    return (
        <div className={styles.project}>
            <div className={styles.imageContainer} style={props.style}>

            </div>
            <div className={styles.projectInfo}>
                <h3 className={styles.projectTitle}>{props.title}</h3>
                <span className={styles.description}>{props.description}</span>
                <h3 className={styles.projectTitle}>{props.secondTitle}</h3>
                <span className={styles.description}>{props.secondDescription}</span>
            </div>
            <div className={styles.projectButtonContainer}>
                <a href={props.link}
                   className={styles.projectButton}
                >Open project</a>
            </div>

        </div>
    )
}