import React from 'react'
import * as Style from './style'
import { Container } from '../Common/Body'
import logo from '../../Illustration/Poweredbydevshubha.svg'
import aboutUslogo2 from '../../Illustration/Enjoeelogo.svg'
import { FooterButton } from '../UI/FooterButton'
import share from '../../Illustration/handsicon.svg'
import Union from '../../Illustration/Union.svg'
import Contact from '../../Illustration/Icon/Regular/Contact.svg'
import AuthButton from '../UI/AuthButton'
const OTP = () => {
    return (
        <Style.AuthWrapper as={Container}>
            <Style.LeftContainer>
                <img src={aboutUslogo2} />
                <AuthButton color="#53A8CB" title="Personal" borderColor="#53A8CB"> <img src={Contact} /> </AuthButton>
                <AuthButton color="#fff" title="Corporate" borderColor="#47525D"> <img src={Union} /></AuthButton>
                <img src={logo} />
            </Style.LeftContainer>
            <Style.Formcontainer>
                <div>
                    <img src={share} />
                    <span>
                        We request you to all Enjoee users, share with your
                    friends and familyand make successfull of Enjoee <br />
                    </span>
                    <span>  Welcome to Enjoee Family</span>

                    <Style.ButtonContainer>
                        <FooterButton>Submit</FooterButton>
                        <FooterButton id="cancel">Cancel</FooterButton>
                    </Style.ButtonContainer>
                </div>
            </Style.Formcontainer>

        </Style.AuthWrapper>
    )
}

export default OTP;