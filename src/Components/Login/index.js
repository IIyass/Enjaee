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
const Login = () => {
    return (
        <Style.AuthWrapper as={Container}>
            <Style.LeftContainer>
                <img src={aboutUslogo2} />
                <AuthButton color="#53A8CB" title="Personal" borderColor="#53A8CB"> <img src={Contact} /> </AuthButton>
                <AuthButton color="#fff" title="Corporate" borderColor="#47525D"> <img src={Union} /></AuthButton>
                <img src={logo} />
            </Style.LeftContainer>
            <Style.Formcontainer>
                <h1>LOGIN</h1>
                <form>
                    <AuthInput icon="mobile" placeholder="Mobile Number" />
                    <AuthInput icon="lock" placeholder="Password" />
                    <FooterButton>Login</FooterButton>
                    <div>
                        <Link to="/signup">Register here!</Link>
                        <Link id="forgot" to="/forget">Forgot password</Link>
                    </div>

                </form>
            </Style.Formcontainer>

        </Style.AuthWrapper>
    )
}

export default Login;