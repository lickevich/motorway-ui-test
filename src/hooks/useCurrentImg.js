import { useState } from 'react';

const useCurrentImg = () => {
  const [currentImg, setCurrentImg] = useState({});

  return {
    currentImg,
    setCurrentImg,
  };
};

export { useCurrentImg };
