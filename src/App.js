import React, { Component } from "react";
import Web3 from "web3";
import "./App.css";

class App extends Component {
  componentWillMount() {
    this.loadBlockchainNetwork();
  }
  async loadBlockchainNetwork() {
    const web3 = new Web3(Web3.givenProvider || "http://localhost:8545");
    const network = await web3.eth.net.getNetworkType();
    const ethereum = window.ethereum;
    const enabledWeb3 = await ethereum.enable();
    const acc = await web3.eth.getAccounts();
    this.setState({ accounts: acc[0] });
  }

  constructor(props) {
    super(props);
    this.state = { accounts: "" };
  }

  render() {
    return (
      <div className="App">
        <h1>hello world</h1>
        <p>Your account: {this.state.accounts}</p>
      </div>
    );
  }
}

// function App() {
//   return (
//   );
// }

export default App;
