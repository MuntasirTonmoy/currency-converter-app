import React, {useContext} from 'react';
import {View, FlatList, Text, StyleSheet} from 'react-native';
import {RowItem, RowSeparator} from '../../components/RowItem/RowItem';
import currencies from '../../data/currencies.json';
import colors from '../../constant/colors';
import {ConversionContext} from '../../utilities/ConversionContext.js';

const styles = StyleSheet.create({
  selected: {
    height: 22,
    width: 22,
    backgroundColor: colors.blue,
    borderRadius: 11,
  },
  icon: {
    color: colors.white,
    fontSize: 14,
    textAlign: 'center',
  },
});

const CurrencyList = ({navigation, route = {}}) => {
  const {setBaseCurrency, setQuoteCurrency} = useContext(ConversionContext);
  const params = route.params || {};

  return (
    <View>
      <FlatList
        data={currencies}
        renderItem={({item}) => {
          const text = item.code + ' - ' + item.name;
          const selected = params.active === item.code;
          const currencyCode = item.code;
          return (
            <RowItem
              rightIcon={
                selected && (
                  <View style={styles.selected}>
                    <Text style={styles.icon}>✔</Text>
                  </View>
                )
              }
              onPress={() => {
                if (params.isBaseCurrency) {
                  setBaseCurrency(currencyCode);
                } else {
                  setQuoteCurrency(currencyCode);
                }
                navigation.navigate('Home');
              }}
              title={text}
            />
          );
        }}
        keyExtractor={item => item.code}
        ItemSeparatorComponent={() => <RowSeparator />}
      />
    </View>
  );
};

export default CurrencyList;
