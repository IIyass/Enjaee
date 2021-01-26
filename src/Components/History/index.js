import React from 'react';
import * as Style from './style';
import Card from './Card';

const History = ({ HistoryData,blockContact, goToPrivateRoom ,me}) => {
    return < Style.CardLayout >
    {
      HistoryData.map(({
        userData, audio,
        video, chat, room, userId
      }) => (
        !(me.blockedUsers.includes(userId)) &&   < Card
          index={userId}
          userData={userData}
          audio={audio}
          video={video}
          chat={chat}
          roomId={room}
          userId={userId}
          blockContact={blockContact}
          goToPrivateRoom={goToPrivateRoom}
        />
      ))
    }
  </Style.CardLayout >
}

export default History;
