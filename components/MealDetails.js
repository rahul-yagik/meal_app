import React from 'react';
import {StyleSheet, Text, View} from 'react-native';

const MealDetails = ({
  duration,
  complexity,
  affordability,
  cusStyle,
  cusTextStyle,
}) => {
  return (
    <View style={[styles.details, cusStyle]}>
      <Text style={[styles.detailsText, cusTextStyle]}>{duration}m</Text>
      <Text style={[styles.detailsText, cusTextStyle]}>
        {complexity.toUpperCase()}
      </Text>
      <Text style={[styles.detailsText, cusTextStyle]}>
        {affordability.toUpperCase()}
      </Text>
    </View>
  );
};

export default MealDetails;

const styles = StyleSheet.create({
  details: {
    flexDirection: 'row',
    justifyContent: 'center',
    padding: 8,
  },
  detailsText: {
    fontSize: 12,
    marginHorizontal: 4,
  },
});
