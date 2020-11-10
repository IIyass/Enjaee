import React, { useState, useEffect } from 'react'
import * as Style from './style'
import Card from '../Card'



const CardLayout = ({ contacts = [], setContacts, Data, step, Details }) => {

    const [selectedContacts, setSelectedContacts] = useState([])


    useEffect(() => {
        if (step > 2) {
            setSelectedContacts([])
        }
    }, [step])



    const handleTeamSelecting = (index, id) => {
        if (!selectedContacts.includes(index)) {
            setSelectedContacts([...selectedContacts, index])
            setContacts([...contacts, id])
        } else {
            const NewIndexArray = selectedContacts.filter(e => e !== index)
            const NewContactArray = contacts.filter(e => e !== id)
            setSelectedContacts(NewIndexArray)
            setContacts(NewContactArray)
        }
    }

    return (
        <Style.CardLayout>
            {Details ? Data.map(({ picture, name, detail, profile }, index) => {
                return <Card index={index} Data={Data} locked={profile} name={name} picture={picture} detail={detail} />
            }) : Data.map(({ picture, name, detail, id }, index) => {
                return <Card Data={Data} id={id} handleTeamSelecting={handleTeamSelecting} cardCred={selectedContacts} index={index} name={name} picture={picture} detail={detail} />
            })}
        </Style.CardLayout>
    )
}

export default CardLayout;