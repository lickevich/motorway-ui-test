import { useRequest } from '../../hooks';
import Card from '../Card';
import './Cards.css';

const Cards = (props) => {
  const { openModal, setCurrentImg } = props;

  const items = useRequest('images?limit=10');

  return (
    <ul className="cards">
      {items?.map((item) => (
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

export default Cards;
