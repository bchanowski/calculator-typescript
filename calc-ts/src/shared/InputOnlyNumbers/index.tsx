import "./styles.scss";

type Props = {
  value: number;
  updateValue: (e: React.FormEvent<HTMLInputElement>) => void;
};

const InputOnlyNumbers = ({ value, updateValue }: Props) => {
  const onlyNumberInput = (e: React.KeyboardEvent<object>) => {
    const key = parseInt(e.code);
    if (key && (key <= 47 || key >= 58) && key != 8) {
      e.preventDefault();
    }
  };
  return (
    <input
      className="input-number"
      type="text"
      value={value}
      onKeyDown={onlyNumberInput}
      onChange={updateValue}
    />
  );
};

export default InputOnlyNumbers;
