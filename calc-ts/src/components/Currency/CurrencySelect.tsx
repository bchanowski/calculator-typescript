import { useEffect, useState } from "react";
import axios from "axios";

interface Currency {
  [currency: string]: string;
}

const CurrencySelect = () => {
  const BASE_URL = "https://api.apilayer.com/currency_data/list";
  const API_KEY = import.meta.env.VITE_API_KEY;
  const [currenciesList, setCurrenciesList] = useState<Currency>({});
  useEffect(() => {
    const getData = async () => {
      console.log(import.meta.env.VITE_API_KEY);
      const response = await axios.get(BASE_URL, {
        headers: { apikey: API_KEY },
      });
      setCurrenciesList(response.data.currencies);
    };
    getData().catch(console.error);
  }, []);
  return (
    <div>
      <select>
        {Object.entries(currenciesList).map(([currency, name]) => (
          <option key={currency}>{name}</option>
        ))}
      </select>
    </div>
  );
};

export default CurrencySelect;
