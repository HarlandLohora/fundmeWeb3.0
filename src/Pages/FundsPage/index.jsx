import React, { useState, useEffect } from 'react'
import ShortUniqueId from "short-unique-id"
import { ethers, utils } from "ethers"

import Card from "../../Components/Card"
import Table from "../../Components/Table"
import Modal from '../../Components/Modal'

import abi from "../../Contracts/FundContract.json"
import { FoundSpace, CardsSpace } from "./styles"

import fundsArr from "./funds"


const index = ({ customerAddress, setEth, eth }) => {
    const [funds, setFunds] = useState([])
    const [open, setOpen] = useState(false);
    const [completed, setCompleted] = useState()
    const [error, setError] = useState()
    const [fundsHistory, setFundsHistory] = useState([])

    const contractAddress = "0x44559d3A2B3B5FafedbfCDA3Ca99F90597c3e05B"
    const contractABI = abi.abi

    const getInfo = async () => {
        try {
            const provider = new ethers.providers.Web3Provider(window.ethereum)
            const signer = provider.getSigner()
            const fundContract = new ethers.Contract(contractAddress, contractABI, signer)
            const balance = await provider.getBalance(customerAddress)
            const funds = await fundContract.allFunds()
            setFundsHistory(funds)
            setEth(utils.formatEther(balance))
        } catch (error) {
            console.log(error)
        }
    }


    const donateHandler = async (i) => {
        try {
            setOpen(true)
            const { id, eth, title } = funds[i]
            const uid = new ShortUniqueId({ length: 10 });
            const provider = new ethers.providers.Web3Provider(window.ethereum)
            const signer = provider.getSigner()
            const fundContract = new ethers.Contract(contractAddress, contractABI, signer)
            const ID = id + "-" + uid()
            const txn = await fundContract.addFund(ID, ethers.utils.parseEther(eth), title)
            if (txn) {
                setCompleted(true)
                setTimeout(() => {
                    setCompleted(false)
                    setOpen(false)
                }, 2500)
            }
            getInfo()
        } catch (error) {
            setError(true)
            setCompleted()
            setTimeout(() => {
                setOpen(false)
                setError(false)
            }, 2500)
        }
    }


    useEffect(async () => {
        setFunds(fundsArr)
        getInfo()
    }, [])



    return (
        <FoundSpace>
            <CardsSpace>
                {
                    funds.map((fund, i) => {
                        return <Card key={i} fund={fund} eths={eth} donateHandler={() => donateHandler(i)}></Card>
                    })
                }
            </CardsSpace>
            <div>
                <Table fundsHistory={fundsHistory}></Table>
            </div>

            <Modal open={open} completed={completed} error={error} />
        </FoundSpace>
    )
}

export default index