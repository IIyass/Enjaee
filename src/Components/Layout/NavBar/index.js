import React, { useState } from 'react'
import * as Style from './styles'
import Logo from '../../../Illustration/Enjoee-logo.svg'
import ActiveAlert from '../../../Illustration/Icon/Active/Alert.svg';
import ActiveContact from '../../../Illustration/Icon/Active/Contact.svg'
import ActiveGroup from '../../../Illustration/Icon/Active/Group.svg'
import ActiveHistory from '../../../Illustration/Icon/Active/History.svg'
import ActiveTemporary from '../../../Illustration/Icon/Active/Temporary.svg'
import Alert from '../../../Illustration/Icon/Regular/Alert.svg';
import Contact from '../../../Illustration/Icon/Regular/Contact.svg'
import Group from '../../../Illustration/Icon/Regular/Group.svg'
import History from '../../../Illustration/Icon/Regular/History.svg'
import Temporary from '../../../Illustration/Icon/Regular/Temporary.svg'
import Profil from '../../../Illustration/profil.svg'
const Header = () => {
    const [iconSelected, setIconSelected] = useState(0);
    return (
        <Style.Wrapper>
            <Style.Logo>
                <img src={Logo} />
            </Style.Logo>
            <Style.NavBar>
                <li onClick={() => setIconSelected(0)}><img src={iconSelected === 0 ? ActiveAlert : Alert} /> <span>Alerts</span></li>
                <li onClick={() => setIconSelected(1)}><img src={iconSelected === 1 ? ActiveContact : Contact} /> <span>Contacts</span ></li>
                <li onClick={() => setIconSelected(2)}><img src={iconSelected === 2 ? ActiveHistory : History} /> <span>History</span></li>
                <li onClick={() => setIconSelected(3)}><img src={iconSelected === 3 ? ActiveTemporary : Temporary} /> <span>Team Chat</span></li>
                <li onClick={() => setIconSelected(4)}><img src={iconSelected === 4 ? ActiveGroup : Group} /> <span>Group</span></li>
                <li ><img src={Profil} /></li>
            </Style.NavBar>
        </Style.Wrapper>
    );
}

export default Header;