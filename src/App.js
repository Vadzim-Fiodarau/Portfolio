import './App.css';
import {Header} from "./header/Header";
import {Main} from "./main/Main";
import {Skills} from "./skills/Skills";
import {Projects} from "./projects/Projects";
import {Telework} from "./telework/Telework";
import {Contacts} from "./contacts/Contacts";
import {Footer} from "./footer/Footer";
import {v1} from "uuid";

function App() {

    const footerLinks = [
        {id: v1(), linkTitle: "Telegram", link: "https://t.me/vadimFedoroff"},
        {id: v1(), linkTitle: "Linkedin", link: "https://www.linkedin.com/in/vadimfedoroff/"},
        {id: v1(), linkTitle: "GitHub", link: "https://github.com/Vadzim-Fiodarau"},
        {id: v1(), linkTitle: "CodeWars", link: "https://www.codewars.com/users/VadimFedorov"}
    ]

    return (
        <div className="App">
            <Header/>
            <Main/>
            <Skills/>
            <Projects/>
            <Telework/>
            <Contacts/>
            <Footer footerLinks={footerLinks}/>
        </div>
    );
}

export default App;
