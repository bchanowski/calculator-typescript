type Props = {
  radioName: string;
  stateTemp: string;
  onChangeTemp: (e: React.FormEvent<HTMLInputElement>) => void;
};

const SelectTemp = ({ radioName, stateTemp, onChangeTemp }: Props) => {
  return (
    <div>
      <div>
        <h3>CELSIUS</h3>
        <input
          type="radio"
          value="C"
          name={radioName}
          onChange={onChangeTemp}
          checked={stateTemp === "C"}
        />
      </div>
      <div>
        <h3>FAHRENHEIT</h3>
        <input
          type="radio"
          value="F"
          name={radioName}
          onChange={onChangeTemp}
          checked={stateTemp === "F"}
        />
      </div>
      <div>
        <h3>KELVIN</h3>
        <input
          type="radio"
          value="K"
          name={radioName}
          onChange={onChangeTemp}
          checked={stateTemp === "K"}
        />
      </div>
    </div>
  );
};

export default SelectTemp;
