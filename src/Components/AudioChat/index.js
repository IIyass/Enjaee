import React, { useState } from 'react'
import * as Style from './style'
import { ProfilButton } from '../UI/ProfilButton'
import Jolie from '../../Illustration/Joli.png'
import receiveaudiocallicon from '../../Illustration/receiveaudiocallicon.svg'
import BoundingCircle from '../../Illustration/BoundingCircle.svg'
import silenticon from '../../Illustration/silenticon.svg'
import receiveaudiocallicons from '../../Illustration/receiveaudiocallicon.svg'
const AudioChat = () => {
    const [audioChatStep, setAudioChatStep] = useState(1);

    const next = () => {
        setAudioChatStep(audioChatStep + 1)
    }

    const back = () => {
        setAudioChatStep(audioChatStep - 1)
    }

    const handleVideoChat = () => {
        switch (audioChatStep) {
            case 1:
                return <>
                    <img src={receiveaudiocallicon} />
                    <div>
                        <ProfilButton onClick={() => next()}>Accept</ProfilButton>
                        <ProfilButton onClick={() => back()}>Decline</ProfilButton>
                    </div>
                </>
            case 2:
                return <>
                    <div id="TimeDetail">
                        <h1>Tara Wayn</h1>
                        <span>00:34</span>
                    </div>
                    <div id="chatDetail">
                        <img src={BoundingCircle} />
                        <img src={silenticon} />
                        <ProfilButton>End</ProfilButton>
                        <img src={receiveaudiocallicons} />
                        <img src={receiveaudiocallicon} />
                    </div>
                </>
        }
    }

    return (
        <Style.Wrapper>
            <img id="profil" src={Jolie} />
            {handleVideoChat()}
        </Style.Wrapper>
    )
}

export default AudioChat