import React, { useContext } from 'react'
import * as Style from './style'
import { BodyContainer } from '../../Common/Body'
import SearchInput from '../UI/SearchInput'
import SortInput from '../UI/SortInput'
import MockData from '../../Data/ContactMockData'
import AddGroup from '../Group/Addgroup'
import GroupDetail from '../Group/GroupDetail'
import CardLayout from './CardLayout'
import { Group } from '../../Provider/GroupProvider/GroupProvidre'
const Body = ({ PageType }) => {
    const { GroupContact } = useContext(Group);

    const HandlePage = () => {
        switch (PageType) {
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

        }
    }




    return (
        <Style.Wrapper as={BodyContainer}>
            {HandlePage()}
        </Style.Wrapper >
    )
}

export default Body;