import React, { useEffect, useContext, useState } from 'react'
import * as Style from './style'
import Card from '../Card'
import { Group } from '../../Provider/GroupProvider/GroupProvidre'


const CardLayout = ({ Data, CardType }) => {

    const { step, setSelectedContacts } = useContext(Group);
    useEffect(() => {
        if (step > 2) {
            setSelectedContacts([])
        }
    }, [step]);

    const [openModel, setOpenModel] = useState();

    const rendringCard = (picture, name, detail, profile, history, id, index) => {
        switch (CardType) {
            case "group":
                return profile && <Card CardType={CardType} index={index} Data={Data} locked={profile} name={name} picture={picture} detail={detail} history={history} id={id} />
            default:
                return <Card CardType={CardType} index={index} Data={Data} locked={profile} name={name} picture={picture} detail={detail} history={history} id={id} />
        }
    }

    return (
        <Style.CardLayout index={openModel}>
            {Data.map(({ picture, name, detail, profile, history, id }, index) => {
                return rendringCard(picture, name, detail, profile, history, id, index)
            })
            }
        </Style.CardLayout>
    )

}

export default CardLayout;