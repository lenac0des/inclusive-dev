import React from 'react'
import { Link } from 'react-router-dom'
import { FooterLogo, Icons, Title, FooterStyled, Column, IconText, Links, Row } from './styles/Footer'
import { TwitterSvg, FacebookSvg, TiktokSvg, InstagramSvg } from '../../assets/IconIndex.js'

const Footer = () => {
    return (
    <FooterStyled>
        <FooterLogo>
         <h2>Inclusive</h2>
        </FooterLogo>
        <Row>
        <Column>
            <Title>Organization</Title>
            <Links  to="/work-in-progress">About Us</Links>
            <Links  to="/work-in-progress">Contact Us</Links>
        </Column>
        
        <Column>
            <Title>For You</Title>
            <Links  to="/work-in-progress">Account</Links>
            <Links  to="/work-in-progress">Newsletter</Links>
            <Links  to="/work-in-progress">Blog</Links>
        </Column>

        <Column>
            <Title>Resources</Title>
            <Links  to="/work-in-progress">Guide to Services</Links>
            <Links  to="/work-in-progress"> Resource Directory</Links>
            <Links  to="/work-in-progress">FAQ</Links>
        </Column>
        </Row>

        <Icons>
            <TwitterSvg />
            <InstagramSvg />
            <FacebookSvg />
            <TiktokSvg />

        </Icons>

            <IconText> 
                <h4>
                Connect With Us!
                </h4>
            </IconText>
 </FooterStyled>

    )
}

export default Footer

