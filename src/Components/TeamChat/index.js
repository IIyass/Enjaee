import React from 'react'
import * as Style from './style'
import ChatOnline from './ChatOnline'
import Card from './Card'

const DumbTeamChatComponent = ({ TeamData, step, next }) => {

    return (
        step === 4 ? <ChatOnline /> :
            <Style.CardLayout>
                {TeamData.map(({ picture, name, detail, profile, history, id }, index) => {
                    return <Card
                        step={step}
                        next={next}
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

export default DumbTeamChatComponent;