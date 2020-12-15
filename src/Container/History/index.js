import React from 'react'
import * as Style from './style'
import { BodyContainer } from '../../Common/Body'
import DumbHistoryComponent from '../../Components/History'
import SearchInput from '../../Components/UI/SearchInput'
import SortInput from '../../Components/UI/SortInput'
import MockData from '../../Data/ContactMockData'
const History = () => {

    return (
        <Style.Wrapper as={BodyContainer}>
            <Style.SearchBar>
                <SearchInput placeholder="Search" name="Search" iconSearch={true} />
                <SortInput width="150px" height="40px" />
            </Style.SearchBar>

            <DumbHistoryComponent
                HistoryData={MockData}
            />
        </Style.Wrapper >
    )
}
export default History;