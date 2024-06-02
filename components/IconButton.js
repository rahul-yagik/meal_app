import React from 'react';
import {Pressable, StyleSheet, Text} from 'react-native';

const IconButton = ({children, onPress, isFav}) => {
  return (
    <Pressable
      style={({pressed}) => [
        styles.iconButton,
        isFav ? styles.favIconBtn : null,
        pressed ? styles.iconButtonPressed : null,
      ]}
      onPress={onPress}>
      <Text
        style={[
          styles.iconButtonText,
          isFav ? styles.favIconButtonText : null,
        ]}>
        {children}
      </Text>
    </Pressable>
  );
};

export default IconButton;

const styles = StyleSheet.create({
  iconButton: {
    backgroundColor: 'transparent',
    paddingVertical: 4,
    paddingHorizontal: 8,
    borderRadius: 8,
  },
  favIconBtn: {
    backgroundColor: '#ccc',
  },
  iconButtonPressed: {
    opacity: 0.7,
  },
  iconButtonText: {
    fontSize: 14,
    fontWeight: '400',
    color: '#fff',
  },
  favIconButtonText: {
    color: '#000',
    fontWeight: 'bold',
  },
});
