import React, { useState } from 'react';
import * as Style from './style';
import ProfilButton from '../UI/ProfilButton';
import Jolie from '../../Illustration/Joli.png';
import receivevideocallicon from '../../Illustration/receivevideocallicon.svg';
import Jhon from '../../Illustration/Martin.png';
import silenticon from '../../Illustration/silenticon.svg';
import endreceiveaudiocallicons from '../../Illustration/Bounding_Circle.svg';

const VideoChat = () => {
  const [videoChatStep, setVideoChatStep] = useState(1);

  const next = () => {
    setVideoChatStep(videoChatStep + 1);
  };

  const back = () => {
    setVideoChatStep(videoChatStep - 1);
  };

  const handleVideoChat = () => {
    switch (videoChatStep) {
      case 1:
        return (
          <>
            <img id="profil" src={Jolie} />
            <img src={receivevideocallicon} />
            <div>
              <ProfilButton onClick={() => next()}>Accept</ProfilButton>
              <ProfilButton onClick={() => back()}>Decline</ProfilButton>
            </div>
          </>
        );
      case 2:
        return (
          <div style={{
            backgroundImage: `url(${Jolie})`, backgroundPosition: 'center', backgroundRepeat: 'no-repeat', backgroundSize: 'cover', width: '100%', height: '100%',
          }}
          >
            <div id="top">
              <div><h1>00:34</h1></div>
              <img src={Jhon} />
            </div>
            <div id="bottom">
              <img src={silenticon} />
              <ProfilButton onClick={() => back()}>End Call</ProfilButton>
              <img src={endreceiveaudiocallicons} />
            </div>
          </div>
        );
    }
  };

  return (
    <Style.Wrapper>
      {handleVideoChat()}
    </Style.Wrapper>
  );
};

export default VideoChat;
