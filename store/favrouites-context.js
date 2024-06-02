import {createContext, useState} from 'react';

export const FavoritesContext = createContext({
  ids: [],
  addFavorites: id => {},
  removeFavorites: id => {},
});

const FavoritesContextProvider = ({children}) => {
  const [favoriteMealIds, setFavoriteMealIds] = useState([]);

  const addFavorites = id => setFavoriteMealIds(prev => [...prev, id]);

  const removeFavorites = id =>
    setFavoriteMealIds(prev => prev.filter(mealId => mealId !== id));

  const value = {
    ids: favoriteMealIds,
    addFavorites,
    removeFavorites,
  };

  return (
    <FavoritesContext.Provider value={value}>
      {children}
    </FavoritesContext.Provider>
  );
};

export default FavoritesContextProvider;
