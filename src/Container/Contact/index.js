import React from 'react'
import * as Style from './style'
import { BodyContainer } from '../../Common/Body'
import DumbContactComponent from '../../Components/Contact'
import SearchInput from '../../Components/UI/SearchInput'
import SortInput from '../../Components/UI/SortInput'
import MockData from '../../Data/ContactMockData'
const Contact = () => {

    return (
        <Style.Wrapper as={BodyContainer}>

            <Style.SearchBar>
                <SearchInput placeholder="Search" name="Search" iconSearch={true} />
                <SortInput width="150px" height="40px" />
            </Style.SearchBar>

            <DumbContactComponent
                ContactData={MockData}
            />

        </Style.Wrapper >
    )
}

export default Contact;