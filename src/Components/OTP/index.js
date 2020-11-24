import React, { useContext } from 'react'
import * as Style from './style'
import { firebaseAuth } from '../../Provider/authProvider'
import { Container } from '../Common/Layout'
import logo from '../../Illustration/Poweredbydevshubha.svg'
import aboutUslogo2 from '../../Illustration/Enjoeelogo.svg'
import AuthInput from '../UI/AuthInput'
import { FooterButton } from '../UI/FooterButton'
import { Link } from 'react-router-dom'
import Union from '../../Illustration/Union.svg'
import Contact from '../../Illustration/Icon/Regular/Contact.svg'
import AuthButton from '../UI/AuthButton'
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
        <Style.AuthWrapper as={Container}>
            <Style.LeftContainer>
                <img src={aboutUslogo2} />
                <AuthButton color="#53A8CB" title="Personal" borderColor="#53A8CB"> <img src={Contact} /> </AuthButton>
                <AuthButton color="#fff" title="Corporate" borderColor="#47525D"> <img src={Union} /></AuthButton>
                <img src={logo} />
            </Style.LeftContainer>
            <Style.Formcontainer>
                <div id="header">
                    <h1>OTP</h1>
                    <span>Enter otp as you received on your mobile number.</span>
                </div>
                <form onSubmit={handleSubmit}>
                    <AuthInput icon="mobile" placeholder="Mobile Number" onChange={handleChange} name="mobile" value={otpCode.mobile} />
                    <AuthInput icon="lock" placeholder="Password" onChange={handleChange} name="password" value={otpCode.password} />
                    <FooterButton>Submit</FooterButton>
                    {otpError ? <p>{otpError}</p> : null}
                    <Link to="/signup">Resend!</Link>
                </form>
            </Style.Formcontainer>

        </Style.AuthWrapper>
    )
}

export default OTP;