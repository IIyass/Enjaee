import React, { useState } from 'react'
import { CardLayout } from '../style'
import Card from './Card'

const Contact = (props) => {

    const { contact, selectGroupPerson, removeGroupPerson, GroupPerson } = props;
    const [openModel, setOpenModel] = useState();
    return (
        <CardLayout index={openModel}>
            {contact.map(({ picture, name, detail, id }, index) => {
                return <Card
                    openModel={openModel}
                    setOpenModel={setOpenModel}
                    index={index}
                    name={name}
                    picture={picture}
                    detail={detail}
                    id={id}
                    selectGroupPerson={selectGroupPerson}
                    removeGroupPerson={removeGroupPerson}
                    GroupPerson={GroupPerson}
                />
            })
            }
        </CardLayout>
    )
}
export default Contact;


