import React, { useState } from 'react'
import * as Style from './style'
import ChatIcon from '../../Illustration/Chat.svg'
import AudioCall from '../../Illustration/AudioCall.svg'
import More from '../../Illustration/More.svg'
import Stroke from '../../Illustration/Stroke.svg'
import CardHero from './CardHero'

const Card = ({ picture, name, detail, index, id, locked, history, CardType }) => {

    const [openModel, setOpenModel] = useState();
    const [toggle, setToggle] = useState(false);


    const ModelShow = () => {
        return <Style.ModalContainer>
            <p>Would you like send chat request to Jolie Price.</p>
            <Style.ButtonContainer>
                <button className="red" onClick={() => setOpenModel(false)}>No</button>
                <button className="green">Yes</button>
            </Style.ButtonContainer>
        </Style.ModalContainer>
    }

    const renderSingleCard = () => {
        switch (CardType) {
            case 'history':
                return <Style.CardContainer >
                    <CardHero picture={picture} index={index} id={id} />
                    <Style.Description>
                        <Style.PersonalInfo>
                            <h1>{name}</h1>
                            <span>{detail}</span>
                        </Style.PersonalInfo>
                        <Style.IconContainer>
                            <div><img src={ChatIcon} onClick={() => locked && setOpenModel(index)} /><span>{history?.message}</span></div>
                            <div><img src={AudioCall} /><span>{history?.call}</span></div>
                            <div><img src={Stroke} /><span>{history?.video}</span></div>
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
                            <div> <img src={ChatIcon} onClick={() => locked && setOpenModel(index)} /></div>
                            <div>  <img src={AudioCall} /></div>
                            <div> <img src={Stroke} /></div>
                            <div><img src={More} onClick={(e) => setToggle(!toggle)} />{toggle && <ul><li>Admin</li><li>Delete</li><li>Exit Group</li></ul>} </div>
                        </Style.IconContainer>
                    </Style.Description>
                </Style.CardContainer>
            case 'chat':
                return <Style.CardContainer >
                    <CardHero TickedCard name={name} picture={picture} index={index} id={id} detail={detail} />
                    <Style.Description>
                        <Style.PersonalInfo>
                            <h1>{name}</h1>
                            <span>{detail}</span>
                        </Style.PersonalInfo>
                        <Style.IconContainer>
                            <div><img src={ChatIcon} onClick={() => locked && setOpenModel(index)} /><span>{history?.message}</span></div>
                            <div><img src={AudioCall} /><span>{history?.call}</span></div>
                            <div><img src={Stroke} /><span>{history?.video}</span></div>
                            <div><img src={More} /> </div>
                        </Style.IconContainer>
                    </Style.Description>
                </Style.CardContainer>
            default:
                return <Style.CardContainer>
                    <CardHero name={name} picture={picture} index={index} id={id} detail={detail} />
                    <Style.Description>
                        <Style.PersonalInfo>
                            <h1>{name}</h1>
                            <span>{detail}</span>
                        </Style.PersonalInfo>
                        <Style.IconContainer>
                            <img src={ChatIcon} onClick={() => locked && setOpenModel(index)} />
                            <img src={AudioCall} />
                            <img src={Stroke} />
                            <img src={More} />
                        </Style.IconContainer>
                    </Style.Description>
                </Style.CardContainer>
        }
    }


    return (
        <Style.Wrapper index={openModel}>
            {renderSingleCard()}
            {index === openModel && ModelShow()}
        </Style.Wrapper>
    )
}

export default Card;