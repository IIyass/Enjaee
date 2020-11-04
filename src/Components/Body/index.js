import React from 'react'
import * as Style from './style'
import { Container } from '../Common/Body'
import SearchInput from '../UI/SearchInput'
import SortInput from '../UI/SortInput'
import Card from '../Card'
import Data from '../../Data'
const Body = () => {
    return (
        <Style.Wrapper as={Container}>
            <Style.SearchBar>
                <SearchInput />
                <SortInput />
            </Style.SearchBar>
            <Style.CardLayout>
                {Data.map(({ picture, name, detail }) => {
                    return <Card name={name} picture={picture} detail={detail} />
                })}
            </Style.CardLayout>
        </Style.Wrapper>
    )
}

export default Body