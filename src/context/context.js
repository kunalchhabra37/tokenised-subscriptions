import { createContext, useEffect, useState } from "react";
export const TokenContext = createContext();
const BN = require("bn.js");
const {
  Metaplex,
  keypairIdentity,
  bundlrStorage,
} = require("@metaplex-foundation/js");
const {
  Connection,
  clusterApiUrl,
  Keypair,
  PublicKey,
  
} = require("@solana/web3.js");
export const TokenProvider = ({ children }) => {  

    
    const [walletAddress, setWalletAddress] = useState(null);
    const [nftMintAddress, setNftMintAddress] = useState(null);
    const [subscriptionStatus, setSubscriptionStatus] = useState(null);
    
    const checkIfWalletIsConnected = async () => {
        try {
          const { solana } = window;
    
          if (solana) {
            if (solana.isPhantom) {
              // console.log("Wallet Found");
              const response = await solana.connect({ onlyIfTrusted: true });
              // console.log(
              //   "connected with publickey:",
              //   response.publicKey.toString()
              // );
              setWalletAddress(response.publicKey.toString());
            }
          } else {
            alert("Get a phantom wallet")
            console.log("Get a phantom wallet");
          }
        } catch (error) {
          // console.error(error);
        }
      };

      const connectWallet = async () => {
        checkIfWalletIsConnected();
        const { solana } = window;
        if (solana) {
          const response = await solana.connect();
          // console.log("connected with public key", response.publicKey);
          setWalletAddress(response.publicKey.toString());
          
        }
      };

      const disconnectWallet = async () => {
        const { solana } = window;
        if (solana) {
          await solana.disconnect();
          setWalletAddress(null);
    
            // disconnectWallet()
        }
      };

      const uploadNFT = async () => {

        const connection = new Connection(clusterApiUrl("devnet"));
        const metaplex = Metaplex.make(connection)

        let date = new Date(Date.now());
        date.setDate(date.getDate() + 30);
        
        const { uri } = await metaplex.nfts().uploadMetadata({
          name: "Subscription NFT Metadata",
          validity: date,
        });
      
        const { nft } = await metaplex.nfts().create({
          name: "Subscription NFT",
          isMutable: true,
          sellerFeeBasisPoints: 2000,
          uri: uri,
        });

        setNftMintAddress(nft.mint.address.toBase58());
      };

      const update = async () => {
        const connection = new Connection(clusterApiUrl("devnet"));
        const metaplex = Metaplex.make(connection)

        const mintAddress = new PublicKey("HWuS36hZAgp3Rc2zxZrevMJs4wj7owDS3i4QNuuSQVca"); // To be changed later to fetch nft from wallet
        const nft = await metaplex.nfts().findByMint({ mintAddress });

        setNftMintAddress(nft.mint.address.toBase58());

        let date = new Date(Date.now());
        date.setDate(date.getDate() + 30);

        const { uri } = await metaplex.nfts().uploadMetadata({
          ...nft.json,
          validity: date,
      });
      
      await metaplex.nfts().update({ 
          nftOrSft: nft,
          uri: uri
      });
      }

      const checkValidity = async () => {
        const connection = new Connection(clusterApiUrl("devnet"));
        const metaplex = Metaplex.make(connection)

        const mintAddress = new PublicKey("HWuS36hZAgp3Rc2zxZrevMJs4wj7owDS3i4QNuuSQVca");
        const nft = await metaplex.nfts().findByMint({ mintAddress });

        setNftMintAddress(nft.mint.address.toBase58());

        let validity = new Date(nft.json.validity);
        if (validity > new Date(Date.now())) {
          setSubscriptionStatus({
            valid: true,
            validity: validity
          })
        }else {
            setSubscriptionStatus({
                valid: false,
                validity: validity
              })
        }
      }

    return (
    
    <TokenContext.Provider
      value={{
        connectWallet,
        disconnectWallet,
        walletAddress, 
        uploadNFT,
        nftMintAddress,
        update,
        subscriptionStatus,
        checkValidity
      }}
    >
      {children}
    </TokenContext.Provider>
  );
};