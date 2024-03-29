import {StyleSheet, View, Text} from 'react-native';

import MealsList from '../components/MealsList/MealsList';
import {MEALS} from '../data/dummy-data';
// import {useContext} from 'react';
// import {FavoritesContext} from '../store/context/favorites-context';
 import { useSelector } from 'react-redux';

export default function FavoriteScreen() {
  const favoriteMealIds = useSelector(state => state.favoriteMeals.ids);

  const favoriteMeals = MEALS.filter(meal =>
    favoriteMealIds.includes(meal.id),
  );

  if (favoriteMeals.length === 0) {
    return (
      <View style={styles.container}>
        <Text style={styles.text}> You have no favorite meals yet. </Text>
      </View>
    );
  }

  return <MealsList items={favoriteMeals} />;
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    fontSize: 18,
    fontWeight: 'bold',
    color: 'white',
  },
});
