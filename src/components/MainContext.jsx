"use client"
import { useState } from 'react'
import {createContext} from "react"
export let SidebarContext = createContext()
const MainContext = ({children}) => {
    let [menu, setMenu] = useState(false)

  return (
    <SidebarContext value={{menu,setMenu}}>
        {children}
    </SidebarContext>
  )
}

export default MainContext