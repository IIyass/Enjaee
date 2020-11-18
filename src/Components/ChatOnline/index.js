import React, { useEffect, useState } from 'react'
import * as Style from './style';
import { Container } from '../Common/Body'
import { FooterButton } from '../UI/FooterButton'
import ChatInput from '../UI/ChatInput'
import Quote from './Words'
const ChatOnline = () => {
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
    console.log(n)
    return (
        <Style.Wrapper as={Container}>
            <Style.LeftSide>
                <Style.AvatarCard>
                    <div>
                        <p>Temporary
                        Chat</p>
                    </div>
                </Style.AvatarCard>
            </Style.LeftSide>
            <Style.RightSide>
                <Style.CrossWrapper>
                    <Quote
                        time="06:30"
                        name="Sam Dave"
                        text="Hey Tara, How are you? How’s going Summer Vacation?" />
                    <Quote
                        sender
                        time="06:32"
                        name="Tara Alwyn"
                        text="Hey Tara, I am Good, Thank you:) Vacation is good yet…" />
                    <Quote
                        time="06:35"
                        img
                        name="Sam Dave"
                        text="Did you see my painting? i am curious to update on FB status." />
                    {talk.map((text) => {
                        return <Quote
                            time={n}
                            sender
                            name="Sam Dave"
                            text={text} />
                    })}

                </Style.CrossWrapper>
                <Style.Footer>
                    <ChatInput onChange={handleChange} type="text" name="chat" placeholder='Type here…' value={content} />
                    <FooterButton onClick={handleSubmit}>Send</FooterButton>
                </Style.Footer>
            </Style.RightSide>
        </Style.Wrapper>
    )
}

export default ChatOnline;