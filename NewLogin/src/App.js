import logo from './logo.svg';
import Login from "./components/Login"
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import './App.css';
import {useGlobalContext} from './context'
import Home from './components/Home';
import Abc from './components/Abc';
import Box from './components/Box';
import NavBarBox from './components/NavBarBox';
import Home2 from './components/Home2';
function App() {
  const{Session}=useGlobalContext();
  

  
  return (

    
    <>
      { <Router>
        <Routes>
          <Route exact path="/" element={<Login/>}/>
          <Route exact path="/Home" element={<Home2/>}/>
                  <Route exact path="/class/:id" element={<Abc/>}/>  
            
          
        </Routes>
      </Router> }
      
      
      
      
    </>
  );
}

export default App;
