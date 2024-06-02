import React from 'react';
import {StyleSheet, Text, View} from 'react-native';

const List = ({data}) => {
  return data.map(dataItem => (
    <View key={dataItem} style={styles.listItem}>
      <Text style={styles.itemText}>{dataItem}</Text>
    </View>
  ));
};

export default List;

const styles = StyleSheet.create({
  listItem: {
    borderRadius: 6,
    paddingHorizontal: 8,
    paddingVertical: 4,
    marginVertical: 4,
    marginHorizontal: 12,
    backgroundColor: '#5f100f',
  },
  itemText: {
    textAlign: 'center',
    color: '#dfaadf',
    fontWeight: 'bold',
  },
});
