import React from 'react'
import * as Style from './style'
import picture from '../../Illustration/Sozoo.png'

const AddCard = ({ next }) => {
    return (

        <Style.AddCardContainer>
            <div onClick={() => next()}> <img src={picture} /></div>
            <h1>Create Group</h1>
        </Style.AddCardContainer>
    )
}

export default AddCard;