import React from 'react'
import { Input, Container } from './style'
import SearchIcon from '../../Illustration/searchicon.svg'
const SearchInput = ({ placeholder, name, iconSearch, ...props }) => {



    return (
        <Container>
            <Input
                type="text"
                name={name}
                placeholder={placeholder}
                {...props}
            />
            {iconSearch ? <span><img src={SearchIcon} /></span> : <span></span>}
        </Container>
    )
}

export default SearchInput;