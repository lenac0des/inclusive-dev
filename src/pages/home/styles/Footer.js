 import styled from 'styled-components'

export const FooterStyled = styled.div`
   padding: 80px 60px;
   justify-content: center;
   min-height: 30vh;
   background: #FFFFFF;


` 

export const Row = styled.div`
 display: grid;
 grid-template-columns: 1fr 1fr 1fr;
 grid-gap: 60px;
 justify-content: center;


 @media (max-width: 1000px) {
    grid-template-columns: repeat()(auto-fill, minmax()(200px,1fr));
    grid-gapL 20px;
 }
`



export const Column = styled.div`
 text-align: center;
 display: flex;
 flex-direction: column;
 max-width: 200px;
 margin: 0 auto;
 
`

export const Links = styled.a`
 color: #000000;
 margin-bottom: 20px;
 font-size: 18px;
 text-decoration: none;
 max-width: 200px;
 font-size: 16px;
 margin-bottom: 3rem;

    &:hover {
        color: hsla(283, 38%, 37%, 1);
        transition: 200ms ease-in;
        text-decoration: none;
    }
`


export const Title = styled.h4`
color: #000000;
max-width: 200px;
text-align: center;
font-size 20px;
margin-top: 8rem;


`


export const IconText = styled.h4`
    text-align: center;
    


`


export const FooterLogo = styled.h4`
    font-size: 34px;
    line-height: 48px;
    letter-spacing: 0.01em;
    margin-left: -5rem;
    margin-top: -5rem;



`

export const Icons = styled.i`
    font-size: 18px;
    color: inherit;
    display: inline-block;
    text-align: center;
    margin: 0 8px;
    justify-content: space-between;


`