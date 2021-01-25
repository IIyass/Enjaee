import React from 'react';
import * as Style from './style';
import Card from './Card';

const History = ({ HistoryData, goToPrivateRoom }) => {

  return < Style.CardLayout >
    {
      HistoryData.map(({
        userData, audio,
        video, chat, room, userId
      }) => (
        < Card
          index={userId}
          userData={userData}
          audio={audio}
          video={video}
          chat={chat}
          roomId={room}
          goToPrivateRoom={goToPrivateRoom}
        />
      ))
    }
  </Style.CardLayout >
}

export default History;
