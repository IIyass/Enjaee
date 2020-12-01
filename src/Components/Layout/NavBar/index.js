import React, { useState, useEffect } from 'react'
import * as Style from './styles'
import { Link, useLocation } from 'react-router-dom'
import Logo from '../../../Illustration/hichatylogo.svg'
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

    const location = useLocation();


    const renderStyleNav = () => {
        switch (location.pathname) {
            case '/alert':
                return setIconSelected(0);
            case '/contact':
                return setIconSelected(1);
            case '/history':
                return setIconSelected(2);
            case '/chat':
                return setIconSelected(3);
            case '/groups':
                return setIconSelected(4);
        }
    }

    console.log(location.pathname)


    useEffect(() => {
        renderStyleNav();
    }, [location.pathname])


    return (
        <Style.Wrapper>
            <Style.Logo>
                <Link to="/"><img src={Logo} /></Link>
            </Style.Logo>
            <Style.NavBar>
                <Link to="alert">  <li ><img src={iconSelected === 0 ? ActiveAlert : Alert} /> <span>Alerts</span></li></Link>
                <Link to="/contact"><li ><img src={iconSelected === 1 ? ActiveContact : Contact} /> <span>Contacts</span ></li></Link>
                <Link to="/history"><li ><img src={iconSelected === 2 ? ActiveHistory : History} /> <span>History</span></li></Link>
                <Link to="/chat"><li ><img src={iconSelected === 3 ? ActiveTemporary : Temporary} /><span>Tem. Chat</span></li ></Link>
                <Link to="/groups"><li ><img src={iconSelected === 4 ? ActiveGroup : Group} /> <span>Group</span></li ></Link>
                <li >  <Link to="/profil"> <img src={Profil} /></Link> </li>
            </Style.NavBar >
        </Style.Wrapper >
    );
}

export default Header;