import React, { useContext, useEffect } from 'react'
import * as Style from './style'
import { Container } from '../Common/Layout'
import logo from '../../Illustration/Poweredbydevshubha.svg'
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

    const { handleLogin, loginError, loginInput, setloginInput, authStep, setLoginError } = useContext(firebaseAuth);
    const appVerifier = window.recaptchaVerifier;
    const handleSubmit = async (e) => {
        e.preventDefault();
        await handleLogin(loginInput.mobile, appVerifier);
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
                return <Style.AuthWrapper as={Container}>
                    <Style.LeftContainer>
                        <img src={aboutUslogo2} />
                        <AuthButton color="#53A8CB" title="Personal" borderColor="#53A8CB"> <img src={Contact} /> </AuthButton>
                        <AuthButton color="#fff" title="Corporate" borderColor="#47525D"> <img src={Union} /></AuthButton>
                        <img src={logo} />
                    </Style.LeftContainer>
                    <Style.Formcontainer>
                        <h1>LOGIN</h1>
                        <form onSubmit={handleSubmit}>
                            <AuthInput icon="mobile" type="text" required placeholder="Mobile Number" onChange={handleChange} name="mobile" value={loginInput.mobile} />
                            <AuthInput icon="lock" type="password" required placeholder="Password" onChange={handleChange} name="password" value={loginInput.password} />
                            <div id="recaptcha-container" />
                            <FooterButton>Login</FooterButton>
                            <div>
                                <Link to="/signup">Register here!</Link>
                                <Link id="forgot" to="/forget">Forgot password</Link>
                            </div>

                        </form>
                    </Style.Formcontainer>
                    {loginError ? <p>{loginError}</p> : null}
                </Style.AuthWrapper>;

            case 2:
                return <OTP />;
            case 3:
                return <Share />
        }
    }


    return renderAuth();
}

export default Login;