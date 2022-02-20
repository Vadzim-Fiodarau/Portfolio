import styles from "./Contacts.module.css"
import styleContainer from "../common/styles/Container.module.css";

export const Contacts = () => {
    return (
        <div className={styles.contactsBlock}>
            <div
                className={`${styleContainer.container} ${styles.contactsContainer}`}>
                    <h2 className={styles.title}>Contacts</h2>
                    <form className={styles.formContainer}>
                        <input type={'text'}/>
                        <input type={'text'}/>
                        <textarea/>
                        <button type={'submit'} className={styles.submitBtn}>Send</button>
                    </form>

            </div>
        </div>
    )
}