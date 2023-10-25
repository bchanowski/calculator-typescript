import "./styles.scss";

type Props = {
  title?: string;
  description?: string;
};

const TextBox = ({ title, description }: Props) => {
  return (
    <div className="textbox-container">
      <h1 className="title-text">{title}</h1>
      <p className="desc-text">{description}</p>
    </div>
  );
};

export default TextBox;
