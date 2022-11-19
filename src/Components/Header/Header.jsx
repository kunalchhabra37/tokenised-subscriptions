import "./Header.css";

const Header = () => {
  return (
    // <button className="conn-wlt">Connect Wallet</button>
    <div className="header">
      <h2>Tokenize</h2>
      <div>
        <button type="button" className="conn-wlt btn btn-primary float-right">
          Connect Wallet
        </button>
      </div>
    </div>
  );
};

export default Header;
