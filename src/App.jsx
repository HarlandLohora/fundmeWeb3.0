import { useState } from "react"
import Container from "@mui/material/Container"
import "./App.css"
import HomePage from "./Pages/HomePage"

function App() {
  const [customerAddress, setCustomerAddress] = useState("")

  const connectWallet = async () => {
    try {
      if (window.ethereum) {
        console.log("Connect wallet")
        const accounts =
          await window.ethereum.request(
            {
              method:
                "eth_requestAccounts",
            }
          )
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
      </div>
      <HomePage
        connectWallet={connectWallet}
      />
    </Container>
  )
}

export default App
