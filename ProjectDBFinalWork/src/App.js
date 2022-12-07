import logo from './logo.svg';
import Login from "./components/Login"
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import './App.css';
import {useGlobalContext} from './context';
import Abc from './components/Abc';
import Box from './components/Box';
import NavBarBox from './components/NavBarBox';
import Home2 from './components/Home2';
import NavBarClass from './components/NavBarClass';
import ClassStructure from './components/ClassStructure';
import ClassWork from './components/ClassWork';
import  People  from './components/People';
import Assignment from './components/Assignment';
import Signup from './components/Signup';
import  Stream from './components/Stream' 
function App() {
  const{Session,loginstate}=useGlobalContext();
  

  
  return (

    
    <>

    
         { <Router>
        <Routes>
          <Route exact path="/" element={<Login/>}/>
          <Route exact path="/signup" element={<Signup/>}/>
          <Route exact path="/Home" element={<Home2/>}/>
          
          <Route exact path="/class/:id" element={<ClassStructure/>}/> 
           
          <Route  path="/class/:id/people" element={<People/>}/>
            <Route  path="/class/:id/classwork" element={<ClassWork/>}/>
          <Route  path="/class/:id/classwork/:id" element={<Assignment/>}/>
        </Routes>
      </Router>    }   
      { 
      
        
      }
      
      
      
    </>
  );
}

export default App;
