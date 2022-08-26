import React, {createContext, useEffect, useState} from 'react';
export const ConversionContext = createContext();
import {API_KEY} from 'react-native-dotenv';
export const ConversionContextProvider = ({children}) => {
  const [baseCurrency, setBaseCurrency] = useState('USD');
  const [quoteCurrency, setQuoteCurrency] = useState('BDT');
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState('');
  const [reFetch, setReFetch] = useState(false);

  const swapCurrencies = () => {
    setBaseCurrency(quoteCurrency);
    setQuoteCurrency(baseCurrency);
  };

  const [rates, setRates] = useState({});

  useEffect(() => {
    setIsLoading(true);
    fetch(`https://v6.exchangerate-api.com/v6/${API_KEY}/latest/USD`)
      .then(res => res.json())
      .then(data => {
        setRates(data.conversion_rates);
        setReFetch(false);
        setError('');
        setIsLoading(false);
      })
      .catch(err => {
        setError(err);
        setReFetch(false);
        setIsLoading(false);
      });
  }, [reFetch]);

  const value = {
    baseCurrency,
    setBaseCurrency,
    quoteCurrency,
    setQuoteCurrency,
    swapCurrencies,
    rates,
    isLoading,
    error,
    setIsLoading,
    setReFetch,
  };
  return (
    <ConversionContext.Provider value={value}>
      {children}
    </ConversionContext.Provider>
  );
};
