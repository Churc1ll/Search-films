import React, { useState, useContext } from 'react';
import useFetch from './useFetch';

const AppContext = React.createContext();

const AppProvider = ({ children }) => {
  const [query, setQuery] = useState('search');
  const { error, data: movies, loading } = useFetch(`&s=${query}`);

  return (
    <AppContext.Provider value={{ loading, error, movies, query, setQuery }}>
      {children}
    </AppContext.Provider>
  );
};
export const useGlobalContext = () => {
  return useContext(AppContext);
};

export { AppContext, AppProvider };
