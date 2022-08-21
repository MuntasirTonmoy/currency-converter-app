import React, {useState} from 'react';
import {View, StatusBar, Image, Text, ScrollView} from 'react-native';
import styles from './styles';
import colors from '../../constant/colors';
import Input from '../../components/Input/Input';
import Button from '../../components/Button/Button';
import KeyboardSpacer from '../../components/KeyboardSpacer/KeyboardSpacer';

const Home = () => {
  const [scrollEnable, setScrollEnable] = useState(false);
  return (
    <View style={styles.container}>
      <ScrollView scrollEnabled={scrollEnable}>
        <StatusBar barStyle="light-content" backgroundColor={colors.blue} />
        <View style={styles.content} />
        <View style={styles.logoContainer}>
          <Image
            source={require('../../assets/images/background.png')}
            style={styles.logoBackground}
            resizeMode="contain"
          />
          <Image
            source={require('../../assets/images/logo.png')}
            style={styles.logo}
            resizeMode="contain"
          />
        </View>
        <View>
          <Text style={styles.logoText}>Currency Converter</Text>
          <Input
            text="USD"
            placeholder="123"
            onButtonPress={() => alert('todo')}
            onChangeText={text => console.log(text)}
            keyboardType="numeric"
          />
          <Input
            text="BDT"
            placeholder="123"
            onButtonPress={() => alert('todo')}
            editable={false}
          />
          <Button text="Reverse Currencies" onPress={() => alert('test')} />
        </View>
        <KeyboardSpacer
          onToggle={keyboardIsVisible => setScrollEnable(keyboardIsVisible)}
        />
      </ScrollView>
    </View>
  );
};

export default Home;
