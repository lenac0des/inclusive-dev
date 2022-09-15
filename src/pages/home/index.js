import React from "react"
import HeroImage from "./HeroImage.js"
import NavBar from "./NavBar.js"
import "./Provisional.css"
import Footer from './Footer.js'


const HomeIndex = () => {
  return (
    <>
      <NavBar/>
      <HeroImage/>
      
      <h2 className="MainContentProvisional" id="MainContent">Main Content</h2>
      <div>
        <Footer />
      </div>
      
      
    </>
  )
}

export default HomeIndex
