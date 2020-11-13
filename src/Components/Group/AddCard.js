import React, { useContext } from 'react'
import * as Style from './style'
import picture from '../../Illustration/groupicon.svg'
import { Group } from '../../Provider/GroupProvidre'
const AddCard = () => {
    const { next } = useContext(Group);
    return (

        <Style.AddCardContainer>
            <div onClick={() => next()}> <img src={picture} /></div>
            <h1>Create Group</h1>
        </Style.AddCardContainer>
    )
}

export default AddCard;