import React from 'react';
import {View, TouchableOpacity, TextInput, Text} from 'react-native';
import styles from './styles';

const Input = ({text, onButtonPress, ...props}) => {
  const containerStyle = [styles.container];

  if (props.editable === false) {
    containerStyle.push(styles.disabled);
  }
  return (
    <View style={containerStyle}>
      <TouchableOpacity style={styles.button} onPress={onButtonPress}>
        <Text style={styles.buttonText}>{text}</Text>
      </TouchableOpacity>
      <TextInput style={styles.input} {...props} />
    </View>
  );
};

export default Input;
