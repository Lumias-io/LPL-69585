import React from "react";
import "./gamingheader.css";
import { RiSearchLine } from "react-icons/ri";
import { ethers } from "ethers";
import abi from "./MINTCONTRACT_ABI.js"

const Gamingheader = () => {
  const [address, setAddress] = React.useState("");
  // const [signer, setSigner] = React.useState("");
  const provider = new ethers.BrowserProvider(window.ethereum);

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

  return (
    <div className="gaming-header">
      <header>
        {false && <div className="gaming-header-search">
          <input placeholder="Search for games..."></input>
          <button className="gaming-header-search-button">
            <RiSearchLine className="searchline" />
          </button>
        </div>}
        {/* <div className="gaming-header-login">
          {!address && <button className="ethersButton" onClick={(e) => { connectWallet(e) }}>Connect</button>}
          {address && <button className="ethersButton" onClick={(e) => { disconnectWallet(e) }}>Disconnect</button>}
          {address && <button className="ethersButton" onClick={(e) => { mint(e) }}>Mint</button>}
          <span>{formatAddress(address)}</span>
        </div> */}
      </header>
    </div>
  );
};

export default Gamingheader;
