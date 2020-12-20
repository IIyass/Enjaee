import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import * as Style from './CardStyle';
import ChatIcon from '../../../Illustration/Chat.svg';
import AudioCall from '../../../Illustration/AudioCall.svg';
import More from '../../../Illustration/More.svg';
import Stroke from '../../../Illustration/Stroke.svg';

const Card = (props) => {
  const {
    picture,
    name,
    detail,
  } = props;

  const historyLocation = useHistory();
  const [toggle, setToggle] = useState(false);
  const HandleVideo = () => {
    historyLocation.push({
      pathname: '/alert',
      state: 3,
    });
  };

  const HandleAudio = () => {
    historyLocation.push({
      pathname: '/alert',
      state: 2,
    });
  };

  const HandleChat = () => {
    historyLocation.push({
      pathname: '/alert',
      state: 1,
    });
  };

  return (
    <Style.Wrapper>
      <Style.CardContainer>
        <img className="profil" src={picture} />
        <Style.Description>
          <Style.PersonalInfo>
            <h1>{name}</h1>
            <span>{detail}</span>
          </Style.PersonalInfo>
          <Style.IconContainer>
            <div>
              {' '}
              <img src={ChatIcon} onClick={() => HandleChat()} />
            </div>
            <div>
              {' '}
              <img src={AudioCall} onClick={() => HandleAudio()} />
            </div>
            <div>
              {' '}
              <img src={Stroke} onClick={() => HandleVideo()} />
            </div>
            <div>
              <img src={More} onClick={() => setToggle(!toggle)} />
              {toggle && (
                <ul>
                  <li>Admin</li>
                  <li>Delete</li>
                  <li>Exit Group</li>
                </ul>
              )}

            </div>
          </Style.IconContainer>
        </Style.Description>
      </Style.CardContainer>
    </Style.Wrapper>
  );
};
export default Card;
