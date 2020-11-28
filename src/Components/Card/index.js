import React, { useEffect, useState } from 'react'
import * as Style from './style'
import ChatIcon from '../../Illustration/Chat.svg'
import AudioCall from '../../Illustration/AudioCall.svg'
import More from '../../Illustration/More.svg'
import Stroke from '../../Illustration/Stroke.svg'
import CardHero from './CardHero'
import ChatCard from './HistoryCard'

const Card = ({ picture, name, detail, index, id, locked, history, CardType }) => {

    const [openModel, setOpenModel] = useState();
    const [toggle, setToggle] = useState(false);
    const [color, setColor] = useState(true)


    const ModelShow = () => {
        return <Style.ModalContainer>
            <p>Would you like send chat request to Jolie Price.</p>
            <Style.ButtonContainer>
                <button className="red" onClick={() => setOpenModel(false)}>No</button>
                <button className="green">Yes</button>
            </Style.ButtonContainer>
        </Style.ModalContainer>
    }

    useEffect(() => {
        if (toggle) setColor(index === openModel)

    }, [color])

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
                            <div><img src={ChatIcon} /><span>{history?.message}</span></div>
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
                            <div> <img src={ChatIcon} /></div>
                            <div>  <img src={AudioCall} /></div>
                            <div> <img src={Stroke} /></div>
                            <div><img src={More} onClick={(e) => setToggle(!toggle)} />{toggle && <ul><li>Admin</li><li>Delete</li><li>Exit Group</li></ul>} </div>
                        </Style.IconContainer>
                    </Style.Description>
                </Style.CardContainer>
            case 'chat':
                return <ChatCard name={name} history={history} locked={locked} picture={picture} index={index} id={id} detail={detail} setOpenModel={setOpenModel} />

            case 'details':
                return <Style.CardContainer>
                    <div onClick={() => !locked && setOpenModel(index)}>
                        <CardHero name={name} picture={picture} index={index} id={id} detail={detail} />
                    </div>
                    <Style.Description>
                        <Style.PersonalInfo>
                            <h1>{name}</h1>
                            <span>{detail}</span>
                        </Style.PersonalInfo>
                        <Style.IconContainer>
                            <img src={ChatIcon} />
                            <img src={AudioCall} />
                            <img src={Stroke} />
                            <img src={More} />
                        </Style.IconContainer>
                    </Style.Description>
                </Style.CardContainer>
        }
    }


    return (
        <Style.Wrapper index={color}>
            {renderSingleCard()}
            {index === openModel && ModelShow()}
        </Style.Wrapper>
    )
}

export default Card;