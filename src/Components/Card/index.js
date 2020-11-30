import React, { useState } from 'react'
import { useHistory } from "react-router-dom";
import * as Style from './style'
import ChatIcon from '../../Illustration/Chat.svg'
import AudioCall from '../../Illustration/AudioCall.svg'
import More from '../../Illustration/More.svg'
import Stroke from '../../Illustration/Stroke.svg'
import CardHero from './CardHero'
import ChatCard from './HistoryCard'

const Card = ({ picture, name, detail, index, id, locked, history, CardType, setOpenModel, openModel }) => {

    const [toggle, setToggle] = useState(false);


    let historyLocation = useHistory();




    const CancelSendRequest = () => {
        setToggle(false)
        setOpenModel(undefined)
    }

    const ModelShow = () => {
        return <Style.ModalContainer>
            <p>Would you like send chat request to Jolie Price.</p>
            <Style.ButtonContainer>
                <button className="red" onClick={() => CancelSendRequest()}>No</button>
                <button className="green">Yes</button>
            </Style.ButtonContainer>
        </Style.ModalContainer>
    }


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



    const renderSingleCard = () => {
        switch (CardType) {
            case 'history':
                return <Style.CardContainer >
                    <CardHero name={name} picture={picture} index={index} id={id} detail={detail} />
                    <Style.Description>
                        <Style.PersonalInfo>
                            <h1>{name}</h1>
                            <span>{detail}</span>
                        </Style.PersonalInfo>
                        <Style.IconContainer>
                            <div><img src={ChatIcon} onClick={() => HandleChat()} /><span>{history?.message}</span></div>
                            <div><img src={AudioCall} onClick={() => HandleAudio()} /><span>{history?.call}</span></div>
                            <div><img src={Stroke} onClick={() => HandleVideo()} /><span>{history?.video}</span></div>
                            <div><img src={More} /> </div>
                        </Style.IconContainer>
                    </Style.Description>
                </Style.CardContainer>
            case 'group':
                return <Style.CardContainer>
                    <CardHero TickedCard name={name} picture={picture} index={index} id={id} detail={detail} />
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
            case 'chat':
                return <ChatCard name={name} history={history} locked={locked} picture={picture} index={index} id={id} detail={detail} setOpenModel={setOpenModel} HandleChat={HandleChat} />

            case 'details':
                return <Style.CardContainer>
                    <CardHero name={name} picture={picture} index={index} id={id} detail={detail} />
                    <Style.Description>
                        <Style.PersonalInfo>
                            <h1>{name}</h1>
                            <span>{detail}</span>
                        </Style.PersonalInfo>
                        <Style.IconContainer>
                            <img src={ChatIcon} onClick={() => locked ? HandleChat() : setOpenModel(index)} />
                            <img src={AudioCall} onClick={() => locked ? HandleAudio() : setOpenModel(index)} />
                            <img src={Stroke} onClick={() => locked ? HandleVideo() : setOpenModel(index)} />
                            <img src={More} />
                        </Style.IconContainer>
                    </Style.Description>
                </Style.CardContainer>
        }
    }


    return (
        <Style.Wrapper>
            {renderSingleCard()}
            {index === openModel && ModelShow()}
        </Style.Wrapper>
    )
}

export default Card;