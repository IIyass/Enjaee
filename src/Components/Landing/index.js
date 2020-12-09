import React from 'react'
import * as Style from './styles'
import Laptop from '../../Illustration/Screenshot.svg';
import screenshotforfeature from '../../Illustration/LandingPage/screenshotforfeature.svg'
import Device from './Device'
import Pic1 from '../../Illustration/LandingPage/chat.svg'
import Pic2 from '../../Illustration/LandingPage/groupchat.svg'
import Pic3 from '../../Illustration/LandingPage/temporarychat.svg'
import Pic4 from '../../Illustration/LandingPage/videocall.svg'
import Logo from '../../Illustration/hichatylogo.svg'

const Landing = () => {
    return (
        <Style.Wrapper>
            <h1>Let’s connect with HiChaty Messanger</h1>
            <span>Secure and Easier to Use </span>
            <p>Provide you to more Connectivity with Friends, Family and Business Via Chat & Calls.</p>
            <img src={Laptop} />
            <h2>DOWNLOAD ON YOUR DEVICE</h2>
            <div id="device">
                <Device text="Download HiChaty Messanger
                   on your iPhone and Stay connect
                     with Friends, Family and Business"
                    type="IOS" />
                <Device text="Download HiChaty Messanger
                      on your Android and Stay connect
                    with Friends, Family and Business"
                    type="ANDROID" />
            </div>
            <h3>FEATURES</h3>
            <div style={{ backgroundColor: '#53A8CB' }}>
                <div id="feature">
                    <div id="leftSide">
                        <div>
                            <img src={Pic1} />
                            <h4>Audio Call</h4>
                        </div>
                        <div>
                            <img src={Pic2} />
                            <h4>Group A.Call</h4>
                        </div>
                        <div>
                            <img src={Pic3} />
                            <h4>Video Call</h4>
                        </div>
                    </div>

                    <div id="bar" />
                    <img id="phone" src={screenshotforfeature} />

                    <div id="rightSide">
                        <div>
                            <img src={Pic2} />
                            <h4>Audio Call</h4>
                        </div>
                        <div>
                            <img src={Pic3} />
                            <h4>Group A.Call</h4>
                        </div>
                        <div>
                            <img src={Pic4} />
                            <h4>Video Call</h4>
                        </div>
                    </div>
                </div>
            </div>
            <img id="logo" src={Logo} />
            <p id="footerP">Let’s Join HiChaty Messanger
               fun Chat with Friends and Family</p>

            <button>Register Here!</button>
        </Style.Wrapper>
    )
}
export default Landing;