import { useEffect, useState } from 'react';

const useModal = () => {
  const [isShowing, setIsShowing] = useState(false);
  const toggle = () => setIsShowing(!isShowing);

  useEffect(() => {
    if (isShowing) {
      document.body.classList.add('modal-open');
    } else {
      document.body.classList.remove('modal-open');
    }
  }, [isShowing]);

  return {
    isShowing,
    toggle,
  };
};

export { useModal };
