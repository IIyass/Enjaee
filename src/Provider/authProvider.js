import React, { useContext, useState } from 'react';
import { authMethods } from '../firebase/authmethodes'

export const firebaseAuth = React.createContext()

const AuthProvider = (props) => {

    const [loginInput, setloginInput] = useState({ mobile: '', password: '' })
    const [signUpInput, setsignUpInput] = useState({ email: '', password: '', mobile: '', name: '', gender: '' })
    const [user, setUser] = useState('');
    const [authStep, setAuthStep] = useState(1);
    const [otpCode, setOtpCode] = useState({ mobile: '', password: '' });
    const [signupError, setSignupError] = useState('')
    const [loginError, setLoginError] = useState('')
    const [token, setToken] = useState(null);
    const [otpError, setOtpError] = useState('')


    const handleSignup = (SignupData, reCapa) => {
        authMethods.saveUser(SignupData, reCapa, authStep, setAuthStep, setSignupError)
    }

    const handleLogin = (phoneNumber, reCapa) => {
        authMethods.login(phoneNumber, loginInput.password, reCapa, authStep, setAuthStep, setLoginError)
    }
    const handleOTPcode = () => {
        authMethods.handleOTPCheck(otpCode.mobile, setUser, setToken, authStep, setAuthStep, otpCode.password, loginInput.password, signUpInput.password, setOtpError);
    }

    return (
        <firebaseAuth.Provider
            value={{
                otpError, setOtpError,
                loginError,
                signupError,
                authStep,
                signUpInput,
                setsignUpInput,
                handleSignup,
                loginInput,
                setloginInput,
                handleLogin,
                otpCode,
                setOtpCode,
                handleOTPcode,
                setLoginError,
                setSignupError

            }}>
            {props.children}

        </firebaseAuth.Provider>
    );
};


export default AuthProvider;
