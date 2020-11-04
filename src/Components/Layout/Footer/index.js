import React from 'react'
import * as Style from './style'
import { Container } from '../../Common/Layout'
import FooterLogo from '../../../Illustration/Poweredbydevshubha.svg'
import EnjoeeMsg from '../../../Illustration/Enjoee-msg.svg'

const Footer = () => {
    return (
        <Style.Wrapper >
            <Style.Container as={Container}>
                <img src={FooterLogo} />
                <Style.Details>
                    <ul>
                        <li>About Us</li>
                        <li>Support</li>
                        <li>Api</li>
                        <li>Privacy</li>
                        <li>Terms</li>
                    </ul>
                    <img src={EnjoeeMsg} />
                </Style.Details>

            </Style.Container>
        </Style.Wrapper>

    )
}

export default Footer;