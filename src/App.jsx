import { useState } from "react"
import Container from "@mui/material/Container"
import "./App.css"
import Alert from "./Components/Alert"
import Eth from "./eth.png"
import Wallet from './wallet.webp'
import HomePage from "./Pages/HomePage"
import FundsPage from "./Pages/FundsPage"


function App() {
  const [customerAddress, setCustomerAddress] = useState()
  const [eth, setEth] = useState();
  const connectWallet = async () => {
    try {
      if (window.ethereum) {
        const accounts = await window.ethereum.request({ method: "eth_requestAccounts" })
        setCustomerAddress(accounts[0])
      }
    } catch (err) {
      console.log(err)
    }
  }

  return (
    <Container maxWidth="xl">
      <div className="navbar">
        <h1>FündMe</h1>

        {customerAddress && (<>
          <div className="wallet">
            <img src={Wallet} />
            <p className="cut-text">{customerAddress}</p>
          </div>
          <div className="wallet">
            <img src={Eth} />
            <p>{eth}</p>
          </div>
        </>)
        }
      </div>
      {/* <Alert /> */}
      {!customerAddress && <HomePage connectWallet={connectWallet} />}
      {customerAddress && <FundsPage customerAddress={customerAddress} setEth={setEth} eth={eth} />}
    </Container>
  )
}

export default App
