import styles from "./Contacts.module.css"
import styleContainer from "../common/styles/Container.module.css";
import {Title} from "../common/components/title/Title";

export const Contacts = () => {
    return (
        <section className={styles.contactsBlock} id={'contactsId'}>
            <div
                className={`${styleContainer.container} ${styles.contactsContainer}`}>
                <Title title={'Contacts'}/>
                <form className={styles.formContainer}>
                    <ul>
                        <li><input type={'text'}/></li>
                        <li><input type={'text'}/></li>
                        <li><textarea/></li>
                        <li>
                            <button type={'submit'}
                                    className={styles.submitBtn}>Send
                            </button>
                        </li>
                    </ul>


                </form>

            </div>
        </section>
    )
}


// import React, {FormEvent, useState} from "react"
// import {Routes, Route, Router} from 'react-router-dom'
// import { Navigate } from 'react-router-dom';
// import {Main} from "../main/Main";
// import emailjs from 'emailjs-com';
//
//
//
// export const Contacts = () => {
//     const [emailValue, setEmailValue] = useState<string>('')
//     const addEmailValue = (e: FormEvent<HTMLInputElement>) => setEmailValue(e.currentTarget.value)
//     const [redirect, setRedirect] = useState<boolean>(false)
//
//     const sendEmail = (e: any) => {
//         e.preventDefault();
//
//         emailjs.sendForm('service_71mxfzn', 'template_qykplqn', e.target, 'user_x8MUhgpMeP3eUIMAHfgzE')
//             .then((result) => {
//                 console.log(result.text);
//             }, (error) => {
//                 console.log(error.text);
//             });
//         e.target.reset()
//
//         setTimeout(() => {
//             setRedirect(true)
//             alert('Message sent')
//         }, 1000)
//     }
//
//     if (redirect) {
//         return <Router>
//             <Routes>
//                 <Route path="/home" element={<Main />} />
//                 <Route path="/" element={<Navigate replace to="/home" />} />
//             </Routes>
//         </Router>
//     }
//
//     return (
//         <div className={styles.contactsBlock}>
//             <div
//               className={`${styleContainer.container} ${styles.contactsContainer}`}>
//             <h5 className={styles.title}>Get in Touch</h5>
//             <form method={'POST'}  className={styles.formContainer}>
//                 <ul>
//                     <li>
//                         <input placeholder={'Name'} type={'text'} name={'name'}/>
//                     </li>
//                     <li>
//                         <input  placeholder={'Email'} type={'email'} name={'email'} />
//                     </li>
//                     <li>
//                         <textarea placeholder={'Message'} name={'message'} />
//                     </li>
//                     <li>
//                         <button className={styles.submitBtn} type={'submit'} >Send Message</button>
//                     </li>
//                 </ul>
//             </form>
//             </div>
//         </div>
//     )
// }
