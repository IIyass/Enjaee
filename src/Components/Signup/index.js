import React from 'react'
import * as Style from './style'
import { Container } from '../Common/Body'
import logo from '../../Illustration/Poweredbydevshubha.svg'
import aboutUslogo2 from '../../Illustration/Enjoeelogo.svg'
import AuthInput from '../UI/AuthInput'
import { FooterButton } from '../UI/FooterButton'
import { Link } from 'react-router-dom'
import Union from '../../Illustration/Union.svg'
import Contact from '../../Illustration/Icon/Regular/Contact.svg'
import AuthButton from '../UI/AuthButton'
const Signup = () => {
    return (
        <Style.SignupWrapper as={Container}>
            <Style.LeftContainer>
                <img src={aboutUslogo2} />
                <AuthButton color="#53A8CB" title="Personal" borderColor="#53A8CB"> <img src={Contact} /> </AuthButton>
                <AuthButton color="#fff" title="Corporate" borderColor="#47525D"> <img src={Union} /></AuthButton>
                <img src={logo} />
            </Style.LeftContainer>
            <Style.Formcontainer>
                <h1>REGISTER</h1>
                <form>
                    <AuthInput icon="contact" placeholder="Full name" />
                    <AuthInput icon="message" placeholder="Email address" />
                    <AuthInput icon="lock" placeholder="Password" />
                    <AuthInput icon="gender" placeholder="Gender" />
                    <AuthInput icon="mobile" placeholder="Mobile Number" />
                    <FooterButton>Register</FooterButton>
                    <Link to="/login">Login here!</Link>
                </form>
            </Style.Formcontainer>

        </Style.SignupWrapper>
    )
}

export default Signup;