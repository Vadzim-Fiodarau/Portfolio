import styles from './Skill.module.css'


export const Skill = (props) => {
    return (
        <div className={styles.skill}>
            <div>
                <img className={styles.icon} src={props.img}/>
            </div>
            <div className={styles.skillInfo}>
            <h3 className={styles.skillTitle}>{props.title}</h3>
            <div className={styles.description}>
                {props.description}
            </div>
            </div>
        </div>
    )
}