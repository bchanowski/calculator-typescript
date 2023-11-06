import { SelectedPage } from "../../shared/types";
import { motion } from "framer-motion";
import SelectTemp from "./SelectTemp";
import "./styles.scss";
import { useState, useEffect } from "react";
import InputOnlyNumbers from "../../shared/InputOnlyNumbers";

type Props = { setSelectedPage: (value: SelectedPage) => void };

const Temperature = ({ setSelectedPage }: Props) => {
  const [tempFrom, setTempFrom] = useState("C");
  const [tempTo, setTempTo] = useState("F");
  const [userValue, setUserValue] = useState(0);
  const [resultValue, setResultValue] = useState(32);

  const onRadioChangeFrom = (e: React.FormEvent<HTMLInputElement>) => {
    if (e.currentTarget.value === "C") setTempFrom("C");
    else if (e.currentTarget.value === "K") setTempFrom("K");
    else setTempFrom("F");
  };
  const onRadioChangeTo = (e: React.FormEvent<HTMLInputElement>) => {
    if (e.currentTarget.value === "C") setTempTo("C");
    else if (e.currentTarget.value === "K") setTempTo("K");
    else setTempTo("F");
  };

  const updateValue = (e: React.FormEvent<HTMLInputElement>) => {
    if (e.currentTarget.value) setUserValue(parseFloat(e.currentTarget.value));
    else setUserValue(0);
  };

  useEffect(() => {
    if (tempFrom !== tempTo) {
      if (tempFrom === "C") {
        if (tempTo === "K") setResultValue(userValue * 1.8 + 32);
        else if (tempTo === "F") setResultValue(userValue + 273.15);
      } else if (tempFrom === "F") {
        if (tempTo === "C") setResultValue((userValue - 32) / 1.8);
        else if (tempTo === "K") setResultValue((5 / 9) * (userValue + 459.67));
      } else if (tempFrom === "K") {
        if (tempTo === "C") setResultValue(userValue - 273.15);
        else if (tempTo === "F") setResultValue(userValue * 1.8 - 459.67);
      }
    } else setResultValue(userValue);
  }, [userValue, tempFrom, tempTo]);
  return (
    <section id="temperature">
      <motion.div
        className="temp-container"
        onViewportEnter={() => setSelectedPage(SelectedPage.Temperature)}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.5 }}
        transition={{ duration: 0.5 }}
        variants={{
          hidden: { opacity: 0, x: -50 },
          visible: { opacity: 1, x: 0 },
        }}
      >
        <h1 className="container-title">TEMPERATURE CALCULATOR</h1>
        <div className="temp-container-select">
          <div className="select-temps-container">
            <SelectTemp
              radioName="tempFrom"
              stateTemp={tempFrom}
              onChangeTemp={onRadioChangeFrom}
            />
            <h1 className="normal-text">TO</h1>
            <SelectTemp
              radioName="tempTo"
              stateTemp={tempTo}
              onChangeTemp={onRadioChangeTo}
            />
          </div>
          <div className="temp-inputs-cont">
            <div className="temp-input-cont">
              <InputOnlyNumbers value={userValue} updateValue={updateValue} />
              <a className="temp-unit-text">°{tempFrom}</a>
            </div>
            <div className="temp-input-cont">
              <input className="input-number" value={resultValue} disabled />
              <a className="temp-unit-text">°{tempTo}</a>
            </div>
          </div>
        </div>
      </motion.div>
    </section>
  );
};

export default Temperature;
