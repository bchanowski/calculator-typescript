import "./styles.scss";

const Navbar = () => {
  return (
    <>
      <div className="container">
        <div className="leftNav">CalcTS</div>
        <div className="rightNav">
          <p className="navOption">Numbers</p>
          <p className="navOption">Currency</p>
          <p className="navOption">Temperature</p>
        </div>
      </div>
    </>
  );
};

export default Navbar;
