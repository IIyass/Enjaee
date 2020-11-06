import React from 'react'
import { Input, Container } from './style'
import SearchIcon from '../../Illustration/searchicon.svg'
const SearchInput = () => {



    return (
        <Container>
            <Input
                type="search"
                name="search"
                placeholder="Search"
            />
            <span><img src={SearchIcon} /></span>
        </Container>
    )
}

export default SearchInput;