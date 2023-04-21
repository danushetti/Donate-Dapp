import abi from "./contract/Donate.json";
import { useState, useEffect } from "react";
import { ethers } from "ethers";
import Buy from "./components/Buy";
import Memos from "./components/Memos";
import "./App.css";

function App() {
  const [state, setState] = useState({
    provider: null,
    signer: null,
    contract: null,
  });
  const [account, setAccount] = useState("None");
  useEffect(() => {
    const connectWallet = async () => {
      const contractAddress = "0xE08213633b7a3704Ba3B406B6Dcc5884Fb4CB7F5";
      const contractABI = abi.abi;
      try {
        const { ethereum } = window;

        if (ethereum) {
          const account = await ethereum.request({
            method: "eth_requestAccounts",
          });

          window.ethereum.on("chainChanged", () => {
            window.location.reload();
          });

          window.ethereum.on("accountsChanged", () => {
            window.location.reload();
          });

          const provider = new ethers.providers.Web3Provider(ethereum);
          const signer = provider.getSigner();
          const contract = new ethers.Contract(
            contractAddress,
            contractABI,
            signer
          );
          setAccount(account);
          setState({ provider, signer, contract });
        } else {
          alert("Please install metamask");
        }
      } catch (error) {
        console.log(error);
      }
    };
    connectWallet();
  }, []);
  // console.log(state);
  return (
    <div style={{ backgroundColor: "#1a2e4d", height: "100%" }}>
      <div>
       
      </div>
      <div
        style={{
          backgroundColor: "#1a2e4d",
          height: "100",
          flexDirection: "column",
        }}
      >
        <h1 style={{ padding: 30, textAlign: "center", color: "whitesmoke" }}>
          Donate ETH
        </h1>
        <p
          style={{
            color: "whitesmoke",
            paddingLeft: 80,
            paddingRight: 80,
            textAlign: "center",
            fontSize: 18,
            flexDirection: "column",
          }}
        >
          You need a Metamask wallet to donate..... Make sure your Metamask account is
          connected to the sepolia test network and has some ETH balance. The
          Details of the donation will be permanently stored on the sepolia
          test network (BLOCKCHAIN). This data can never be manipulated and also
          the transaction details can be verified on the Etherscan website
          through your account address.
        </p>
      </div>

      <div className="container">
        <p
          class=" lead "
          style={{
            marginTop: "0px",
            marginLeft: "280px",
            fontWeight: 400,
            color: "whitesmoke",
            paddingTop: 40,
          }}
        >
          <small>Connected Account - {account}</small>
        </p>
        <Buy state={state} />
        <Memos state={state} />
      </div>
    </div>
  );
}

export default App;
