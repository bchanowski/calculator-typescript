import { useEffect, useState } from "react";
import axios from "axios";
import "./styles.scss";

interface Currency {
  [currency: string]: string;
}

type Props = {
  selectId: string;
  defaultValue: string;
  onChange: () => void;
};
const CurrencySelect = ({ selectId, onChange, defaultValue }: Props) => {
  const [currenciesList, setCurrenciesList] = useState<Currency>({
    default: "---",
  });
  const BASE_URL = "https://api.apilayer.com/currency_data/list";
  const API_KEY = import.meta.env.VITE_API_KEY;
  useEffect(() => {
    const getData = async () => {
      const response = await axios.get(BASE_URL, {
        headers: { apikey: API_KEY },
      });
      setCurrenciesList(response.data.currencies);
    };
    getData().catch(console.error);
  }, [API_KEY]);
  return (
    <div className="select-container">
      <select
        id={selectId}
        className="input-number"
        onChange={onChange}
        value={defaultValue}
      >
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
