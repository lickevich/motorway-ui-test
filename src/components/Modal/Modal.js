import { createPortal } from 'react-dom';
import './Modal.css';

const Modal = (props) => {
  const { isShowing, hide, content } = props;

  if (!isShowing) {
    return null;
  }

  return createPortal(
    <>
      <div className="modal-overlay" />
      <div className="modal-wrapper">
        <div className="modal">
          <div className="modal-header">
            <button type="button" className="modal-close-button" onClick={hide}>
              &times;
            </button>
          </div>
          <div className="modal-content">{content}</div>
        </div>
      </div>
    </>,
    document.body,
  );
};

export default Modal;
