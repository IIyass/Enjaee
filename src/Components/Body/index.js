import React, { useState } from 'react'
import * as Style from './style'
import { Container } from '../Common/Body'
import SearchInput from '../UI/SearchInput'
import SortInput from '../UI/SortInput'
import MockData from '../../Data/ContactMockData'
import AddGroup from '../Group/Addgroup'
import GroupDetail from '../Group/GroupDetail'
import CardLayout from './CardLayout'

const Body = ({ contact, Addgroup, groupDetail, next, setGroupName, groupName, contacts, setContacts, step }) => {

    const GroupContact = MockData.filter(({ id }) => {
        return contacts.includes(id)
    }
    )

    const HandleInput = () => {
        if (contact) {
            return <>
                <Style.SearchBar>
                    <SearchInput placeholder="Search" name="Search" iconSearch={true} />
                    <SortInput />
                </Style.SearchBar>
                <CardLayout Data={MockData} />
            </>
        } else {
            if (Addgroup) {
                return <>
                    <AddGroup setGroupName={setGroupName} next={next} />
                    <CardLayout step={step} Data={MockData} contacts={contacts} setContacts={setContacts} />
                </>
            } else {
                if (groupDetail) {
                    return <>
                        <GroupDetail contacts={contacts} groupName={groupName} />
                        <CardLayout Details step={step} Data={GroupContact} />
                    </>
                }
            }
        }
    }

    return (
        <Style.Wrapper as={Container}>
            {HandleInput()}
        </Style.Wrapper >
    )
}

export default Body;