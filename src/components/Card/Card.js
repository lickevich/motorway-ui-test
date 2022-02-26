import React, { useEffect, useRef, useState } from 'react';
import './Card.css';
import { getPublicationDate } from '../../utils';
import { useOnScreen } from '../../hooks';

const Card = (props) => {
  const {
    imageUrl,
    imageAlt,
    avatarUrl,
    avatarAlt,
    name,
    nick,
    publication,
    likes,
    description,
  } = props;

  const [isLoaded, setIsLoaded] = useState(false);
  const imgRef = useRef(null);
  const cardRef = useRef(null);
  const onScreen = useOnScreen(cardRef, '20px');

  const publicationDate = getPublicationDate(publication);
  const cardClassName = isLoaded ? 'card' : 'card is-loading';
  const onImgLoad = () => setIsLoaded(true);

  useEffect(() => {
    if (onScreen && imgRef.current) {
      imgRef.current.onload = onImgLoad;
    }
  }, [onScreen]);

  return (
    <li ref={cardRef} className={cardClassName}>
      <div className="card__user">
        <figure className="user__avatar">
          {onScreen && (
            <img
              ref={imgRef}
              className="user__avatar-img"
              src={avatarUrl}
              alt={`avatar-${avatarAlt}`}
            />
          )}
        </figure>
        <div className="user__info">
          <a className="user__name" href="#">
            {name}
          </a>
          <div className="user__nick">{`@${nick}`}</div>
        </div>
      </div>
      <div className="card__description truncate-overflow">{description}</div>
      <figure className="card__picture">
        {onScreen && (
          <img className="card__picture-img" src={imageUrl} alt={imageAlt} />
        )}
      </figure>
      <div className="card__statistics">
        <span className="card__publication-date">
          Posted: {publicationDate}
        </span>
        <span className="card__likes">Likes: {likes}</span>
      </div>
    </li>
  );
};

export { Card };
