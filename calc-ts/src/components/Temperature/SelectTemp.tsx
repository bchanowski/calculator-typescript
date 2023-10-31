import "./styles.scss";

type Props = {
  radioName: string;
  stateTemp: string;
  onChangeTemp: (e: React.FormEvent<HTMLInputElement>) => void;
};

const SelectTemp = ({ radioName, stateTemp, onChangeTemp }: Props) => {
  return (
    <div className="temp-radio-container">
      <label className="radio-label">
        <input
          className="radio-input"
          type="radio"
          value="C"
          name={radioName}
          onChange={onChangeTemp}
          checked={stateTemp === "C"}
        />
        CELSIUS
      </label>
      <label className="radio-label">
        <input
          className="radio-input"
          type="radio"
          value="F"
          name={radioName}
          onChange={onChangeTemp}
          checked={stateTemp === "F"}
        />
        FAHRENHEIT
      </label>
      <label className="radio-label">
        <input
          className="radio-input"
          type="radio"
          value="K"
          name={radioName}
          onChange={onChangeTemp}
          checked={stateTemp === "K"}
        />
        KELVIN
      </label>
    </div>
  );
};

export default SelectTemp;
