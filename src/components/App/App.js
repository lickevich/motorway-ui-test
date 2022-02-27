import { useCurrentImg, useModal } from '../../hooks';
import Form from '../Form';
import Cards from '../Cards';
import Modal from '../Modal';
import './App.css';

const App = () => {
  const { isShowing, toggle } = useModal();
  const { currentImg, setCurrentImg } = useCurrentImg();

  return (
    <>
      <div className="container">
        <div className="content">
          <div className="left-block">
            <Form />
          </div>
          <Cards openModal={toggle} setCurrentImg={setCurrentImg} />
        </div>
      </div>
      <Modal
        isShowing={isShowing}
        hide={toggle}
        content={
          <img
            className="full-size-img"
            src={currentImg.url}
            alt={currentImg.alt}
          />
        }
      />
    </>
  );
};

export default App;
