import "./styles.scss";

type Props = {
  content: string;
  addClass?: string;
  onClick: () => void;
};

const NumbersButton = ({ addClass, content, onClick }: Props) => {
  return (
    <button className={`${addClass} num-button`} onClick={onClick}>
      {content}
    </button>
  );
};

export default NumbersButton;
