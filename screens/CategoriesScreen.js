import React from 'react';
import {FlatList} from 'react-native';
import CategoryGridTile from '../components/CategoryGridTile';
import {CATEGORIES} from '../data/dummy-data';

// Alternative for Navigation
// import { useNavigation } from '@react-navigation/native';

const CategoriesScreen = ({navigation}) => {
  // Alternative for Navigation
  // const navigation = useNavigation()

  return (
    <FlatList
      data={CATEGORIES}
      keyExtractor={item => item.id}
      renderItem={item => (
        <CategoryGridTile
          title={item.item.title}
          color={item.item.color}
          onPress={() =>
            navigation.navigate('MealsOverview', {
              categoryId: item.item.id,
            })
          }
        />
      )}
      numColumns={2}
    />
  );
};

export default CategoriesScreen;
