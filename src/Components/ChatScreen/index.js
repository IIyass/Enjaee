import React, { useState } from 'react'
import * as Style from './style'
import { FooterButton } from '../UI/FooterButton'
import ChatInput from '../UI/ChatInput'
import Quote from './Words'
import Jolie from '../../Illustration/Joli.png'
import Jhon from '../../Illustration/Martin.png'
const ChatScreen = ({ gradientMessage }) => {
    const [content, setContent] = useState('')
    const [talk, setTalk] = useState([])
    const d = new Date();
    const n = d.getHours();

    const handleSubmit = (e) => {
        e.preventDefault()
        setTalk([...talk, content]);
        setContent('')
    };

    const handleChange = e => {
        setContent(e.target.value)
    };
    return (
        <Style.RightSide>
            <Style.CrossWrapper >
                <Quote
                    avatar={Jhon}
                    gradientMessage={gradientMessage}
                    time="06:30"
                    name="Sam Dave"
                    text="Hey Tara, How are you? How’s going Summer Vacation?" />
                <Quote
                    sender
                    avatar={Jolie}
                    time="06:32"
                    name="Tara Alwyn"
                    text="Hey Tara, I am Good, Thank you:) Vacation is good yet…" />
                <Quote
                    avatar={Jhon}
                    gradientMessage={gradientMessage}
                    time="06:35"
                    img
                    name="Sam Dave"
                    text="Did you see my painting? i am curious to update on FB status." />
                {talk.map((text) => {
                    return <Quote
                        time={n}
                        sender
                        avatar={Jhon}
                        name="Sam Dave"
                        text={text} />
                })}
            </Style.CrossWrapper>
            <Style.Footer>
                <ChatInput onChange={handleChange} type="text" name="chat" placeholder='Type here…' value={content} />
                <FooterButton onClick={handleSubmit}>Send</FooterButton>
            </Style.Footer>
        </Style.RightSide>
    )
}

export default ChatScreen;