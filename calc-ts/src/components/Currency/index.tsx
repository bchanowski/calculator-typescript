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
  const BASE_URL_PART_1 = "https://api.apilayer.com/currency_data/live?source=";
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
    <section id="currency">
      <motion.div
        className="select-container"
        onViewportEnter={() => setSelectedPage(SelectedPage.Currency)}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.5 }}
        transition={{ duration: 0.5 }}
        variants={{
          hidden: { opacity: 0, x: -50 },
          visible: { opacity: 1, x: 0 },
        }}
      >
        <h1 className="container-title">EXCHANGE RATE</h1>
        <div className="exchange-container">
          <div className="select-currency-container">
            <h1 className="normal-text">FROM</h1>
            <CurrencySelect
              selectId="idFrom"
              onChange={onCurrencyFromChange}
              defaultValue={currencyFrom}
            />
            <h1 className="normal-text">TO</h1>
            <CurrencySelect
              selectId="idTo"
              onChange={onCurrencyToChange}
              defaultValue={currencyTo}
            />
          </div>
          <div className="currency-value-container">
            <h1 className="normal-text"></h1>
            <InputOnlyNumbers value={valueFrom} updateValue={updateValue} />
            <h1 className="normal-text">=</h1>
            <input
              className="input-number"
              value={
                Object.values(valueTo)[0]
                  ? Object.values(valueTo)[0] * valueFrom
                  : 0
              }
              disabled
            />
          </div>
        </div>
      </motion.div>
    </section>
  );
};

export default Currency;
