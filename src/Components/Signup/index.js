import React, { useContext, useEffect } from 'react'
import firebase from 'firebase'
import 'react-phone-number-input/style.css'
import * as Style from './style'
import PhoneInput from 'react-phone-number-input'
import { Container } from '../Common/Layout'
import { firebaseAuth } from '../../Provider/authProvider'
import logo from '../../Illustration/Poweredbydevshubha.svg'
import aboutUslogo2 from '../../Illustration/Enjoeelogo.svg'
import AuthInput from '../UI/AuthInput'
import { FooterButton } from '../UI/FooterButton'
import { Link } from 'react-router-dom'
import Union from '../../Illustration/Union.svg'
import Contact from '../../Illustration/Icon/Regular/Contact.svg'
import AuthButton from '../UI/AuthButton'
import OTP from '../OTP'
import Share from '../Share'
const Signup = () => {
    const { handleSignup, authStep, setSignupError, signUpInput, setsignUpInput, signupError, setValuePhone, valuePhone } = useContext(firebaseAuth);
    const appVerifier = window.recaptchaVerifier;
    const handleSubmit = async (e) => {
        e.preventDefault();
        await handleSignup(signUpInput, appVerifier);

    }


    const handleChange = e => {
        const { name, value } = e.target;
        setSignupError('')
        setsignUpInput(prev => ({ ...prev, [name]: value }))
    }

    useEffect(() => {
        window.recaptchaVerifier = new firebase.auth.RecaptchaVerifier('recaptcha-container', {
            'size': 'normal',
            'callback': function (response) {
                // reCAPTCHA solved, allow signInWithPhoneNumber.
                // ...
            }
        });
    }, []);
    const renderAuth = () => {
        switch (authStep) {
            case 1:
                return <Style.SignupWrapper>
                    <Style.LeftContainer>
                        <img src={aboutUslogo2} />
                        <AuthButton color="#53A8CB" title="Personal" borderColor="#53A8CB"> <img src={Contact} /> </AuthButton>
                        <AuthButton color="#fff" title="Corporate" borderColor="#47525D"> <img src={Union} /></AuthButton>
                        <img src={logo} />
                    </Style.LeftContainer>
                    <Style.Formcontainer>
                        <h1>REGISTER</h1>
                        <form onSubmit={handleSubmit}>
                            <AuthInput required type="text" onChange={handleChange} name="name" value={signUpInput.name} icon="contact" placeholder="Full name" />
                            <AuthInput required type="text" onChange={handleChange} name="email" value={signUpInput.email} icon="message" placeholder="Email address" />
                            <AuthInput required type="password" pattern="(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}" title="Must contain at least one number and one uppercase and lowercase letter, and at least 8 or more characters" onChange={handleChange} name="password" value={signUpInput.password} icon="lock" placeholder="Password" />
                            <AuthInput required type="text" onChange={handleChange} name="gender" value={signUpInput.gender} icon="gender" placeholder="Gender" />
                            <PhoneInput
                                id="phone"
                                name="mobile"
                                placeholder="Mobile Number"
                                value={valuePhone}
                                onChange={setValuePhone} />
                            <div id="recaptcha-container" />
                            <FooterButton onSubmi={handleSubmit}>Register</FooterButton>
                            <Link to="/login">Login here!</Link>
                        </form>
                        {signupError ? <p style={{ textAlign: 'center', color: 'red' }}>{signupError}</p> : null}
                    </Style.Formcontainer>

                </Style.SignupWrapper>

            case 2:
                return <OTP />;
            case 3:
                return <Share />
        }
    }


    return renderAuth();


}

export default Signup;