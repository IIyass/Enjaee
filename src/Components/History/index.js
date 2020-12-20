import React from 'react';
import * as Style from './style';
import Card from './Card';

const History = ({ HistoryData }) => (
  <Style.CardLayout>
    {HistoryData.map(({
      picture, name, detail, history, id,
    }, index) => (
      <Card
        index={index}
        name={name}
        picture={picture}
        detail={detail}
        history={history}
        id={id}
      />
    ))}
  </Style.CardLayout>
);

export default History;
