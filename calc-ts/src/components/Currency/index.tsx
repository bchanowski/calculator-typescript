import CurrencySelect from "./CurrencySelect";
import { SelectedPage } from "../../shared/types";
import { motion } from "framer-motion";
import { useState, useEffect } from "react";
import InputOnlyNumbers from "../../shared/InputOnlyNumbers";
import "./styles.scss";
import axios from "axios";

type Props = {
  setSelectedPage: (value: SelectedPage) => void;
};

interface Currency {
  [currency: string]: number;
}

const Currency = ({ setSelectedPage }: Props) => {
  const [currencyFrom, setCurrencyFrom] = useState("USD");
  const [currencyTo, setCurrencyTo] = useState("EUR");
  const [valueFrom, setValueFrom] = useState(1);
  const [valueTo, setValueTo] = useState<Currency>({});
  const BASE_URL_PART_1 = "https://api.apilayer.com/currency_data/live?base=";
  const BASE_URL_PART_2 = "&currencies=";
  const API_KEY = import.meta.env.VITE_API_KEY;

  const onCurrencyFromChange = () => {
    const selectedOption = document.getElementById(
      "idFrom"
    ) as HTMLSelectElement;
    setCurrencyFrom(selectedOption.value);
  };
  const onCurrencyToChange = () => {
    const selectedOption = document.getElementById("idTo") as HTMLSelectElement;
    setCurrencyTo(selectedOption.value);
  };
  const updateValue = (e: React.FormEvent<HTMLInputElement>) => {
    if (e.currentTarget.value) setValueFrom(parseFloat(e.currentTarget.value));
    else setValueFrom(1);
  };
  useEffect(() => {
    const URL = BASE_URL_PART_1 + currencyFrom + BASE_URL_PART_2 + currencyTo;
    const getData = async () => {
      const response = await axios.get(URL, {
        headers: { apikey: API_KEY },
      });
      setValueTo(response.data.quotes);
    };
    getData().catch(console.error);
  }, [currencyFrom, currencyTo, API_KEY]);
  return (
    <>
      <motion.div
        className="select-container"
        onViewportEnter={() => setSelectedPage(SelectedPage.Currency)}
      >
        <CurrencySelect
          selectId="idFrom"
          onChange={onCurrencyFromChange}
          defaultValue={currencyFrom}
        />
        <CurrencySelect
          selectId="idTo"
          onChange={onCurrencyToChange}
          defaultValue={currencyTo}
        />
        <InputOnlyNumbers value={valueFrom} updateValue={updateValue} />
        <input
          className="input-number"
          value={Object.values(valueTo)[0] * valueFrom}
          disabled
        />
      </motion.div>
    </>
  );
};

export default Currency;
