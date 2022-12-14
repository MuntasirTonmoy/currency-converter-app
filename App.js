import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import React from 'react';
import About from './src/screen/About/About';
import CurrencyList from './src/screen/CurrencyList/CurrencyList';
import Home from './src/screen/Home/Home';
import {ConversionContextProvider} from './src/utilities/ConversionContext';

const App = () => {
  const Stack = createNativeStackNavigator();
  return (
    <>
      <ConversionContextProvider>
        <NavigationContainer>
          <Stack.Navigator>
            <Stack.Screen
              name="Home"
              component={Home}
              options={{headerShown: false}}
            />
            <Stack.Screen
              name="CurrencyList"
              component={CurrencyList}
              options={({route}) => ({
                title: route.params.title,
              })}
            />
            <Stack.Screen
              name="About"
              component={About}
              options={{title: 'About'}}
            />
          </Stack.Navigator>
        </NavigationContainer>
      </ConversionContextProvider>
    </>
  );
};

export default App;
