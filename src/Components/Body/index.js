import React, { useContext } from 'react'
import * as Style from './style'
import { BodyContainer } from '../Common/Body'
import SearchInput from '../UI/SearchInput'
import SortInput from '../UI/SortInput'
import MockData from '../../Data/ContactMockData'
import AddGroup from '../Group/Addgroup'
import GroupDetail from '../Group/GroupDetail'
import CardLayout from './CardLayout'
import { Group } from '../../Provider/GroupProvidre'
const Body = ({ PageType }) => {
    const { GroupContact } = useContext(Group);

    const HandlePage = () => {
        switch (PageType) {
            case "HistoryPage":
                return <>
                    <Style.SearchBar>
                        <SearchInput placeholder="Search" name="Search" iconSearch={true} />
                        <SortInput width="150px" height="45px" />
                    </Style.SearchBar>
                    <CardLayout CardType="history" Data={MockData} />
                </>
            case "ContactPage":
                return <>
                    <Style.SearchBar>
                        <SearchInput placeholder="Search" name="Search" iconSearch={true} />
                        <SortInput width="150px" height="45px" />
                    </Style.SearchBar>
                    <CardLayout CardType="details" Data={MockData} />
                </>
            case "AddgroupPage":
                return <>
                    <AddGroup />
                    <CardLayout CardType="group" Data={MockData} />
                </>
            case "GroupDetailPage":
                return <>
                    <GroupDetail />
                    <CardLayout CardType="group" Data={GroupContact} />
                </>
            case "TeamChatPage":
                return <>
                    <CardLayout CardType="chat" Data={MockData} />
                </>
        }
    }




    return (
        <Style.Wrapper as={BodyContainer}>
            {HandlePage()}
        </Style.Wrapper >
    )
}

export default Body;