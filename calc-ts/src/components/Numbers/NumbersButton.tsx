import "./styles.scss";

type Props = {
  number: number | string;
  onClick: () => void;
};

const NumbersButton = ({ number, onClick }: Props) => {
  return (
    <button className="num-button" onClick={onClick}>
      {number}
    </button>
  );
};

export default NumbersButton;
