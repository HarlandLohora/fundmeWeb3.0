import React from "react"
import { HPSpace } from "./styles"
import Button from "@mui/material/Button"
import Meta from "../../metamask.webp"
import Eth from "../../ether.svg"
const index = ({ connectWallet }) => {
    return (
        <HPSpace>
            <div>
                <h1>Fund amazing projects</h1>
                <p>Help people achieve their dreams.</p>
                <Button
                    variant="contained"
                    onClick={connectWallet}
                >
                    Connect wallet
                    <img
                        src={Meta}
                        style={{
                            width: "40px",
                        }}
                    />
                </Button>
            </div>
            <img
                src={Eth}
                alt="Ether"
            />
        </HPSpace>
    )
}

export default index
