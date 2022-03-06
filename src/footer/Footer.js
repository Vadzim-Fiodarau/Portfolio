import styles from "./Footer.module.css"
import styleContainer from "../common/styles/Container.module.css";
import {FooterLink} from "./footerLinks/FooterLink";


export const Footer = (props) => {


    const footerLinks = props.footerLinks.map(footerLink => {
        return (
            <FooterLink
                key={footerLink.id}
                id={footerLink.id}
                linkTitle={footerLink.linkTitle}
                link={footerLink.link}
            />
        )
    })


    return (
        <div className={styles.footerBlock}>
            <div
                className={`${styleContainer.container} ${styles.footerContainer}`}>
                {footerLinks}
                {/*<h2>Vadim Fedorov</h2>*/}
                {/*<div className={styles.footer}>*/}
                {/*    <div className={styles.icon}></div>*/}
                {/*    <div className={styles.icon}></div>*/}
                {/*    <div className={styles.icon}></div>*/}
                {/*</div>*/}
                {/*<h2>&copy; 2021 All right reserved</h2>*/}
            </div>
        </div>
    )
}