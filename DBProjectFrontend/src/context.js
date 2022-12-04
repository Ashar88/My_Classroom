import React, { useState, useContext, useEffect } from 'react'

import data from './components/data' 

const AppContext=React.createContext()


const AppProvider=({children})=>{

    
    const [navbarb,setnavbarb]=useState(false)
     
const InitialSession={
  name:'',
  password:'',
}

const [clickpeople,setclickpeople]=useState(false);
const [classid,setclassid]=useState('');
const [Session,SetSession]=useState(InitialSession)
const[loginstate,setloginstate]=useState(false);

const [issidebaropen,setissidebaropen]=useState(false);
const opensidebar=()=>{
    setissidebaropen(true);
}
const [isclasswork,setclasswork]=useState(false);
const closedsidebar=()=>{
    setissidebaropen(false);
}
    return <AppContext.Provider value={{Session,SetSession,navbarb,setnavbarb,issidebaropen,opensidebar,closedsidebar,setissidebaropen,classid,setclassid,setclickpeople,clickpeople,isclasswork,setclasswork,loginstate,setloginstate}}>{children}</AppContext.Provider>
}

export const useGlobalContext=()=>{
    return useContext(AppContext)
}

export{AppContext,AppProvider}