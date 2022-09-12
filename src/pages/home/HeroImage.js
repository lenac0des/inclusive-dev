import React from 'react'
import DisplayHomeImages from "./styles/DisplayHomeImages.js"
import HeroImageWrapper from "./styles/HeroImageWrapper.js"


const HeroImage = () => {
  return (
    <HeroImageWrapper>

      <DisplayHomeImages>
        <div>
          <h1>Inclusion for all.</h1>
          <button>FIND OUT MORE</button>
        </div>
        <span>Not from NYC?</span>

      </DisplayHomeImages>

    </HeroImageWrapper>
  )
}

export default HeroImage