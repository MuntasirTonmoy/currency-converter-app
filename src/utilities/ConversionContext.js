import React, {createContext, useEffect, useRef, useState} from 'react';
export const ConversionContext = createContext();
import {API_KEY} from 'react-native-dotenv';
export const ConversionContextProvider = ({children}) => {
  const [baseCurrency, setBaseCurrency] = useState('USD');
  const [quoteCurrency, setQuoteCurrency] = useState('BDT');
  const [isLoading, setIsLoading] = useState(true);
  const swapCurrencies = () => {
    setBaseCurrency(quoteCurrency);
    setQuoteCurrency(baseCurrency);
  };

  const currentRates = useRef({});

  useEffect(() => {
    setIsLoading(true);
    fetch(`https://v6.exchangerate-api.com/v6/${API_KEY}/latest/USD`)
      .then(res => res.json())
      .then(data => {
        currentRates.current = data.conversion_rates;
        setIsLoading(false);
      });
  }, [rates]);
  const rates = currentRates.current;
  console.log(rates);
  const value = {
    baseCurrency,
    setBaseCurrency,
    quoteCurrency,
    setQuoteCurrency,
    swapCurrencies,
    rates,
    isLoading,
  };
  return (
    <ConversionContext.Provider value={value}>
      {children}
    </ConversionContext.Provider>
  );
};
