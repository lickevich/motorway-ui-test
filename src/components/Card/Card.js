import React, { useEffect, useRef, useState } from 'react';
import { getPublicationDate } from '../../utils';
import { useOnScreen } from '../../hooks';
import './Card.css';

const Card = (props) => {
  const {
    imgUrl,
    imgAlt,
    avatarUrl,
    avatarAlt,
    name,
    nick,
    posted,
    likes,
    description,
    openModal,
    setCurrentImg,
  } = props;

  const [isLoaded, setIsLoaded] = useState(false);
  const imgRef = useRef(null);
  const cardRef = useRef(null);
  const onScreen = useOnScreen(cardRef, '20px');

  const publicationDate = getPublicationDate(posted);
  const cardClassName = isLoaded ? 'card' : 'card is-loading';

  const onImgLoad = () => setIsLoaded(true);
  const handlePictureClick = () => {
    if (!isLoaded) return;

    setCurrentImg({
      url: imgUrl,
      alt: imgAlt,
    });
    openModal();
  };

  useEffect(() => {
    if (onScreen && imgRef.current) {
      imgRef.current.onload = onImgLoad;
    }
  }, [onScreen]);

  return (
    <li ref={cardRef} className={cardClassName}>
      <div className="card-user">
        <figure className="user-avatar">
          {onScreen && (
            <img
              ref={imgRef}
              className="user-avatar-img"
              src={avatarUrl}
              alt={`avatar-${avatarAlt}`}
            />
          )}
        </figure>
        <div className="user-info">
          <a className="user-name" href="#">
            {name}
          </a>
          <div className="user-nick">{`@${nick}`}</div>
        </div>
      </div>
      <div className="card-description">{description}</div>
      <figure className="card-picture" onClick={handlePictureClick}>
        {onScreen && (
          <img className="card-picture-img" src={imgUrl} alt={imgAlt} />
        )}
      </figure>
      <div className="card-statistics">
        <span className="card-publication-date">Posted: {publicationDate}</span>
        <span className="card-likes">Likes: {likes}</span>
      </div>
    </li>
  );
};

export { Card };
