import React from 'react';
import { useCurrentImg, useModal, useRequest } from '../../hooks';
import { Cards } from '../Cards';
import { Modal } from '../Modal';
import './App.css';

const App = () => {
  const { data, isLoading } = useRequest('images?limit=10');
  const { isShowing, toggle } = useModal();
  const { currentImg, setCurrentImg } = useCurrentImg();

  const fullSizeImg = (
    <img
      className="full-size-img"
      src={currentImg.url}
      alt={currentImg.alt}
    />
  );

  return (
    <>
      <div className="container">
        <Cards
          items={data}
          isLoading={isLoading}
          openModal={toggle}
          setCurrentImg={setCurrentImg}
        />
      </div>
      <Modal isShowing={isShowing} hide={toggle} content={fullSizeImg} />
    </>
  );
};

export { App };
