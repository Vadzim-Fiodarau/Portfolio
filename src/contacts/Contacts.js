import styles from "./Contacts.module.css"
import styleContainer from "../common/styles/Container.module.css";

export const Contacts = () => {
    return (
        <div className={styles.contactsBlock}>
            <div
                className={`${styleContainer.container} ${styles.contactsContainer}`}>
                    <h2>Contacts</h2>
                    <form className={styles.formContainer}>
                        <input type={'text'}/>
                        <input type={'text'}/>
                        <textarea></textarea>
                    </form>
                    <button type={'submit'}>Send</button>
            </div>
        </div>
    )
}