import React, { useState, useEffect } from "react"
import {HashLink} from "react-router-hash-link"
import DisplayHomeImages from "./styles/DisplayHomeImages.js"
import HeroImageWrapper from "./styles/HeroImageWrapper.js"
import homeImage_communityPeople from "../../assets/homeImage_communityPeople.png"
import { Link } from "react-router-dom"

const HeroImage = () => {
  const [moveImage, setMoveImage] = useState(false)
  const [moveTextAndButton, setMoveTextAndButton] = useState(false)

  useEffect(() => {
    const timeImage = setTimeout(() => {
      setMoveImage(true)
    }, 500)
    return () => {
      return clearTimeout(timeImage)
    }
  }, [])

  useEffect(() => {
    const timeTextAndButton = setTimeout(() => {
      setMoveTextAndButton(true)
    }, 2000)

    return () => {
      return clearTimeout(timeTextAndButton)
    }
  }, [])

  console.log("moveImage:", moveImage)
  console.log("moveTextAndButton:", moveTextAndButton)

  return (
    <HeroImageWrapper>
      <DisplayHomeImages>
        <div className={moveTextAndButton && "MoveTextAndButton"}>
          <h1>Inclusion for all.</h1>
          <button  > <HashLink to="#MainContent" smooth> FIND OUT MORE</HashLink> </button>
        </div>
        <img
          src={homeImage_communityPeople}
          alt="A group of people greetings with their hands"
          className={moveImage && "MoveImage"}
        />
      </DisplayHomeImages>

      <span><Link to="/work-in-progress">Not from NYC?</Link></span>
    </HeroImageWrapper>
  )
}

export default HeroImage
