import React from "react"
import HeroImage from "./HeroImage.js"
import NavBar from "./NavBar.js"
import "./Provisional.css"


const HomeIndex = () => {
  return (
    <>
      <NavBar/>
      <HeroImage/>
      
      <h2 className="MainContentProvisional" id="MainContent">Main Content</h2>
      <div className="FooterProvisional">
        <p>Footer</p>
      </div>
      
      
    </>
  )
}

export default HomeIndex
