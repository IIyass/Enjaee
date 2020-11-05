import React from 'react'
import * as Style from './style'
import FooterLogo from '../../../Illustration/Poweredbydevshubha.svg'
import EnjoeeMsg from '../../../Illustration/Enjoee-msg.svg'
import { Container } from '../../Common/Body'
const Footer = () => {
    return (
        <Style.Wrapper >
            <Style.Details>
                <ul>
                    <li>  <img src={FooterLogo} /></li>
                    <li>About Us</li>
                    <li>Support</li>
                    <li>Api</li>
                    <li>Privacy</li>
                    <li>Terms</li>
                </ul>
            </Style.Details>
            <img src={EnjoeeMsg} />
        </Style.Wrapper>


    )
}

export default Footer;