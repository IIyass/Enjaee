import React, { useContext, useEffect } from 'react'
import 'react-phone-number-input/style.css'
import * as Style from './style'
import PhoneInput from 'react-phone-number-input'
import { Container } from '../Common/Layout'
import Logo from '../../Illustration/hichatylogo.svg'
import aboutUslogo2 from '../../Illustration/Enjoeelogo.svg'
import AuthInput from '../UI/AuthInput'
import { FooterButton } from '../UI/FooterButton'
import { Link } from 'react-router-dom'
import Union from '../../Illustration/Union.svg'
import Contact from '../../Illustration/Icon/Regular/Contact.svg'
import { firebaseAuth } from '../../Provider/authProvider'
import AuthButton from '../UI/AuthButton'
import firebase from 'firebase'
import OTP from '../OTP'
import Share from '../Share'
const Login = () => {

    const { handleLogin, loginError, loginInput, setloginInput, authStep, setLoginError, setValuePhone, valuePhone } = useContext(firebaseAuth);
    const appVerifier = window.recaptchaVerifier;
    const handleSubmit = async (e) => {
        e.preventDefault();
        await handleLogin(appVerifier);
    }
    const handleChange = e => {
        const { name, value } = e.target
        setLoginError('');
        setloginInput(prev => ({ ...prev, [name]: value }))
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
                return <Style.AuthWrapper >
                    <Style.LeftContainer >
                        <img src={Logo} />
                    </Style.LeftContainer >
                    <Style.Formcontainer >
                        <h1>LOGIN</h1>
                        <form onSubmit={handleSubmit}>
                            <PhoneInput
                                id="phone"
                                required
                                name="mobile"
                                placeholder="Mobile Number"
                                value={valuePhone}
                                onChange={setValuePhone} />
                            <AuthInput icon="lock" type="password" required placeholder="Password" onChange={handleChange} name="password" value={loginInput.password} />
                            <div id="recaptcha-container" />
                            <FooterButton>Login</FooterButton>
                            <div>
                                <Link to="/signup">Register here!</Link>
                                <Link id="forgot" to="/forget">Forgot password</Link>
                            </div>
                            {loginError ? <p style={{ textAlign: 'center', color: 'red' }}>{loginError}</p> : null}
                        </form>
                    </Style.Formcontainer>

                </Style.AuthWrapper >;

            case 2:
                return <OTP />;
            case 3:
                return <Share />
        }
    }


    return renderAuth();
}

export default Login;