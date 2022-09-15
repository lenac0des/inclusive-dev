import React from "react"
import HeroImage from "./HeroImage.js"
import NavBar from "./NavBar.js"
import "./Provisional.css"
// import Footer from './Footer.js'
import Main from './Main'



const HomeIndex = () => {
  return (
    <>
      <NavBar/>
      <HeroImage/>
      
      <Main />
      <div>
        {/* <Footer /> */}
      </div>
      
      
    </>
  )
}

export default HomeIndex
