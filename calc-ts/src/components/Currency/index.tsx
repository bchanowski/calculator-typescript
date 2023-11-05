import CurrencySelect from "./CurrencySelect";
import { SelectedPage } from "../../shared/types";
import { motion } from "framer-motion";
import { useState } from "react";
import InputOnlyNumbers from "../../shared/InputOnlyNumbers";
import "./styles.scss";

type Props = {
  setSelectedPage: (value: SelectedPage) => void;
};

const Currency = ({ setSelectedPage }: Props) => {
  const [currencyFrom, setCurrencyFrom] = useState("USD");
  const [currencyTo, setCurrencyTo] = useState("EUR");
  const [valueFrom, setValueFrom] = useState(1);
  const [valueTo, setValueTo] = useState();

  const onCurrencyFromChange = () => {
    const selectedOption = document.getElementById(
      "idFrom"
    ) as HTMLSelectElement;
    setCurrencyFrom(selectedOption.value);
  };
  const onCurrencyToChange = () => {
    const selectedOption = document.getElementById(
      "idFrom"
    ) as HTMLSelectElement;
    setCurrencyTo(selectedOption.value);
  };
  const updateValue = (e: React.FormEvent<HTMLInputElement>) => {
    setValueFrom(parseFloat(e.currentTarget.value));
    console.log(parseFloat(e.currentTarget.value));
  };
  return (
    <>
      <motion.div
        className="select-container"
        onViewportEnter={() => setSelectedPage(SelectedPage.Currency)}
      >
        <CurrencySelect selectId="idFrom" onChange={onCurrencyFromChange} />
        <CurrencySelect selectId="idTo" onChange={onCurrencyToChange} />
        <InputOnlyNumbers
          value={valueFrom}
          updateValue={updateValue}
          setValue={setValueFrom}
        />
        <input className="input-currency" value={valueTo} disabled />
      </motion.div>
    </>
  );
};

export default Currency;
