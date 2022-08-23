import React, {useContext, useState} from 'react';
import {
  View,
  StatusBar,
  Image,
  Text,
  ScrollView,
  ActivityIndicator,
} from 'react-native';
import styles from './styles';
import colors from '../../constant/colors';
import Input from '../../components/Input/Input';
import Button from '../../components/Button/Button';
import KeyboardSpacer from '../../components/KeyboardSpacer/KeyboardSpacer';
import {ConversionContext} from '../../utilities/ConversionContext';

const Home = ({navigation}) => {
  const [value, setValue] = useState('1');
  const contextValue = useContext(ConversionContext);
  const {baseCurrency, quoteCurrency, swapCurrencies, rates, isLoading} =
    contextValue;
  const [scrollEnable, setScrollEnable] = useState(false);
  console.log(rates);

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
        {isLoading ? (
          <View>
            <ActivityIndicator
              size="large"
              color={colors.white}
              style={styles.loading}
            />
            <Text style={styles.loadingText}>Please Wait!</Text>
          </View>
        ) : (
          <>
            <View>
              <Text style={styles.logoText}>Currency Converter</Text>
              <Input
                text={baseCurrency}
                value={value}
                onButtonPress={() =>
                  navigation.navigate('CurrencyList', {
                    title: 'Base Currency',
                    active: baseCurrency,
                    isBaseCurrency: true,
                    //onChange: currency => setBaseCurrency(currency),
                  })
                }
                onChangeText={text => setValue(text)}
                keyboardType="numeric"
              />
              <Input
                text={quoteCurrency}
                value={
                  rates[baseCurrency] === 1
                    ? value &&
                      `${(
                        parseFloat(value) * parseFloat(rates[quoteCurrency])
                      ).toFixed(2)}`
                    : value &&
                      `${(
                        (parseFloat(value) * parseFloat(rates[quoteCurrency])) /
                        parseFloat(rates[baseCurrency])
                      ).toFixed(2)}`
                }
                onButtonPress={() =>
                  navigation.navigate('CurrencyList', {
                    title: 'Quote Currency',
                    active: quoteCurrency,
                    isBaseCurrency: false,
                    //onChange: currency => setQuoteCurrency(currency),
                  })
                }
                editable={false}
              />
              <Button text="Swap Currencies" onPress={swapCurrencies} />
            </View>
            <KeyboardSpacer
              onToggle={keyboardIsVisible => setScrollEnable(keyboardIsVisible)}
            />
          </>
        )}
      </ScrollView>
    </View>
  );
};

export default Home;
