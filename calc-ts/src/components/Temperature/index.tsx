import { SelectedPage } from "../../shared/types";
import { motion } from "framer-motion";
import SelectTemp from "./SelectTemp";
import "./styles.scss";
import { useState } from "react";

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
    calculateValue();
  };
  const onRadioChangeTo = (e: React.FormEvent<HTMLInputElement>) => {
    if (e.currentTarget.value === "C") setTempTo("C");
    else if (e.currentTarget.value === "K") setTempTo("K");
    else setTempTo("F");
    calculateValue();
  };

  const updateValue = (e: React.FormEvent<HTMLInputElement>) => {
    setUserValue(parseFloat(e.currentTarget.value));
    calculateValue();
  };

  const calculateValue = () => {
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
  };
  return (
    <>
      <motion.div
        className="temp-container"
        onViewportEnter={() => setSelectedPage(SelectedPage.Temperature)}
      >
        <h1>TEMPERATURE CALCULATOR</h1>
        <div className="temp-container">
          <SelectTemp
            radioName="tempFrom"
            stateTemp={tempFrom}
            onChangeTemp={onRadioChangeFrom}
          />
          <h1>TO</h1>
          <SelectTemp
            radioName="tempTo"
            stateTemp={tempTo}
            onChangeTemp={onRadioChangeTo}
          />
          <div>
            <input
              type="text"
              placeholder="0"
              onKeyDown={(event) => {
                if (!/[0-9]/.test(event.key)) {
                  event.preventDefault();
                }
              }}
              onChange={updateValue}
            />{" "}
            °{tempFrom}
            <input value={resultValue} disabled /> °{tempTo}
          </div>
        </div>
      </motion.div>
    </>
  );
};

export default Temperature;
