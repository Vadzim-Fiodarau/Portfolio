import React, {FormEvent, useState} from "react"
import styles from "./Contacts.module.css"
import styleContainer from "../common/styles/Container.module.css";
import {Title} from "../common/components/title/Title";
import emailjs from '@emailjs/browser';

export const Contacts = () => {

    const [emailValue, setEmailValue] = useState('')
    const addEmailValue = (e: FormEvent<HTMLInputElement>) => {
        setEmailValue(e.currentTarget.value)
    }



    const sendEmail = (e: any) => {
        e.preventDefault();
        setEmailValue('')
        emailjs.sendForm('service_t87vy2k',
            'template_agsp3q7',
            e.target,
            '0hS_XIXc_YfSRUg-_')
            .then((result) => {
                console.log(result.text);
            }, (error) => {
                console.log(error.text);
            });
        e.target.reset()

        setTimeout(() => {
            alert('Message sent')
        }, 1000)
    }


    return (
        <section className={styles.contactsBlock} id={'contactsId'}>
            <div
                className={`${styleContainer.container} ${styles.contactsContainer}`}>
                <Title title={'Contacts'}/>
                <form method={'POST'} onSubmit={sendEmail}
                      className={styles.formContainer}>
                    <ul>
                        <li><input type={'text'} placeholder={'Name'}
                                   name={'name'}/></li>
                        <li><input value={emailValue} onInput={addEmailValue}
                                   type={'text'} placeholder={'E-mail'}
                                   name={'email'}/></li>
                        <li><textarea name={'message'}
                                      placeholder={'Your message'}/></li>
                        <li>
                            <button type={'submit'}
                                    className={styles.submitBtn}
                                    disabled={!emailValue}>Send
                            </button>
                        </li>
                    </ul>
                </form>
            </div>
        </section>
    )
}
