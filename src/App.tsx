import './App.css';
import styled from 'styled-components';
import {Header} from "./layout/header/Header";
import {Main} from "./layout/sections/main/Main";
import {useState} from "react";
import {Main1} from "./layout/sections/main/Main1";
import {Works} from "./layout/sections/works/Works";


function App() {
    const [isLoggedIn,setIsLoggedIn]=useState(false)
    const changeLog=()=>{
        setIsLoggedIn(!isLoggedIn)
    }
    if (!isLoggedIn){
        return <Main1 callback={changeLog}/>
    }
    return (
        <div className="App">
           <Header/>
            <Main/>
            <Works/>
        </div>
    );
}

export default App;


