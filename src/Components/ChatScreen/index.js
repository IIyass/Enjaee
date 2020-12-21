import React, { useEffect, useState, useCallback } from 'react';
import * as Style from './style';
import FooterButton from '../UI/FooterButton';
import ChatInput from '../UI/ChatInput';
import Quote from './Words';
import Jolie from '../../Illustration/Joli.png';
import Jhon from '../../Illustration/Martin.png';
import { getUserById } from '../../helpers'
const ChatScreen = (props) => {
  const {
    gradientMessage,
    receiver,
    SendMessage,
    messages,
    me
  } = props;
  const [content, setContent] = useState('');
  const [Receiver, setReceiver] = useState()

  const getReceiver = useCallback(
    () => {
      getUserById(receiver).then(res => setReceiver(res))
    }, [receiver, setReceiver]
  );

  useEffect(() => {
    getReceiver()
  }, [getReceiver])

  const handleSubmit = (e) => {
    e.preventDefault();
    SendMessage(content)
    setContent('');
  };

  console.log(content)
  const handleChange = (e) => {
    setContent(e.target.value);
  };

  const getTime = (x) => {
    const year = x.toDate().getFullYear();
    const day = x.toDate().getDay();
    const hours = x.toDate().getHours();
    const seconds = x.toDate().getSeconds();
    const minutes = x.toDate().getMinutes();
    const months = x.toDate().getMonth();
    return hours + ':' + minutes + ':' + seconds;
  }
  return (
    <Style.RightSide>
      <Style.CrossWrapper>
        {messages.map(e => {
          return e.userId === me.id ? <Quote
            sender
            avatar={Jolie}
            time={getTime(e.createdAt)}
            name={me.name}
            text={e.text}
          /> :
            <Quote
              avatar={Jhon}
              gradientMessage={gradientMessage}
              time={getTime(e.createdAt)}
              name={Receiver.name}
              text="Text text"
            />
        })}
      </Style.CrossWrapper>
      <Style.Footer>
        <ChatInput onChange={handleChange} type="text" name="chat" placeholder="Type here…" value={content} />
        <FooterButton onClick={handleSubmit}>Send</FooterButton>
      </Style.Footer>
    </Style.RightSide>
  );
};

export default ChatScreen;
