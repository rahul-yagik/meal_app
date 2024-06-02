import React, {useContext} from 'react';
import {StyleSheet, Text, View} from 'react-native';
import MealsList from '../components/MealList/MealsList';
import {MEALS} from '../data/dummy-data';
import {FavoritesContext} from '../store/favrouites-context';

const FavoritesScreen = () => {
  const favoriteMealCtx = useContext(FavoritesContext);

  const favoriteMeal = MEALS.filter(meal =>
    favoriteMealCtx.ids.includes(meal.id),
  );

  if (favoriteMeal.length === 0) {
    return (
      <View style={styles.rootContainer}>
        <Text style={styles.text}>No You have no favorite meal yet.</Text>
      </View>
    );
  }

  return <MealsList items={favoriteMeal} />;
};

export default FavoritesScreen;

const styles = StyleSheet.create({
  rootContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#fff',
  },
});
