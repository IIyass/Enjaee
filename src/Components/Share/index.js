import React from 'react'
import * as Style from './style'
import logo from '../../Illustration/Poweredbydevshubha.svg'
import aboutUslogo2 from '../../Illustration/Enjoeelogo.svg'
import { FooterButton } from '../UI/FooterButton'
import share from '../../Illustration/handsicon.svg'
import Union from '../../Illustration/Union.svg'
import Contact from '../../Illustration/Icon/Regular/Contact.svg'
import AuthButton from '../UI/AuthButton'
import { Link } from 'react-router-dom'
const Share = () => {
    return (
        <Style.AuthWrapper >
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
                        <Link id="cancel" to="/contact">Cancel</Link>
                    </Style.ButtonContainer>
                </div>
            </Style.Formcontainer>

        </Style.AuthWrapper>
    )
}

export default Share;