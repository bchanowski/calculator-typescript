import { SelectedPage } from "../../shared/types";
import { motion } from "framer-motion";
import SelectTemp from "./SelectTemp";
import "./styles.scss";
import { useState, useEffect } from "react";

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
    setUserValue(parseFloat(e.currentTarget.value));
  };

  const onlyNumberInput = (e: React.KeyboardEvent<object>) => {
    const key = parseInt(e.code);
    if (key && (key <= 47 || key >= 58) && key != 8) {
      e.preventDefault();
    } else if (e.code == "Backspace" && userValue.toString().length == 1) {
      setUserValue(0);
      e.preventDefault();
    }
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
    <>
      <motion.div
        className="temp-container"
        onViewportEnter={() => setSelectedPage(SelectedPage.Temperature)}
      >
        <h1 className="temp-title">TEMPERATURE CALCULATOR</h1>
        <div className="temp-container-select">
          <div className="select-temps-container">
            <SelectTemp
              radioName="tempFrom"
              stateTemp={tempFrom}
              onChangeTemp={onRadioChangeFrom}
            />
            <h1 className="temp-text">TO</h1>
            <SelectTemp
              radioName="tempTo"
              stateTemp={tempTo}
              onChangeTemp={onRadioChangeTo}
            />
          </div>
          <div className="temp-inputs-cont">
            <div className="temp-input-cont">
              <input
                className="temp-input"
                type="text"
                value={userValue}
                onKeyDown={onlyNumberInput}
                onChange={updateValue}
              />
              <a className="temp-unit-text">°{tempFrom}</a>
            </div>
            <div className="temp-input-cont">
              <input className="temp-input" value={resultValue} disabled />
              <a className="temp-unit-text">°{tempTo}</a>
            </div>
          </div>
        </div>
      </motion.div>
    </>
  );
};

export default Temperature;
