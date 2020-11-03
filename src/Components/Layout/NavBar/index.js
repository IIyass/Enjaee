import React from 'react'
import * as Style from './styles'
import Logo from '../../../Illustration/Enjoee-logo.svg'
import Alert from '../../../Illustration/Alert.svg';
import Contact from '../../../Illustration/Contact.svg'
import Group from '../../../Illustration/Group.svg'
import History from '../../../Illustration/History.svg'
import Temporary from '../../../Illustration/Temporary.svg'
import Profil from '../../../Illustration/profil.svg'
import { Container } from '../../Common/Layout'
const Header = () => {

    return (
        <Style.Wrapper as={Container}>
            <Style.Logo>
                <img src={Logo} />
            </Style.Logo>
            <Style.NavBar>
                <li><img src={Alert} /> <span>Alerts</span></li>
                <li><img src={Contact} /> <span>Alerts</span ></li>
                <li><img src={Group} /> <span>Alerts</span></li>
                <li><img src={History} /> <span>Alerts</span></li>
                <li><img src={Temporary} /> <span>Alerts</span></li>
                <li><img src={Profil} /></li>
            </Style.NavBar>
        </Style.Wrapper>
    );
}

export default Header;