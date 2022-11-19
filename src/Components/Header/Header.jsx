import "./Header.css";
import React, { useState } from "react";
import { useContext } from "react";
import { TokenContext } from "../../context/context";

const Header = () => {
  const {
    connectWallet,
    disconnectWallet,
    walletAddress,
  } = useContext(TokenContext)
  // const [walletAddress, setWalletAddress] = useState(null);
  // // const [balance, setBalance] = useState("");
  // // const [pubkey, setPubkey] = useState("");



  // const checkIfWalletIsConnected = async () => {
  //   try {
  //     const { solana } = window;

  //     if (solana) {
  //       if (solana.isPhantom) {
  //         // console.log("Wallet Found");
  //         const response = await solana.connect({ onlyIfTrusted: true });
  //         // console.log(
  //         //   "connected with publickey:",
  //         //   response.publicKey.toString()
  //         // );
  //         setWalletAddress(response.publicKey.toString());
  //       }
  //     } else {
  //       alert("Get a phantom wallet")
  //       console.log("Get a phantom wallet");
  //     }
  //   } catch (error) {
  //     // console.error(error);
  //   }
  // };


  // const connectWallet = async () => {
  //   checkIfWalletIsConnected();
  //   const { solana } = window;
  //   if (solana) {
  //     const response = await solana.connect();
  //     // console.log("connected with public key", response.publicKey);
  //     setWalletAddress(response.publicKey.toString());
      
  //   }
  // };




  // const disconnectWallet = async () => {
  //   const { solana } = window;
  //   if (solana) {
  //     await solana.disconnect();
  //     setWalletAddress(null);

  //       // disconnectWallet()
  //   }
  // };

  return (
    // <button className="conn-wlt">Connect Wallet</button>
    <div className="header">
      <h2>Tokenize</h2>
      <div>
        {
          walletAddress ? 
            <button type="button" className="conn-wlt btn btn-primary float-right" onClick={disconnectWallet}>Disconnect Wallet</button>
            : <button type="button" className="conn-wlt btn btn-primary float-right" onClick={connectWallet}>Connect Wallet</button>
        }
        
      </div>
    </div>
  );
};

export default Header;
