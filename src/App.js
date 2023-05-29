import './App.css';
import {useState} from 'react';
import Navbar from './components/Navbar';
import Form from './components/Form';
// import About from './components/About';
import Alert from './components/Alert';
// import {
//   BrowserRouter as Router,
//   Routes,
//   Route,
// } from "react-router-dom";

function App() {
  const [mode, setMode] = useState('light'); // whether dark mode is enabled or not
  const [alert, setAlert] = useState(null);

  const showAlert = (message, type) => {
      setAlert({
        msg: message,
        type: type
      })
      setTimeout(() => {
        setAlert(null);
      }, 3000)
  }
  const toggleMode = () => {
    if(mode === 'dark'){
      setMode('light');
      document.body.style.backgroundColor = 'white';
      showAlert("Light mode has been enabled", "success")
    }
    else{
      setMode('dark');
      document.body.style.backgroundColor = '#042743';
      showAlert("Dark mode has been enabled", "success")

    }
  }
  return (
    <>
    {/* <Router> */}
        <Navbar title="TextUtils" aboutText="About" mode={mode} toggleMode={toggleMode}/>
        <Alert alert={alert} />
        <div className="container my-3">
          {/* <Routes>   
            <Route exact path="/about" element={<About />} />
            <Route exact path="/" element={<Form heading="Enter the text to analyze below" showAlert={showAlert} mode={mode}/>} />
          </Routes> */}
          <Form heading="Enter the text to analyze below" showAlert={showAlert} mode={mode}/>
        </div>
      {/* </Router> */}
    </>
  );
}

export default App;
