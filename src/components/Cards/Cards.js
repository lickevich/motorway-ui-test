import React from 'react';
import { Card } from '../Card';
import { Spinner } from '../Spinner';
import './Cards.css';

const Cards = (props) => {
  const { openModal, setCurrentImg, isLoading, items = [] } = props;

  if (isLoading) {
    return <Spinner />;
  }

  return (
    <ul className="cards">
      {items.map((item) => (
        <Card
          key={item.id}
          imgUrl={`${item.url}.jpg`}
          imgAlt={item.alt_description}
          avatarUrl={`${item.user.profile_image}.webp`}
          avatarAlt={item.user.name}
          name={item.user.name}
          nick={item.user.username}
          posted={item.created_at}
          likes={item.likes}
          description={item.description}
          openModal={openModal}
          setCurrentImg={setCurrentImg}
        />
      ))}
    </ul>
  );
};

export { Cards };
