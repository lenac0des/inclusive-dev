import styled from "styled-components"
import homeImage_communityPeople from "../../../assets/homeImage_communityPeople.png"
import homeImage_background from "../../../assets/homeImage_background.png"

const DisplayHomeImages = styled.div`
  height: calc(100vh + 533px);
  display: flex;
  align-items: center;
  justify-content: center;
  background-image: url(${homeImage_communityPeople}),
    url(${homeImage_background});
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  position: relative;
  text-align: center;

  div {
    position: absolute;
    top: 15%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    
    h1{
      font-size: 16rem;
      
    }

    button {
      height: 48px;
      display: flex;
      justify-content: center;
      align-items: center;
      padding: 11px 10px;
      background-color: #000000;
      color: #ffffff;
      border: 1px solid #000000;
      border-radius: 8px;
      cursor: pointer;
    }
    
    
  }
  span{
      position: absolute;
      bottom: 7rem;
      right:8rem;
      cursor: pointer;
    }
`

export default DisplayHomeImages
