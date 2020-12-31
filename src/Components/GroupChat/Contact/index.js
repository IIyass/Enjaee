import React, { useState } from 'react';
import { CardLayout } from '../style';
import Card from './Card';
import Jhon from '../../../Illustration/Henry.png';
const Contact = (props) => {

  const {
    contact,
    selectGroupPerson,
    removeGroupPerson,
    GroupPerson,
  } = props;

  const [openModel, setOpenModel] = useState();

  return (
    <CardLayout index={openModel}>
      {contact.map(({
        name, detail, id,
      }, index) => (
        <Card
          key={id}
          openModel={openModel}
          setOpenModel={setOpenModel}
          index={index}
          name={name}
          picture={Jhon}
          detail={detail}
          id={id}
          selectGroupPerson={selectGroupPerson}
          removeGroupPerson={removeGroupPerson}
          GroupPerson={GroupPerson}
        />
      ))}
    </CardLayout>
  );
};
export default Contact;
