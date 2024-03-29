import {createContext, useState} from 'react';

export const FavoritesContext = createContext({
  ids: [],
  addFavorite: id => {},
  removeFavorite: id => {},
});

export default function FavoritesContextProvider({children}) {
  const [facoriteMealIds, setFavoriteMealIds] = useState([]);

  const addFavorite = id => {
    setFavoriteMealIds(currentFavIds => [...currentFavIds, id]);
  };

  const removeFavorite = id => {
    setFavoriteMealIds(currentFavIds =>
      currentFavIds.filter(mealId => mealId != id),
    );
  };

  const value = {
    ids: facoriteMealIds,
    addFavorite: addFavorite,
    removeFavorite: removeFavorite,
  };

  return (
    <FavoritesContext.Provider value={value}>
      {children}
    </FavoritesContext.Provider>
  );
}
