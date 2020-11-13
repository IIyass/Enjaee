import React, { useEffect, useContext } from 'react'
import * as Style from './style'
import Card from '../Card'
import { Group } from '../../Provider/GroupProvidre'


const CardLayout = ({ Data, CardType }) => {
    const { step, setSelectedContacts } = useContext(Group);
    useEffect(() => {
        if (step > 2) {
            setSelectedContacts([])
        }
    }, [step]);

    const rendringCard = (picture, name, detail, profile, history, id, index) => {
        switch (CardType) {
            case "group":
                return profile && <Card CardType={CardType} index={index} Data={Data} locked={profile} name={name} picture={picture} detail={detail} history={history} />
            default:
                return <Card CardType={CardType} index={index} Data={Data} locked={profile} name={name} picture={picture} detail={detail} history={history} />
        }
    }
    return (
        <Style.CardLayout>
            {Data.map(({ picture, name, detail, profile, history, id }, index) => {
                return rendringCard(picture, name, detail, profile, history, id, index)
            })
            }
        </Style.CardLayout>
    )

}

export default CardLayout;