import { useEffect, useState } from "react";
import axios from "axios";
import "./styles.scss";

interface Currency {
  [currency: string]: string;
}

type Props = {
  selectId: string;
  onChange: () => void;
};
const CurrencySelect = ({ selectId, onChange }: Props) => {
  const [currenciesList, setCurrenciesList] = useState<Currency>({
    option1: "abc",
    option2: "def",
  });
  /*/const BASE_URL = "https://api.apilayer.com/currency_data/list";
  const API_KEY = import.meta.env.VITE_API_KEY;
  useEffect(() => {
    const getData = async () => {
      console.log(import.meta.env.VITE_API_KEY);
      const response = await axios.get(BASE_URL, {
        headers: { apikey: API_KEY },
      });
      setCurrenciesList(response.data.currencies);
    };
    getData().catch(console.error);
  }, [API_KEY]); commented for now just to not fetch data so much/*/
  return (
    <div className="select-container">
      <select id={selectId} className="select-currency" onChange={onChange}>
        {Object.entries(currenciesList).map(([currency, name]) => (
          <option key={currency} value={currency}>
            {name}
          </option>
        ))}
      </select>
    </div>
  );
};

export default CurrencySelect;
