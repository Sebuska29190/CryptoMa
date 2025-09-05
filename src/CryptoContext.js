import React, { createContext, useContext, useEffect, useState } from "react";

// Tworzymy kontekst
const Crypto = createContext();

// Provider dla aplikacji
const CryptoContext = ({ children }) => {
  const [currency, setCurrency] = useState("USD");
  const [symbol, setSymbol] = useState("$");

  useEffect(() => {
    switch (currency) {
      case "USD":
        setSymbol("$");
        break;
      case "EUR":
        setSymbol("€");
        break;
      case "PLN":
        setSymbol("zł");
        break;
      default:
        setSymbol("$");
    }
  }, [currency]);

  return (
    <Crypto.Provider value={{ currency, setCurrency, symbol }}>
      {children}
    </Crypto.Provider>
  );
};

export default CryptoContext;

// Hook do używania kontekstu w komponentach
export const CryptoState = () => useContext(Crypto);
