import React, { useLayoutEffect } from "react";
import MealsList from "../components/MealList/MealsList";
import { CATEGORIES, MEALS } from "../data/dummy-data";

// Alternative for route
// import {useRoute} from '@react-navigation/native';

const MealsOverviewScreen = ({ route, navigation }) => {
  // Alternative for route
  // const route = useRoute()
  const catId = route.params.categoryId;

  // dynamic title
  useLayoutEffect(() => {
    const categoryTitle = CATEGORIES.find((cat) => cat.id === catId).title;
    navigation.setOptions({
      title: categoryTitle,
    });
  }, [catId, navigation]);

  const displayedMeal = MEALS.filter(
    (item) => item.categoryIds.indexOf(catId) >= 0
  );

  return <MealsList items={displayedMeal} />;
};

export default MealsOverviewScreen;
