import React, {useCallback, useContext, useLayoutEffect} from 'react';
import {Image, ScrollView, StyleSheet, Text, View} from 'react-native';
import IconButton from '../components/IconButton';
import List from '../components/MealDetail/List';
import SubTitle from '../components/MealDetail/SubTitle';
import MealDetails from '../components/MealDetails';
import {MEALS} from '../data/dummy-data';
import {FavoritesContext} from '../store/favrouites-context';

const MealDetailsScreens = ({route, navigation}) => {
  const favoriteMealCtx = useContext(FavoritesContext);

  const mealId = route.params.mealId;
  const selectedMeal = MEALS.find(meal => meal.id === mealId);

  const isFavrouiteMeal = favoriteMealCtx.ids.includes(mealId);

  const iconBtnPressHandler = useCallback(() => {
    if (isFavrouiteMeal) {
      favoriteMealCtx.removeFavorites(mealId);
    } else {
      favoriteMealCtx.addFavorites(mealId);
    }
  }, [mealId, isFavrouiteMeal, favoriteMealCtx]);

  useLayoutEffect(() => {
    navigation.setOptions({
      headerRight: () => (
        <IconButton isFav={isFavrouiteMeal} onPress={iconBtnPressHandler}>
          FAV
        </IconButton>
      ),
    });
  }, [navigation, iconBtnPressHandler, isFavrouiteMeal]);

  return (
    <ScrollView style={styles.rootContainer}>
      <Image source={{uri: selectedMeal.imageUrl}} style={styles.image} />
      <Text style={styles.title}>{selectedMeal.title}</Text>
      <MealDetails
        duration={selectedMeal.duration}
        complexity={selectedMeal.complexity}
        affordability={selectedMeal.affordability}
        cusTextStyle={styles.detailText}
      />
      <View style={styles.outerListContainer}>
        <View style={styles.listContainer}>
          <SubTitle>Ingredients</SubTitle>
          <List data={selectedMeal.ingredients} />

          <SubTitle>Steps</SubTitle>
          <List data={selectedMeal.steps} />
        </View>
      </View>
    </ScrollView>
  );
};

export default MealDetailsScreens;

const styles = StyleSheet.create({
  rootContainer: {
    marginBottom: 32,
  },
  image: {
    width: '100%',
    height: 200,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    margin: 8,
    textAlign: 'center',
    color: '#fff',
  },
  detailText: {
    color: '#fff',
  },
  outerListContainer: {
    alignItems: 'center',
  },
  listContainer: {
    maxWidth: '80%',
  },
});
