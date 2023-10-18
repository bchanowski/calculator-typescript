import { SelectedPage } from "../../shared/types";
import { motion } from "framer-motion";
import NumbersButton from "./NumbersButton";

type Props = {
  setSelectedPage: (value: SelectedPage) => void;
};

const Numbers = ({ setSelectedPage }: Props) => {
  const handleNumberClick = () => {
    console.log("number test");
  };
  const handleSignClick = () => {
    console.log("sign test");
  };
  const handleResetClick = () => {
    console.log("reset test");
  };
  const handleResultClick = () => {
    console.log("result test");
  };
  return (
    <>
      <motion.div
        className="num-container"
        onViewportEnter={() => setSelectedPage(SelectedPage.Numbers)}
      >
        <div className="num-container">
          <NumbersButton number={1} onClick={handleNumberClick} />
          <NumbersButton number={2} onClick={handleNumberClick} />
          <NumbersButton number={3} onClick={handleNumberClick} />
          <NumbersButton number={"+"} onClick={handleSignClick} />
          <NumbersButton number={"-"} onClick={handleSignClick} />
        </div>
        <div className="num-container">
          <NumbersButton number={4} onClick={handleNumberClick} />
          <NumbersButton number={5} onClick={handleNumberClick} />
          <NumbersButton number={6} onClick={handleNumberClick} />
          <NumbersButton number={"*"} onClick={handleSignClick} />
          <NumbersButton number={"/"} onClick={handleSignClick} />
        </div>
        <div className="num-container">
          <NumbersButton number={7} onClick={handleNumberClick} />
          <NumbersButton number={8} onClick={handleNumberClick} />
          <NumbersButton number={9} onClick={handleNumberClick} />
          <NumbersButton number={"C"} onClick={handleResetClick} />
          <NumbersButton number={"="} onClick={handleResultClick} />
        </div>
      </motion.div>
    </>
  );
};

export default Numbers;
