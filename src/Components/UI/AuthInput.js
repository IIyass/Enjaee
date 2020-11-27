import React from 'react'
import * as Style from './style'
import contact from '../../Illustration/contact/contact/regular.svg'
import message from '../../Illustration/Emailoutline.svg'
import lock from '../../Illustration/Icon/Web/Action/Lock.svg'
import mobile from '../../Illustration/Icon/Web/Action/Mobile.svg'
import blackcontact from '../../Illustration/Icon/Regular/Mobile/blackContact.svg'
import gender from '../../Illustration/Icon/Web/Action/Gender.svg'
import Success from '../../Illustration/Success2.svg'
const AuthInput = ({ placeholder, name, icon, type, ...props }) => {
    const IconHandler = () => {
        switch (icon) {
            case 'message':
                return <img src={message} />;
            case 'lock':
                return <img src={lock} />;
            case 'mobile':
                return <img src={mobile} />;
            case 'gender':
                return <img src={gender} />;
            case 'contact':
                return <img src={contact} />;
            case 'blackcontact':
                return <img src={blackcontact} />;
            case 'success':
                return <img src={Success} />
        }
    }
    return (
        <Style.AuthInputContainer>
            <Style.AuthInput
                type={type}
                name={name}
                placeholder={placeholder}
                {...props}
            />
            <span>{IconHandler()}</span>
        </Style.AuthInputContainer>
    )
}

export default AuthInput