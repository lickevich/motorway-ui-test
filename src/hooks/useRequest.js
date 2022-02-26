import { useEffect, useState } from 'react';

const useRequest = (url) => {
  const [data, setData] = useState();
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    setIsLoading(true);
    fetch(url)
      .then((res) => res.json())
      .then((resData) => {
        console.log('Success:', resData);
        setData(resData);
      })
      .catch((error) => {
        console.error('Error:', error);
      })
      .finally(() => setIsLoading(false));
  }, [url]);

  return { data, isLoading };
};

export { useRequest };
