import React from 'react'
import * as Style from './styles'
import Logo from '../../../Illustration/Enjoee-logo.svg'
import Alert from '../../../Illustration/Alert.svg';
import Contact from '../../../Illustration/Contact.svg'
import Group from '../../../Illustration/Group.svg'
import History from '../../../Illustration/History.svg'
import Temporary from '../../../Illustration/Temporary.svg'
import Profil from '../../../Illustration/profil.svg'
const Header = () => {

    return (
        <Style.Wrapper>
            <Style.Logo>
                <img src={Logo} />
            </Style.Logo>
            <Style.NavBar>
                <li><img src={Alert} /> <span>Alerts</span></li>
                <li><img src={Contact} /> <span>Contacts</span ></li>
                <li><img src={Group} /> <span>History</span></li>
                <li><img src={History} /> <span>Team Chat</span></li>
                <li><img src={Temporary} /> <span>Group</span></li>
                <li><img src={Profil} /></li>
            </Style.NavBar>
        </Style.Wrapper>
    );
}

export default Header;