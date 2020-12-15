import React, { useState, useContext } from 'react'
import * as Style from './style'
import SearchInput from '../UI/SearchInput'
import Rectangle380 from '../../Illustration/Rectangle380.svg'
import { Group } from '../../Provider/GroupProvider/GroupProvidre'
const GroupDetail = () => {
    const { back, groupName, next, setGroupName } = useContext(Group);
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
                <button onClick={() => back()}> Add Member</button>
                <button>Update</button>
            </Style.ButtonContainer>

        </Style.GroupBar>
    )
}
export default GroupDetail;
