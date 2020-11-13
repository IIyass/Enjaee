import React, { useContext } from 'react'
import * as Style from './style'
import { Group } from '../../Provider/GroupProvidre'
import Success from '../../Illustration/Success.svg'
const CardHero = ({ name, detail, picture, TickedCard, id, index }) => {
    const { selectedContacts, handleTeamSelecting } = useContext(Group);

    const handleSelectedCard = () => {
        if (selectedContacts.includes(index)) {
            return true;
        }
    };

    return (
        <Style.HeroComtainer selectImg={handleSelectedCard()}>
            <div id="img">
                {TickedCard ? <> <img onClick={() => handleTeamSelecting(index, id)} className="profil" src={picture} />
                    {handleSelectedCard() && <img className="icon" src={Success} />}</>
                    : <img className="profil" src={picture} />}
            </div>
        </Style.HeroComtainer>
    )
}

export default CardHero;