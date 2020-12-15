import React, { useState, useEffect } from 'react';
import MockData from '../../Data/ContactMockData'
export const Group = React.createContext();


const GroupProvider = (props) => {

    const [step, setStep] = useState(1);
    const [groupName, setGroupName] = useState('');
    const [contacts, setContacts] = useState([]);
    const [selectedContacts, setSelectedContacts] = useState([]);
    const [createdGroup, setCreatedGroup] = useState([])
    const GroupContact = MockData.filter(({ id }) => {
        return contacts.includes(id)
    })


    const handleTeamSelecting = (index, id) => {
        if (!selectedContacts.includes(index)) {
            setSelectedContacts([...selectedContacts, index])
            setContacts([...contacts, id])
        } else {
            const NewIndexArray = selectedContacts.filter(e => e !== index)
            const NewContactArray = contacts.filter(e => e !== id)
            setSelectedContacts(NewIndexArray)
            setContacts(NewContactArray)
        }
    }

    const next = () => {
        // update state.step by adding to previous state
        setStep(step + 1)
    }
    const back = () => {
        // update state.step by adding to previous state
        setStep(step - 1)
    }

    return (

        <Group.Provider
            value={{
                step,
                next,
                back,
                groupName,
                setGroupName,
                contacts,
                setContacts,
                GroupContact,
                handleTeamSelecting,
                selectedContacts,
                setSelectedContacts

            }}>
            {props.children}
        </Group.Provider>
    );
};

export default GroupProvider;