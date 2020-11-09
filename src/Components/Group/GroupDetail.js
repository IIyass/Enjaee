import React, { useState } from 'react'
import * as Style from './style'
import SearchInput from '../UI/SearchInput'
import Rectangle380 from '../../Illustration/Rectangle380.svg'

const GroupDetail = ({ setGroupName, next, groupName }) => {

    const [name, setName] = useState('')
    const handleSubmit = (e) => {
        e.preventDefault()
        setGroupName(name);
        next();
    }
    return (
        <Style.GroupBar>
            <img src={Rectangle380} />
            <form onSubmit={handleSubmit}>
                <SearchInput disabled value={groupName} name="groupname" />
            </form>
            <SearchInput placeholder="Search" name="Search" iconSearch={true} />
            <Style.ButtonContainer>
                <button>Add Member</button>
                <button>Update</button>
            </Style.ButtonContainer>
        </Style.GroupBar>
    )
}
export default GroupDetail;
