import React, { useEffect, useState, useCallback, useRef } from 'react';
import * as Style from './style';
import FooterButton from '../UI/FooterButton';
import ChatInput from '../UI/ChatInput';
import Quote from './Words';
import Jolie from '../../Illustration/Joli.png';
import Jhon from '../../Illustration/Martin.png';
import { getUserNameById } from '../../helpers'

const ChatScreen = (props) => {
  const {
    gradientMessage,
    roomMetadata,
    SendMessage,
    messages,
    loading,
    readMessage,
    me
  } = props;

  const [content, setContent] = useState('');
  const [name, setName] = useState([])

  const dummy = useRef();

  const onFocus = () => {
    readMessage(roomMetadata)
  };
  const onBlur = () => { };

  const getMyName = useCallback(
    (id) => {
      getUserNameById(id).then(res => setName((name) => [...name, {
        id,
        name: res
      }]))
    }, []
  );
  // root app adding teamchat route..
  useEffect(() => {
    dummy.current.scrollIntoView({ behavior: 'smooth' });
  }, [messages])


  useEffect(() => {
    roomMetadata.participants.map(e => getMyName(e))
  }, [])

  const handleSubmit = (e) => {
    e.preventDefault();
    SendMessage({
      content,
      room: roomMetadata.id,

    })
    setContent('');
  };

  const handleChange = (e) => {
    setContent(e.target.value);
  };

  const date = new Date();

  return (
    <Style.RightSide>
      <Style.CrossWrapper>
        {!loading ? messages.map((metaData) => {
          return metaData.userId === me.id ? <Quote
            key={metaData.id}
            sender
            read={metaData.read}
            avatar={Jolie}
            time={metaData.createdAt === null ? date : metaData.createdAt.toDate()}
            name={me.name}
            text={metaData.text}
          /> :
            <Quote
              key={metaData.id}
              read
              avatar={Jhon}
              gradientMessage={gradientMessage}
              time={metaData.createdAt !== undefined && metaData.createdAt.toDate()}
              name={name.map(x => metaData.userId === x.id && x.name)}
              text={metaData.text}
            />

        }) : <h1>Loading</h1>}
        <span ref={dummy}></span>
      </Style.CrossWrapper>
      <Style.Footer>
        <ChatInput onChange={handleChange}
          onFocus={onFocus}
          onBlur={onBlur}
          type="text"
          name="chat"
          placeholder="Type here…"
          value={content} />
        <FooterButton onClick={handleSubmit}>Send</FooterButton>
      </Style.Footer>
    </Style.RightSide>
  );
};

export default React.memo(ChatScreen);
