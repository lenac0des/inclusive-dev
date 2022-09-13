import styled, { keyframes } from "styled-components"
import homeImage_background from "../../../assets/homeImage_background.png"

const fromBelow = keyframes`
0%
  {
    transform:translateY(100vh)
  }
100%
{
  transform:translateY(0px);
  opacity:1;
}
`

const fromAbove = keyframes`
0%
  {
    transform:translateY(-100vh);  
  }
100%
{
  
  transform:translateY(0px);
  opacity:1;
}
`

const DisplayHomeImages = styled.div`
  height: calc(100vh + 230px);
  display: flex;
  flex-direction: column;
  justify-content: center;
  background-image: url(${homeImage_background});
  background-position: 50% 50%;
  background-repeat: no-repeat;
  background-size: cover;
  /* border: 5px black solid; */
  position: relative;

  img {
    margin-top: auto;
    margin-bottom: 5%;
    max-width: 100%;
    max-height: 100%;
    object-fit: cover;
    /* border: 4px crimson solid; */
    opacity: 0;
  }

  .MoveImage {
    animation: 1s ${fromBelow} ease-out forwards;
  }

  .MoveTextAndButton {
    animation: 1s ${fromAbove} ease-out forwards;
    z-index: 99;
  }

  div {
    position: absolute;
    top: 5%;
    left: 0;
    right: 0;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    opacity: 0;

    h1 {
      font-size: 16rem;
    }

    button {
      display: flex;
      justify-content: center;
      align-items: center;
      
      height: 48px;
      
      padding: 26px 0px;
      
      background: #000000;
      border: 1px solid #000000;
      border-radius: 8px;
      
      color: #ffffff;
      
      font-weight: 700;
      
      cursor: pointer;
      
    }

    button > a {
      all: unset;
      height: 48px;
      display: flex;
      align-items: center;
      justify-content: center;
      padding: 0px 16px;
      
    }
  }
`

export default DisplayHomeImages
