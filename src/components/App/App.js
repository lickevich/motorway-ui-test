import React from 'react';
import { useRequest } from '../../hooks';
import './App.css';
import { Cards } from '../Cards';

const App = () => {
  const { data, isLoading } = useRequest('images?limit=10');

  return (
    <div className="container">
      <Cards items={data} isLoading={isLoading} />
    </div>
  );
};

export { App };
