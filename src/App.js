// import logo from './logo.svg';
import './App.css';
import Alert from './components/Alert';
import Myabout from './components/Myabout';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import React, { useState } from 'react';
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";



function App() {

  const [mode, setMode] = useState('light') //States whether dark mode is on or not

  const [whichMode, setWhichMode] = useState('light')

  const [whichHex, setWhichHex] = useState('white')

  const [alert, setAlert] = useState({
    msg:null,
    type:null
  })

  const showAlert = (message, type) =>{
    setAlert({
      msg: message,
      type: type
    })
    setTimeout(() => {
      setAlert({
        msg: null,
        type: null
      })
    }, 1500);
  }

  const toggleMode = ()=>{
    if (mode === 'light'){
      setMode('dark')
      setWhichHex("#273241")
      document.body.style.backgroundColor = "#273241"
      showAlert("Dark modes has been enabled", "success")
    }
    else{
      setMode('light')
      setWhichHex("white")
      document.body.style.backgroundColor = "white"
      showAlert("Bright mode has been enabled", "success")

    }
  }

  const toggleRedMode = ()=>{
    if (whichMode === 'light'){
      setWhichMode('danger')
      setMode('dark')
      setWhichHex("#111418")
      document.body.style.backgroundColor = "#111418"
      showAlert("Dark mode has been enabled", "success")
      
    }
    else{
      setWhichMode('light')
      setMode('light')
      setWhichHex("white")
      document.body.style.backgroundColor = "white"
      showAlert("Bright mode has been enabled", "success")

    }
  }

  const toggleGreenMode = ()=>{
    if (whichMode === 'light'){
      setWhichMode('success')
      setMode('dark')
      setWhichHex('#121212')
      document.body.style.backgroundColor = '#121212'
      showAlert("Dark mode has been enabled", "success")
    }
    else{
      setWhichMode('light')
      setMode('light')
      setWhichHex("white")
      document.body.style.backgroundColor = "white"
      showAlert("Bright mode has been enabled", "success")

    }
  }

  const toggleBlueMode = ()=>{
    if (whichMode === 'light'){
      setWhichMode('primary')
      setMode('dark')
      setWhichHex("#273241")
      document.body.style.backgroundColor = "#273241"
      showAlert("Dark mode has been enabled", "success")

    }
    else{
      setWhichMode('light')
      setMode('light')
      setWhichHex("white")
      document.body.style.backgroundColor = "white"
      showAlert("Bright mode has been enabled", "success")

    }
  }

  return (
    <>
    <Router>
      <div>
        <Navbar title="TextCraft" aboutText="About Us" mode={mode} toggleMode={toggleMode} toggleRedMode={toggleRedMode} toggleGreenMode = {toggleGreenMode} toggleBlueMode={toggleBlueMode} />
        <Alert alert= {alert}/> 
        <div className="container my-3">
          <Routes>
            <Route exact path="/about" element={<Myabout mode={mode} whichHex={whichHex}/>}></Route>
            <Route exact path="/" element={<TextForm showAlert={showAlert} heading="Enter Text To Analyse" mode={mode} whichMode = {whichMode} whichHex={whichHex}/>}></Route>       
          </Routes>

        </div>
      </div>
   
    </Router>
  </> 
  );
}

export default App;
