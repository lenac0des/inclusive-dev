import React from 'react'
import { Link } from 'react-react-dom'
import { FooterLogo, Icons, ResourceLinks, FooterStyled, TM, ForYouLinks, OrganizationLinks, IconText } from '.styles/Footer'

const Footer = () => {
    return (
    <FooterStyled>
        <FooterLogo>
            <Link to="/">IDD Life</Link>
        </FooterLogo>

        <ResourceLinks>
            <h4>Resources</h4>
            <li>
            <Link to="/work-in-progress">System Navigation Tool</Link>
            </li>

            <li>
            <Link to="/work-in-progress">Online Resource Guide</Link>
            </li>

            <li>
            <Link to="/work-in-progress">Blog</Link>
            </li>
        </ResourceLinks>

        <ForYouLinks>
            <h4>For You</h4>
            <li><Link to="/work-in-progress">Account</Link>
            </li>

            <li>
            <Link to="/work-in-progress">Newsletter</Link>
            </li>

            <li>
            <Link to="/work-in-progress">FAQ</Link>
            </li>
        </ForYouLinks>

        <OrganizationLinks>
            <h4>Organization</h4>

            <li><Link to="/work-in-progress">About Us</Link>
            </li>

            <li><Link to="/work-in-progress">Contact Us</Link></li>
        </OrganizationLinks>

        <Icons>
            <li>Twitter</li>
            <li>Instagram</li>
            <li>Facebook</li>
            <li>TikTok</li>

        </Icons>
        
        <IconText> Connect With Us!</IconText>

        <TM>© 2022 The Inclusive Group</TM>


    </FooterStyled>
    
 
    
    
    
    
    
    )
}

export default Footer