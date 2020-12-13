import React, { useState } from 'react'
import * as Style from './styles'
import Laptop from '../../Illustration/Screenshot.svg';
import Device from './Device'
import Pic1 from '../../Illustration/LandingPage/chat.svg'
import Pic2 from '../../Illustration/LandingPage/groupchat.svg'
import Pic3 from '../../Illustration/LandingPage/temporarychat.svg'
import Pic4 from '../../Illustration/LandingPage/videocall.svg'
import Pic5 from '../../Illustration/LandingPage/audiocall.svg'
import Logo from '../../Illustration/hichatylogo.svg'
import videocall from '../../Illustration/LandingPage/VideoCall.svg'
import AudioGroup from '../../Illustration/LandingPage/AudioCall.svg'
import ChatScreen from '../../Illustration/LandingPage/ChatScreen.svg'
import GroupAudioCall from '../../Illustration/LandingPage/GroupAudioCall.svg'
import GroupChatScreen from '../../Illustration/LandingPage/GroupChatScreen.svg'
import TemChatScreen from '../../Illustration/LandingPage/TemChatScreen.svg'
import { useHistory } from 'react-router-dom';

const Landing = () => {
    let history = useHistory();
    const [Pic, setPic] = useState(0);
    const handleSubmit = () => {
        history.push('/signup')
    }

    const renderingPicture = () => {
        switch (Pic) {
            case 0: return <img className="phone" src={videocall} />
            case 1: return <img className="phone" src={AudioGroup} />;
            case 2: return <img className="phone" src={ChatScreen} />;
            case 3: return <img className="phone" src={GroupAudioCall} />;
            case 4: return <img className="phone" src={GroupChatScreen} />;
            case 5: return <img className="phone" src={TemChatScreen} />;
        }
    }
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
                        <div onClick={() => setPic(1)}>
                            <img src={Pic1} />
                            <h4 >Chat</h4>
                        </div>
                        <div onClick={() => setPic(2)}>
                            <img src={Pic2} />
                            <h4 >Group Chat</h4>
                        </div>
                        <div onClick={() => setPic(3)}>
                            <img src={Pic3} />
                            <h4 >Temporary Chat</h4>
                        </div>
                    </div>

                    <div id="bar" />
                    {renderingPicture()}
                    <div id="rightSide">
                        <div>
                            <img src={Pic5} />
                            <h4>Audio Call</h4>
                        </div>
                        <div>
                            <img src={Pic2} />
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

            <button onClick={handleSubmit}>Register Here!</button>

        </Style.Wrapper>
    )
}
export default Landing;