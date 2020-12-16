import React, { useState } from 'react'
import * as Style from './CardStyle'
import { useHistory } from 'react-router-dom'
import ChatIcon from '../../../Illustration/Chat.svg'
import AudioCall from '../../../Illustration/AudioCall.svg'
import More from '../../../Illustration/More.svg'
import Stroke from '../../../Illustration/Stroke.svg'
import Success from '../../../Illustration/Success.svg'

const Card = (props) => {

    const { picture,
        name,
        detail,
        index,
        id,
        selectGroupPerson,
        removeGroupPerson,
        GroupPerson,
        locked,
        setOpenModel,
        openModel
    } = props;

    let historyLocation = useHistory();
    const [toggle, setToggle] = useState(false);
    const HandleVideo = () => {
        historyLocation.push({
            pathname: '/alert',
            state: 3
        });
    }

    const HandleAudio = () => {
        historyLocation.push({
            pathname: '/alert',
            state: 2
        });
    }

    const HandleChat = () => {
        historyLocation.push({
            pathname: '/alert',
            state: 1
        });
    }


    const handleSelectedCard = () => {
        if (GroupPerson.includes(id)) {
            return true;
        }
    };
    console.log(GroupPerson)
    return (
        <Style.Wrapper>
            <Style.CardContainer selectImg={handleSelectedCard()}>
                <div id="img">
                    {!handleSelectedCard() ?
                        <img onClick={() => selectGroupPerson(id)} className="profil" src={picture} />
                        : <>
                            <img onClick={() => removeGroupPerson(id)} className="profil" src={picture} />
                            <img onClick={() => removeGroupPerson(id)} className="icon" src={Success} />
                        </>
                    }

                </div>
                <Style.Description>
                    <Style.PersonalInfo>
                        <h1>{name}</h1>
                        <span>{detail}</span>
                    </Style.PersonalInfo>
                    <Style.IconContainer>
                        <div> <img src={ChatIcon} onClick={() => HandleChat()} /></div>
                        <div>  <img src={AudioCall} onClick={() => HandleAudio()} /></div>
                        <div> <img src={Stroke} onClick={() => HandleVideo()} /></div>
                        <div><img src={More} onClick={(e) => setToggle(!toggle)} />{toggle && <ul><li>Admin</li><li>Delete</li><li>Exit Group</li></ul>} </div>
                    </Style.IconContainer>
                </Style.Description>
            </Style.CardContainer>
        </Style.Wrapper >
    )
}
export default Card;