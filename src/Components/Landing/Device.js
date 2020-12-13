import React from 'react'
import DeviceButton from '../UI/DeviceButton'
import * as Style from './styles'
import ApplePhone from '../../Illustration/LandingPage/ApplePhone.svg'
import AndroidPhone from '../../Illustration/LandingPage/AndroidDevice.svg'

const Device = ({ text, type }) => {
    return (
        <Style.DeviceContainer display={type === "IOS" ? false : true}>
            <img src={type === 'IOS' ? ApplePhone : AndroidPhone} />
            <div id="container">
                <p>{text}</p>
                {type === 'IOS' ?
                    <DeviceButton type="IOS"><div id="buttonContent"><span>Available on the</span><p className="ButtonMark">App Store</p></div></DeviceButton >
                    :
                    <DeviceButton type="Android"><div id="buttonContent"><span>Get it On</span><p className="ButtonMark">Google play</p></div></DeviceButton>
                }
            </div>
        </Style.DeviceContainer >
    )
}

export default Device;