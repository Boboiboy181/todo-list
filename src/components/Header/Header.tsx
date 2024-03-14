import "./styles.scss";

const Header = () => {
  return (
    <div className="header">
      <div className="header-container">
        <h1>Today</h1>
        <div className="input-container">
          <input type="text" placeholder="e.g. Do hackerrank" />
          <button>ADD TASK</button>
        </div>
      </div>
    </div>
  );
};

export default Header;
