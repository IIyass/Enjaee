import React, { useContext } from 'react'
import * as Style from './style'
import { firebaseAuth } from '../../Provider/authProvider'
import AuthInput from '../UI/AuthInput'
import { FooterButton } from '../UI/FooterButton'
import { Link } from 'react-router-dom'
import Logo from '../../Illustration/hichatylogo.svg'
const OTP = () => {

    const { otpCode, setOtpCode, handleOTPcode, otpError, setOtpError } = useContext(firebaseAuth);


    const handleSubmit = async (e) => {
        e.preventDefault();
        await handleOTPcode(otpCode.mobile);

    }
    const handleChange = e => {
        const { name, value } = e.target;
        setOtpError('')
        setOtpCode(prev => ({ ...prev, [name]: value }))
    }

    return (
        <Style.AuthWrapper>
            <Style.LeftContainer>
                <img src={Logo} />
            </Style.LeftContainer>
            <Style.Formcontainer>
                <div id="container">
                    <div id="header">
                        <h1>OTP</h1>
                        <span>Enter otp as you received on your mobile number.</span>
                    </div>
                    <form onSubmit={handleSubmit}>
                        <AuthInput icon="mobile" placeholder="Code" onChange={handleChange} name="mobile" value={otpCode.mobile} />
                        <AuthInput icon="lock" placeholder="Password" onChange={handleChange} name="password" value={otpCode.password} />
                        <FooterButton>Submit</FooterButton>
                        {otpError ? <p style={{ textAlign: 'center', color: 'red' }}>{otpError}</p> : null}
                        <Link to="/signup">Resend!</Link>
                    </form>
                </div>
            </Style.Formcontainer>
        </Style.AuthWrapper>
    )
}

export default OTP;