import { useEffect, useState } from 'react';

const useRequest = (url) => {
  const [data, setData] = useState();

  useEffect(() => {
    fetch(url)
      .then((res) => res.json())
      .then((resData) => {
        console.log('Success:', resData);
        setData(resData);
      })
      .catch((error) => {
        console.error('Error:', error);
      });
  }, [url]);

  return data;
};

export { useRequest };
