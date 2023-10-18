import "./styles.scss";

type Props = {
  content: string;
  onClick: () => void;
};

const NumbersButton = ({ content, onClick }: Props) => {
  return (
    <button className="num-button" onClick={onClick}>
      {content}
    </button>
  );
};

export default NumbersButton;
