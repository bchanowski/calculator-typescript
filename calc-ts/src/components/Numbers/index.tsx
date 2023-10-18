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

  const handleNumberClick = (num: number) => {
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
        <input value={number + sign + secondNumber} disabled></input>
        <div className="num-container">
          <NumbersButton content={"1"} onClick={() => handleNumberClick(1)} />
          <NumbersButton content={"2"} onClick={() => handleNumberClick(2)} />
          <NumbersButton content={"3"} onClick={() => handleNumberClick(3)} />
          <NumbersButton content={"+"} onClick={() => handleSignClick("+")} />
          <NumbersButton content={"-"} onClick={() => handleSignClick("-")} />
        </div>
        <div className="num-container">
          <NumbersButton content={"4"} onClick={() => handleNumberClick(4)} />
          <NumbersButton content={"5"} onClick={() => handleNumberClick(5)} />
          <NumbersButton content={"6"} onClick={() => handleNumberClick(6)} />
          <NumbersButton content={"*"} onClick={() => handleSignClick("*")} />
          <NumbersButton content={"/"} onClick={() => handleSignClick("/")} />
        </div>
        <div className="num-container">
          <NumbersButton content={"7"} onClick={() => handleNumberClick(7)} />
          <NumbersButton content={"8"} onClick={() => handleNumberClick(8)} />
          <NumbersButton content={"9"} onClick={() => handleNumberClick(9)} />
          <NumbersButton content={"C"} onClick={handleResetClick} />
          <NumbersButton content={"="} onClick={handleResultClick} />
        </div>
      </motion.div>
    </>
  );
};

export default Numbers;
