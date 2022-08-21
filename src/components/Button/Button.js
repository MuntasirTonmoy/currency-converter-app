import React from 'react';
import {Text, TouchableOpacity, Image} from 'react-native';
import styles from './styles';

const Button = ({text, onPress}) => {
  return (
    <TouchableOpacity onPress={onPress} style={styles.button}>
      <Image
        source={require('../../assets/images/reverse.png')}
        style={styles.buttonIcon}
        resizeMode="contain"
      />
      <Text style={styles.buttonText}>{text}</Text>
    </TouchableOpacity>
  );
};

export default Button;
