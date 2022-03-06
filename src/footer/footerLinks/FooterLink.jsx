import style from './FooterLink.module.css'


export function FooterLink(props) {

    return (
        <li className={style.link}>
            <a href={props.link} target={"_blank"} rel="noreferrer" className={style.linkText}>{props.linkTitle}</a>
        </li>
    )
}