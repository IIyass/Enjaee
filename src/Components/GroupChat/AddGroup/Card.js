import React from 'react';
import * as Style from './CardStyle';
import ChatIcon from '../../../Illustration/Chat.svg';


const Card = (props) => {
    const {
        picture,
        name,
        detail = "Working on iOS 13"
    } = props;

    return (
        <Style.Wrapper>
            <Style.CardContainer  >
                <div id="img">
                    <img alt="profil" className="profil" src={picture} />
                </div>
                <Style.Description>
                    <Style.PersonalInfo>
                        <h1>{name}</h1>
                        <span>{detail}</span>
                    </Style.PersonalInfo>
                    <Style.IconContainer>
                        <div>
                            <img alt="chat" src={ChatIcon} />
                        </div>
                    </Style.IconContainer>
                </Style.Description>
            </Style.CardContainer>
        </Style.Wrapper>
    );
};
export default Card;