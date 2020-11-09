import React, { useState } from 'react'
import * as Style from './style'
import { Container } from '../Common/Body'
import SearchInput from '../UI/SearchInput'
import SortInput from '../UI/SortInput'
import Card from '../Card'
import Data from '../../Data/ContactMockData'
import Rectangle380 from '../../Illustration/Rectangle380.svg'
const Body = ({ contact, group }) => {
    const [selectedContacts, setSelectedContacts] = useState([])
    const handleTeamSelecting = (index) => {
        if (!selectedContacts.includes(index)) {
            setSelectedContacts([...selectedContacts, index])
        } else {
            const NewArray = selectedContacts.filter(e => e !== index)
            setSelectedContacts(NewArray)
        }
    }

    return (
        <Style.Wrapper as={Container}>
            {contact ?
                <Style.SearchBar>
                    <SearchInput placeholder="Search" name="Search" iconSearch={true} />
                    <SortInput />
                </Style.SearchBar> :
                <Style.GroupBar>
                    <img src={Rectangle380} />
                    <SearchInput placeholder="Group name" name="Groups" />
                    <SearchInput placeholder="Search" name="Search" iconSearch={true} />
                    <button>Done</button>
                </Style.GroupBar>
            }
            <Style.CardLayout>
                {Data.map(({ picture, name, detail }, index) => {
                    return <div key={index} onClick={() => handleTeamSelecting(index)} ><Card cardCred={selectedContacts} index={index} name={name} picture={picture} detail={detail} /></div>
                })}
            </Style.CardLayout>

        </Style.Wrapper >
    )
}

export default Body;