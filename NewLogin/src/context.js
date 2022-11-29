import React, { useState, useContext, useEffect } from 'react'

import data from './components/data' 

const AppContext=React.createContext()
const InitialSession={
  name:'',
  password:''
}

const AppProvider=({children})=>{

    const [Session,SetSession]=useState(InitialSession)
    const [navbarb,setnavbarb]=useState(false)
     

    return <AppContext.Provider value={{Session,SetSession,navbarb,setnavbarb}}>{children}</AppContext.Provider>
}

export const useGlobalContext=()=>{
    return useContext(AppContext)
}

export{AppContext,AppProvider}