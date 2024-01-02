import React from "react"
import Header from "./header"
import ToggleMenu from "./toggleMenu"
export default function Layout({children}){
  return (
   <div className="">
    <Header/>
    <ToggleMenu/>
    <div>{children}</div>
   </div>
  )
};
