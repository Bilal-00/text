//import logo from './logo.svg';
import './App.css';
import Navbar from './compnents/Navbar';
import TextForm from './compnents/TextForm';
//import About from './compnents/About';
import React, {useState} from 'react'
import Alert from './compnents/Alert';
//import {
  //BrowserRouter as Router,
  //Switch,
  //Route,
  //Link
//} from "react-router-dom";





function App() {
  const[mode,setMode]=useState("light")
  const[alert,setAlert]=useState(null)


  const showAlert=(messege,type)=>{
      setAlert({
        msg:messege,
        type:type
      })
      setTimeout(()=>{
        setAlert(null);
      },2000)
  }

  const togglemode=()=>{
    if (mode==='light') {
      setMode('dark')
      document.body.style.backgroundColor='#042743'
      showAlert("Dark mode has been enble","success")
    }
    else{
      setMode('light')
      document.body.style.backgroundColor='white'
      showAlert("Light mode has been enble","success")
    }
  }
  return (
   
<>  
{/*<Router>*/}
<Navbar title="TextUtils" mode={mode} togglemode={togglemode}/>
<Alert Alert={alert}/>
     <div className='container my-3'>
     {/*<Switch>*/}
          {/*<Route exact path="/about">*/}
           {/* <About />*/}
         {/* </Route>*/}
          {/*<Route exact path="/">*/}
           <TextForm showAlert={showAlert} heading="Enter the text to analyze below" mode={mode} />
          {/*</Route>*/}
     {/*</Switch>*/}
    
     
     
     </div> 
     {/*</Router>*/}
   </>
  );
}

export default App;
