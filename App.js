/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import 'react-native-gesture-handler';
import {NavigationContainer} from '@react-navigation/native';
import React from 'react';
import {
  SafeAreaView,
  StatusBar,
  StyleSheet,
  useColorScheme,
} from 'react-native';

import {createNativeStackNavigator} from '@react-navigation/native-stack';
import CategoriesScreen from './screens/CategoriesScreen';
import MealsOverviewScreen from './screens/MealsOverviewScreen';
import MealDetailsScreens from './screens/MealDetailsScreens';
import {createDrawerNavigator} from '@react-navigation/drawer';
import FavoritesScreen from './screens/FavoritesScreen';
import FavoritesContextProvider from './store/favrouites-context';

const Stack = createNativeStackNavigator();
const Drawer = createDrawerNavigator();

const DrawerNavigation = () => {
  return (
    <Drawer.Navigator
      screenOptions={{
        headerStyle: {backgroundColor: '#430c00'},
        headerTintColor: '#fff',
        sceneContainerStyle: {backgroundColor: '#430030'},
        drawerContentStyle: {backgroundColor: '#351401'},
        drawerInactiveTintColor: '#fff',
        drawerActiveTintColor: '#430c00',
        drawerActiveBackgroundColor: '#e4baa1',
      }}>
      <Drawer.Screen name="Categories" component={CategoriesScreen} />
      <Drawer.Screen name="Favorites" component={FavoritesScreen} />
    </Drawer.Navigator>
  );
};

const App = () => {
  const isDarkMode = useColorScheme() === 'dark';

  return (
    <SafeAreaView style={styles.root}>
      <StatusBar
        barStyle={isDarkMode ? 'light-content' : 'dark-content'}
        backgroundColor={'white'}
      />
      <FavoritesContextProvider>
        <NavigationContainer>
          <Stack.Navigator
            // For All Screens
            screenOptions={{
              headerStyle: {backgroundColor: '#430c00'},
              headerTintColor: '#fff',
              contentStyle: {backgroundColor: '#430030'},
            }}>
            <Stack.Screen
              name="Drawer"
              component={DrawerNavigation}
              options={{
                headerShown: false,
                // title: 'Category',
                // For single screens
                // headerStyle: {backgroundColor: '#430c00'},
                // headerTintColor: '#fff',
                // contentStyle: {backgroundColor: '#430030'},
              }}
            />
            <Stack.Screen
              name="MealsOverview"
              component={MealsOverviewScreen}
              // dyanamic title
              // options={({route, navigation}) => {
              //   const catId = route.params.categoryId;
              //   return {
              //     title: catId,
              //   };
              // }}
            />
            <Stack.Screen name="MealDetails" component={MealDetailsScreens} />
          </Stack.Navigator>
        </NavigationContainer>
      </FavoritesContextProvider>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  root: {
    flex: 1,
    backgroundColor: '#24180f',
  },
});

export default App;
