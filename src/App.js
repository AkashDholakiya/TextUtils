import './App.css';
import Alert from './components/Alert';
import About from './components/About';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import React,{useState} from 'react'
import{
  BrowserRouter as Router,
  Routes,
  Route
} from  "react-router-dom";

function App() {
  const [mode,setMode] = useState('light');  
  const [alert,setAlert] = useState(null);

  const showAlert = (message,type) => {
      setAlert({
        msg : message,
        type : type
      })
      setTimeout(() => {
          setAlert(null);
      }, 2000);
  }

  const btnChange = () => {
    if(mode === "dark"){
      setMode('light');
      document.body.style.backgroundColor = 'white';
      showAlert('Light Mode has been enabled',"success");
      document.title = "TextUtils - Light Mode";
    }else{
      setMode('dark');
      document.body.style.backgroundColor = 'silver';
      showAlert('Dark Mode has been enabled',"success");
      document.title = "TextUtils - Dark Mode";
    }
  }
  return (
    <>
    <Router>
    <Navbar title="TextUtils" aboutText ="About TextUtils" mode={mode} btnChange={btnChange} />
    <Alert alert={alert}/>
    <div className="container my-3">
      <Routes>
        <Route path='/about' element={<About  mode={mode}/>}/>
        <Route path='/' element={<TextForm heading = "Enter the heading here" mode={mode} showAlert={showAlert}/>} />
        {/* <Route path='/' element={<TextForm heading = "Enter the heading here" mode={mode} showAlert={showAlert}/>}> */}
      </Routes>
    </div>
    </Router>
    </>
  );
}

export default App;
