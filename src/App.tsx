import React from 'react';
import {RotationWords} from "./components/RotationWords/RotationWords";
import {Header} from "./components/Header/header";
import {AboutMe} from "./components/AboutMe/AboutMe";
import {Skills} from "./components/Skills/Skills";





function App() {
  return (
    <div className="App">
        <Header/>
        <AboutMe/>
        <Skills/>
    </div>
  );
}

export default App;
