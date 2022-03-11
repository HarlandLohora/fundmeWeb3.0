import React, { useState, useEffect } from 'react'
import { ethers, utils } from "ethers"
import Card from "../../Components/Card"

import { FoundSpace } from "./styles"

import fundsArr from "./funds"

const index = ({ customerAddress, setEth, eth }) => {
    console.log(fundsArr)
    const [funds, setFunds] = useState([])
    const getBalance = async () => {
        try {
            const provider = new ethers.providers.Web3Provider(window.ethereum)
            const balance = await provider.getBalance(customerAddress)
            setEth(utils.formatEther(balance))
        } catch (error) {
            console.log(error)
        }
    }

    useEffect(() => {
        setFunds(fundsArr)
        getBalance()
    }, [])

    return (
        <FoundSpace>{funds.map((fund, i) => {
            return <Card key={i} fund={fund} eths={eth}></Card>
        })}</FoundSpace>
    )
}

export default index