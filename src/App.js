import './App.css';
//import About from './components/About';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import React, { useState } from 'react';

function App() { 
  const [mode, setMode] = useState('light'); // Either dark mode is enabled or not

  const toggleMode = () => {
    if (mode === 'light') {
      setMode('dark'); // Switch to light mode
      document.body.style.backgroundColor ="grey"
    } else {
      setMode('light'); // Switch to dark mode
      document.body.style.backgroundColor = "light"
    }
  };
  
  return (
    <>
      <Navbar title="TextUtils" About="About" mode={mode} toggleMode={toggleMode} />
      <div className="container my-3">
        <TextForm heading="Enter the text to analyze" mode={mode} />
      </div>
      {/* <About/> */}
    </>
  );
}

export default App;
