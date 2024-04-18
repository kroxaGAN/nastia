import './App.css';
import {Header} from "./layout/header/Header";
import {Main} from "./layout/sections/main/Main";
import React, {useState} from "react";
import {Main1} from "./layout/sections/main/Main1";
import {Works} from "./layout/sections/works/Works";
import {Skills} from "./layout/sections/skills/Skills";
import {Testimony} from "./layout/sections/testimony/Testimony";
import {Contact} from "./components/contact/Contact";
import {Slogan} from "./layout/sections/slogan/Slogan";
import {Footer} from "./layout/footer/Footer";


function App() {
    const [isLoggedIn, setIsLoggedIn] = useState(true)
    const changeLog = () => {
        setIsLoggedIn(!isLoggedIn)
    }
    if (!isLoggedIn) {
        return <Main1 callback={changeLog}/>
    }
    return (
        <div className="App">
            <Header/>
            <Main/>
            <Skills/>
            <Works/>
            <Testimony/>
            <Contact/>
            <Slogan/>
            <Footer/>
            <h4>При твоем участии я бы смог закончить сайт визитку....</h4>
        </div>
    );
}

export default App;


