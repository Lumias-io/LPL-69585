import React, { useState } from "react";
import { ethers } from "ethers";

import "./tempstore.css";
import BuyButton from "./BuyButton";
import RedeemButton from "./RedeemButton";
import Lumias_card from "../../../assets/tempstore/Lumias_card.svg";
import Retro_card from "../../../assets/tempstore/Retro_card.svg";
import Warfare_card from "../../../assets/tempstore/Warfare_card.svg";
import individualPurchaseABI from "./MINTCONTRACT_ABI.js";
import bundlePurchaseABI from "./BUNDLECONTRACT_ABI.js";
import { toast } from 'react-toastify';
import bundle_promo from "../../../assets/tempstore/bundle_promo.png"

const TempStore = () => {
  const [address, setAddress] = React.useState("");
  // const [signer, setSigner] = React.useState("");
  const provider = new ethers.BrowserProvider(window.ethereum);
  const [showDetails, setShowDetails] = useState([false, false, false]);

  const connectWallet = async (e) => {
    await provider.send("eth_requestAccounts", []).catch((e) => {
      console.error("user did not connect");
      return;
    });

    const signer = await provider.getSigner()
    // setSigner(signer);
    const address = await signer.getAddress();
    // const message = "Sign this message to login. \nDate: " + (new Date).toISOString();
    // const signature = await signer.signMessage(message).catch((e) => {
    //   console.error("user did not sign");
    //   return
    // });
    setAddress(address);

    // console.log("signature", signature);
    //const verified = await ethers.verifyMessage(message, signature);
    //console.log(verified);
  }

  const disconnectWallet = (e) => {
    setAddress("");
  }

  // const mint = async (e) => {
  //   const contractAddress = "0x3B053D76f8f1d2ED55763f70D3DFd62267a557b3"
  //   const contract = new ethers.Contract(contractAddress, abi, signer);
  //   const purchase = await contract.purchase(1, { value: "100000000000000000" });
  //   console.log(purchase);
  //   // const nft = await contract.nft();
  //   // console.log(nft);

  // }

  const formatAddress = (address) => {
    if (address.length === 0) { return address }
    return address.substring(0, 8) + "..." + address.substring(32)
  }





  const purchase = async (e, contractAddress) => {
    connectWallet();

    //Get wallet on correct chain
    const connectedChainID = await provider.getNetwork();
    const findoraChainID = 2152;
    if (Number(connectedChainID.chainId) !== findoraChainID) {
      await window.ethereum.request({
        method: "wallet_addEthereumChain",
        params: [
          {
            chainId: "0x868",
            rpcUrls: ["https://rpc-mainnet.findora.org"],
            chainName: "Findora Mainnet",
            nativeCurrency: {
              name: "FRA",
              symbol: "FRA",
              decimals: 18,
            },
            blockExplorerUrls: ["https://evm.findorascan.io"],
          },
        ],
      });
    }

    //Get wallet to sign purchase contract
    const signer = await provider.getSigner();
    const connectedAddress = await signer.getAddress();
    const contract = new ethers.Contract(contractAddress, individualPurchaseABI, signer);
    const price = await contract.price();
    const balance = await provider.getBalance(connectedAddress);
    if (balance < price) {
      alert("You don't have enough FRA to mint");
      return;
    }

    toast.promise(contract.purchase(1, { value: price.toString() }), {
      pending: 'Generating Transaction',
      success: 'Transaction Generated',
      error: 'Failed to generate transaction'
    });
  };

  const purchaseBundle = async (e, contractAddress) => {
    connectWallet();


    //Get wallet on correct chain
    const connectedChainID = await provider.getNetwork();
    const findoraChainID = 2152;
    if (Number(connectedChainID.chainId) !== findoraChainID) {
      await window.ethereum.request({
        method: "wallet_addEthereumChain",
        params: [
          {
            chainId: "0x868",
            rpcUrls: ["https://rpc-mainnet.findora.org/"],
            chainName: "Findora Mainnet",
            nativeCurrency: {
              name: "FRA",
              symbol: "FRA",
              decimals: 18,
            },
            blockExplorerUrls: ["https://evm.findorascan.io/"],
          },
        ],
      });
    }

    //Get wallet to sign purchase contract
    const signer = await provider.getSigner();
    const connectedAddress = await signer.getAddress();
    const contract = new ethers.Contract(contractAddress, bundlePurchaseABI, signer);
    const price = await contract.price();
    const balance = await provider.getBalance(connectedAddress);
    if (balance < price) {
      alert("You don't have enough FRA to mint");
      return;
    }

    toast.promise(contract.buyBundle({ value: await contract.price() }), {
      pending: 'Generating Transaction',
      success: 'Transaction Generated',
      error: 'Failed to generate transaction'
    });
  };

  const toggleDetails = (index) => {
    const newDetails = [...showDetails];
    newDetails[index] = !newDetails[index];
    setShowDetails(newDetails);
  };

  return (
    <div className="tempstore">
      <div className="gaming-header-login">
        {!address && <button className="ethersButton" onClick={(e) => { connectWallet(e) }}>Connect</button>}
        {address && <button className="ethersButton" onClick={(e) => { disconnectWallet(e) }}>Disconnect</button>}
        {/* {address && <button className="ethersButton" onClick={(e) => { mint(e) }}>Mint</button>} */}
        <span>{formatAddress(address)}</span>
      </div>
      <h1>Store</h1>
      <div className="tempstore-content">
        <div className="tempstore-content-bundlespan">
          <span>Buy the bundle</span>
        </div>
        <div className="tempstore-content-bundle">
          {/* <img src="https://www.lumias.io/static/media/bundle-promo-2.png" alt="Bundle box" /> */}
          <img src={bundle_promo} alt="Bundle box" />
          <div className="bundle-details">
            <span style={{ color: "#207090", marginBottom:"20px" }}>Lumias launch bundle</span>
            <span style={{lineHeight: "30px"}}>
              By redeeming this bundle you can get 3 Lumias originals skins and
              a premium pass
            </span>
            <span style={{ marginTop: "55px" }}>25000 FRA</span>
          </div>
          <div className="bundle-redeem">
            <RedeemButton buttonText="Redeem the bundle" onClick={(e) => { purchaseBundle(e, '0x8E52DE9422b4Df9344292419509746c036Ad78c0'); }} />
          </div>
        </div>
        <div className="tempstore-content-skinspan">
          <span>Buy the individual skins</span>
        </div>
        <div className="tempstore-content-items">
          <div className="tempstore-col">
            <div
              className={`tempstore-item ${showDetails[1] ? "show-details" : ""
                }`}
              onMouseEnter={() => toggleDetails(1)}
              onMouseLeave={() => toggleDetails(1)}
            >
              <img
                src={Warfare_card}
                alt="Warfare Card"
                width="200px"
                className="glow-common"
              />
              {showDetails[1] && (
                <div className="product-details">
                  <span style={{ fontSize: "25px", color: "#87ceeb", marginBottom: "20px" }}>
                    Warfare Card
                  </span>
                  <span>
                    Common Lumias skin. Can be used across all in house Lumias
                    game
                  </span>
                  <span style={{ marginTop: "25px" }}>2500 FRA</span>
                </div>
              )}
              <BuyButton
                buttonText="Buy Warfare"
                onClick={(e) => {
                  purchase(e, "0xfbAe6cB363cFb86A4807385aD881f3C393E77578");
                }}
              />
            </div>
            <div
              className={`tempstore-item ${showDetails[2] ? "show-details" : ""
                }`}
              onMouseEnter={() => toggleDetails(2)}
              onMouseLeave={() => toggleDetails(2)}
            >
              <img
                src={Retro_card}
                alt="Retro Card"
                width="200px"
                className="glow-common"
              />
              {showDetails[2] && (
                <div className="product-details">
                  <span style={{ fontSize: "25px", color: "#87ceeb", marginBottom: "20px" }}>
                    Retro Card
                  </span>
                  <span>
                    Common Lumias skin. Can be used across all in house Lumias
                    game
                  </span>
                  <span style={{ marginTop: "25px" }}>2500 FRA</span>
                </div>
              )}
              <BuyButton
                buttonText="Buy Disco"
                onClick={(e) => {
                  purchase(e, "0x072c9C68446cc73E5bfcE8c96Ba9bA0C8be4A3C0");
                }}
              />
            </div>
          </div>
          <div className="tempstore-col">
            <div
              className={`tempstore-item ${showDetails[0] ? "show-details" : ""
                }`}
              onMouseEnter={() => toggleDetails(0)}
              onMouseLeave={() => toggleDetails(0)}
            >
              <img
                src={Lumias_card}
                alt="Lumias Card"
                width="200px"
                className="glow-legendary"
              />
              {showDetails[0] && (
                <div className="product-details">
                  <span style={{ fontSize: "25px", color: "yellow", marginBottom: "20px" }}>
                    Lumias card
                  </span>
                  <span>
                    Legendary Lumias skin. Can be used across all in house
                    Lumias game
                  </span>
                  <span style={{ marginTop: "25px" }}>10000 FRA</span>
                </div>
              )}
              <BuyButton
                buttonText="Buy Lumias"
                onClick={(e) => {
                  purchase(e, "0xF13cd5378877a715c1864c14cd756933232fB520");
                }}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TempStore;
