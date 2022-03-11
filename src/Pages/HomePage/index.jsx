import React from "react"
import { HPSpace } from "./styles"
import Button from "@mui/material/Button"

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
                        src="/src/metamask.webp"
                        style={{
                            width: "40px",
                        }}
                    />
                </Button>
            </div>
            <img
                src="/src/ether.svg"
                alt="Ether"
            />
        </HPSpace>
    )
}

export default index
