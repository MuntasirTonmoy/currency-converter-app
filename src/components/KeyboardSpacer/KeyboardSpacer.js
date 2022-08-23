import React, {useState, useEffect} from 'react';
import {View, Keyboard, StyleSheet} from 'react-native';

const KeyboardSpacer = ({onToggle}) => {
  const [keyboardSpace, setKeyboardSpace] = useState(0);
  const styles = StyleSheet.create({
    container: {
      bottom: 0,
      left: 0,
      right: 0,
    },
  });

  useEffect(() => {
    const showListener = Keyboard.addListener('keyboardDidShow', event => {
      setKeyboardSpace(5);

      onToggle(true);
    });

    const hideListener = Keyboard.addListener('keyboardDidHide', () => {
      setKeyboardSpace(0);
      onToggle(false);
    });

    return () => {
      showListener.remove();
      hideListener.remove();
    };
  }, [keyboardSpace, onToggle]);

  return <View style={[styles.container, {height: keyboardSpace}]} />;
};

export default KeyboardSpacer;
