import CurrencySelect from "./CurrencySelect";
import { SelectedPage } from "../../shared/types";
import { motion } from "framer-motion";

type Props = {
  setSelectedPage: (value: SelectedPage) => void;
};

const Currency = ({ setSelectedPage }: Props) => {
  return (
    <>
      <motion.div
        className="num-container"
        onViewportEnter={() => setSelectedPage(SelectedPage.Currency)}
      ></motion.div>
      <CurrencySelect />
    </>
  );
};

export default Currency;
