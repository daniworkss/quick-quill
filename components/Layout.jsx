import React from "react"
import ToggleMenu from "./toggleMenu"
import Header2 from "./header-2"
import Footer from "./footer"
export default function Layout({children}){
  return (
   <div className="">
    <div className="mb-2">
    <Header2/>
    </div>
    <ToggleMenu/>
    <div className=" mb-6">{children}</div>
    <Footer/>
   </div>
  )
};
