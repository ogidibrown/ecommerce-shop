import { useState, createContext } from "react";
//create context
export const SidebarContext= createContext();


const SidebarProvider = ({children}) => {
//slidebar state
const [isopen, setIsopen]=useState(false);

const handleClose=()=>{
    setIsopen(false)
}
  return (
    <SidebarContext.Provider value={{isopen, setIsopen, handleClose}}>
        {children}
    </SidebarContext.Provider>
  )
}

export default SidebarProvider