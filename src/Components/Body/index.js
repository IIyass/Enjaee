import React, { useState } from 'react'
import * as Style from './style'
import { Container } from '../Common/Body'
import SearchInput from '../UI/SearchInput'
import SortInput from '../UI/SortInput'
import Card from '../Card'
import Data from '../../Data/ContactMockData'
import AddGroup from '../Group/Addgroup'
import GroupDetail from '../Group/GroupDetail'

const Body = ({ contact, Addgroup, groupDetail, next, setGroupName, groupName }) => {
    const [selectedContacts, setSelectedContacts] = useState([])
    const handleTeamSelecting = (index) => {
        if (!selectedContacts.includes(index)) {
            setSelectedContacts([...selectedContacts, index])
        } else {
            const NewArray = selectedContacts.filter(e => e !== index)
            setSelectedContacts(NewArray)
        }
    }

    const HandleInput = () => {
        if (contact) {
            return <Style.SearchBar>
                <SearchInput placeholder="Search" name="Search" iconSearch={true} />
                <SortInput />
            </Style.SearchBar>
        } else {
            if (Addgroup) {
                return <AddGroup setGroupName={setGroupName} next={next} />;
            } else {
                if (groupDetail) {
                    return <GroupDetail groupName={groupName} />
                }
            }
        }
    }

    return (
        <Style.Wrapper as={Container}>
            {HandleInput()}
            <Style.CardLayout>
                {Data.map(({ picture, name, detail }, index) => {
                    return <div key={index} onClick={() => handleTeamSelecting(index)} ><Card cardCred={selectedContacts} index={index} name={name} picture={picture} detail={detail} /></div>
                })}
            </Style.CardLayout>
        </Style.Wrapper >
    )
}

export default Body;