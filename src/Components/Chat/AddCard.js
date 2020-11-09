import React from 'react'
import * as Style from './style'
import picture from '../../Illustration/Sozoo.png'
import { Link } from 'react-router-dom'
const AddCard = () => {
    return (

        <Style.AddCardContainer>
            <Link to="/contact"> <img src={picture} /></Link>
            <h1>Create Group</h1>
        </Style.AddCardContainer>
    )
}

export default AddCard;