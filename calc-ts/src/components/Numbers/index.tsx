import { SelectedPage } from "../../shared/types";
import { motion } from "framer-motion";
import NumbersButton from "./NumbersButton";
import { useState } from "react";

type Props = {
  setSelectedPage: (value: SelectedPage) => void;
};

const Numbers = ({ setSelectedPage }: Props) => {
  const [number, setNumber] = useState("");
  const [secondNumber, setSecondNumber] = useState("");
  const [sign, setSign] = useState("");

  const handleNumberClick = (num: string) => {
    if (num === "0" || num === ".") {
      if ((sign !== "" && secondNumber === "") || number === "") return;
      if (num === ".") {
        if (sign !== "" && secondNumber.indexOf(".") !== -1) return;
        else if (sign === "" && number.indexOf(".") !== -1) return;
      }
    }
    if (sign !== "") setSecondNumber(secondNumber + num);
    else setNumber(number + num);
  };
  const handleSignClick = (clickSign: string) => {
    if (sign === "") setSign(clickSign);
    else {
      getResult();
      setSign(clickSign);
    }
  };
  const handleResetClick = () => {
    setNumber("");
    setSecondNumber("");
    setSign("");
  };
  const handleResultClick = () => {
    if (sign !== "" && secondNumber !== "") getResult();
  };

  const getResult = () => {
    const number1 = parseFloat(number);
    const number2 = parseFloat(secondNumber);
    let result = 0;
    switch (sign) {
      case "+":
        result = number1 + number2;
        break;
      case "-":
        result = number1 - number2;
        break;
      case "*":
        result = number1 * number2;
        break;
      case "/":
        result = number1 / number2;
        break;
      default:
        return false;
    }
    setNumber(result.toString());
    setSecondNumber("");
    setSign("");
    return true;
  };
  return (
    <>
      <motion.div
        className="num-container"
        onViewportEnter={() => setSelectedPage(SelectedPage.Numbers)}
      >
        <div className="calc-background">
          <div className="input-column">
            <input
              className="calc-input"
              value={number + sign + secondNumber}
              disabled
            ></input>
            <NumbersButton
              addClass={"reset-btn"}
              content={"C"}
              onClick={handleResetClick}
            />
          </div>
          <div className="button-column">
            <NumbersButton
              content={"1"}
              onClick={() => handleNumberClick("1")}
            />
            <NumbersButton
              content={"2"}
              onClick={() => handleNumberClick("2")}
            />
            <NumbersButton
              content={"3"}
              onClick={() => handleNumberClick("3")}
            />
            <NumbersButton content={"+"} onClick={() => handleSignClick("+")} />
          </div>
          <div className="button-column">
            <NumbersButton
              content={"4"}
              onClick={() => handleNumberClick("4")}
            />
            <NumbersButton
              content={"5"}
              onClick={() => handleNumberClick("5")}
            />
            <NumbersButton
              content={"6"}
              onClick={() => handleNumberClick("6")}
            />
            <NumbersButton content={"-"} onClick={() => handleSignClick("-")} />
          </div>
          <div className="button-column">
            <NumbersButton
              content={"7"}
              onClick={() => handleNumberClick("7")}
            />
            <NumbersButton
              content={"8"}
              onClick={() => handleNumberClick("8")}
            />
            <NumbersButton
              content={"9"}
              onClick={() => handleNumberClick("9")}
            />
            <NumbersButton content={"*"} onClick={() => handleSignClick("*")} />
          </div>
          <div className="button-column">
            <NumbersButton
              content={"0"}
              onClick={() => handleNumberClick("0")}
            />
            <NumbersButton
              content={"."}
              onClick={() => handleNumberClick(".")}
            />
            <NumbersButton content={"="} onClick={handleResultClick} />
            <NumbersButton content={"/"} onClick={() => handleSignClick("/")} />
          </div>
        </div>
      </motion.div>
    </>
  );
};

export default Numbers;
