import React, { useState, useContext } from 'react'
import * as Style from './style'
import SearchInput from '../UI/SearchInput'
import Rectangle380 from '../../Illustration/Rectangle380.svg'
import { Group } from '../../Provider/GroupProvidre'
const AddGroup = () => {
    const { groupName, next, setGroupName } = useContext(Group);
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
                {groupName ? <SearchInput disabled required placeholder="Group name" value={groupName} name="groupname" /> :
                    <SearchInput required placeholder="Group name" value={name} onChange={(e) => setName(e.target.value)} name="groupname" />}
                <Style.ButtonContainer>
                    <button>Done</button>
                </Style.ButtonContainer>
            </form>
            <SearchInput placeholder="Search" name="Search" iconSearch={true} />
        </Style.GroupBar>
    )
}
export default AddGroup;



