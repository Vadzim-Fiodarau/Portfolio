import styles from './Nav.module.css'
import {Link, animateScroll as scroll} from "react-scroll";


export const Nav = () => {
    return (
        <div className={styles.nav}>
            <Link to={'mainId'} className={styles.link} href="" spy={true}
                  smooth={true}>Main</Link>
            <Link to={'skillsId'} className={styles.link} href="" spy={true}
                  smooth={true}>Skills</Link>
            <Link to={'projectsId'} className={styles.link} href="" spy={true}
                  smooth={true}>Project</Link>
            <Link to={'teleworkId'} className={styles.link} href="" spy={true}
                  smooth={true}>Hire me</Link>
            <Link to={'contactsId'} className={styles.link} href="" spy={true}
                  smooth={true}>Contacts</Link>
        </div>
    )
}

