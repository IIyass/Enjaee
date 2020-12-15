import React, { useState } from 'react'
import * as Style from './style'
import Card from './Card'

const DumbContact = ({ ContactData }) => {

    const [openModel, setOpenModel] = useState();

    return (
        <Style.CardLayout index={openModel}>
            {ContactData.map(({ picture, name, detail, profile, history, id }, index) => {
                return <Card
                    openModel={openModel}
                    setOpenModel={setOpenModel}
                    index={index}
                    locked={profile}
                    name={name}
                    picture={picture}
                    detail={detail}
                    history={history}
                    id={id} />
            })
            }
        </Style.CardLayout>
    )

}

export default DumbContact;