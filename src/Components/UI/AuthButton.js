
import React from 'react'
import * as Style from './style'

const ButtonAuth = ({ color, borderColor, title, children, ...props }) => {

    return (
        <Style.AuthButtonContainer titleColor={borderColor}>
            <Style.AuthButton
                color={color}
                borderColor={borderColor}
            >
                {children}
            </Style.AuthButton>
            <span>{title}</span>
        </Style.AuthButtonContainer>
    )
}

export default ButtonAuth;