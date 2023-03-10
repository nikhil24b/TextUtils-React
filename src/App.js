import { useState } from 'react';
import './App.css';
import About from './components/About';
import Alert from './components/Alert';
import Navbar from './components/Navbar';
import Textform from './components/Textform';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom'

function App() {
  const [mode, setMode] = useState('light');
  const [alert, setAlert] = useState(null);

  const showAlert= (message,type) => {
    setAlert({
      msg: message,
      type:type
    })
    setTimeout(() => {
      setAlert(null);      
    }, 1000);
  }

  const toggleMode=()=>{
    if (mode === 'light'){
      setMode('dark');
      document.body.style.backgroundColor = '#14162f';
      showAlert(" Dark Mode has been Enabled", "success")
      document.title = "TextUtils - Home-Dark"
    }
    else {
      setMode('light');
      document.body.style.backgroundColor = 'white';
      showAlert(" Light Mode has been Enabled", "warning")
      document.title = "TextUtils - Home"
    }
  }

  return (
    <>            
      <Router>
      <Navbar title = "TextUtils" aboutText = "About TextUtils" mode= {mode} toggleMode= {toggleMode} />
      <Alert alert= {alert}/>
      <div className="container my-3">
      <Routes>
        <Route path="about/*" element={<About/>} />
        <Route path="/" element={<Textform showAlert={showAlert} heading = "Enter the text below to analyse"mode= {mode}/> } />
      </Routes>
      </div>
      </Router>
      {/* <About/> */}
    </>
  );
}

export default App;
