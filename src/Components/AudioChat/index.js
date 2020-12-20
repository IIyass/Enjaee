import React, { useState } from 'react';
import Wrapper from './style';
import ProfilButton from '../UI/ProfilButton';
import Jolie from '../../Illustration/Joli.png';
import receiveaudiocallicon from '../../Illustration/receiveaudiocallicon.svg';
import volumeicon from '../../Illustration/volumeicon.svg';
import muteicon from '../../Illustration/muteicon.svg';
import silenticon from '../../Illustration/silenticon.svg';
import keypadicon from '../../Illustration/keypadicon.svg';

const AudioChat = () => {
  const [audioChatStep, setAudioChatStep] = useState(1);

  const next = () => {
    setAudioChatStep(audioChatStep + 1);
  };

  const back = () => {
    setAudioChatStep(audioChatStep - 1);
  };

  const handleAudioChat = () => {
    switch (audioChatStep) {
      case 1:
        return <>
          <img src={receiveaudiocallicon} />
          <div>
            <ProfilButton onClick={() => next()}>Accept</ProfilButton>
            <ProfilButton onClick={() => back()}>Decline</ProfilButton>
          </div>
        </>;
      case 2:
        return <>
          <div id="TimeDetail">
            <h1>Tara Wayn</h1>
            <span>00:34</span>
          </div>
          <div id="chatDetail">
            <img src={silenticon} />
            <img src={muteicon} />
            <ProfilButton>End Call</ProfilButton>
            <img src={keypadicon} />
            <img src={volumeicon} />
          </div>
        </>;
      default:
        return <>
          <img src={receiveaudiocallicon} />
          <div>
            <ProfilButton onClick={() => next()}>Accept</ProfilButton>
            <ProfilButton onClick={() => back()}>Decline</ProfilButton>
          </div>
        </>;
    }
  };

  return (
    <Wrapper>
      <img id="profil" src={Jolie} />
      {handleAudioChat()}
    </Wrapper>
  );
};

export default AudioChat;
