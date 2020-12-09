import React from 'react'
import * as Style from './styles'
import Logo from '../../../Illustration/hichatylogo.svg'
import { Link } from 'react-router-dom'

const Header = () => {
    return (
        <Style.Wrapper>
            <Style.Logo>
                <Link to="/"><img src={Logo} /></Link>
            </Style.Logo>
            <ul>
                <Link to="/login"><li > Login</li></Link>
                <Link to="/signup"><li >Register</li></Link>
            </ul>
        </Style.Wrapper >
    );
}

export default Header;