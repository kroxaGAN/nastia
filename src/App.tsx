import './App.css';
import {Header} from "./layout/header/Header";
import {Main} from "./layout/sections/main/Main";
import {useState} from "react";
import {Main1} from "./layout/sections/main/Main1";
import {Works} from "./layout/sections/works/Works";
import {Skills} from "./layout/sections/skills/Skills";


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
        </div>
    );
}

export default App;


