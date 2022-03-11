import React from 'react'
import { ethers } from "ethers"
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';

const index = ({ fundsHistory }) => {
    return (
        <div> <TableContainer component={Paper}>
            <Table sx={{ minWidth: 650 }} aria-label="simple table">
                <TableHead>
                    <TableRow>
                        <TableCell align="center">ID</TableCell>
                        <TableCell align="center">Title</TableCell>
                        <TableCell align="center">Amount</TableCell>
                        <TableCell align="center">Donor Address</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {fundsHistory.map((fund, i) => {
                        const { id, title, value, donorOwner } = fund
                        return <TableRow
                            key={i}
                            sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                        >
                            <TableCell align="left">
                                {id}
                            </TableCell>
                            <TableCell align="left">
                                {title}
                            </TableCell>
                            <TableCell align="left">{ethers.utils.formatEther(value)}</TableCell>
                            <TableCell align="left">{donorOwner}</TableCell>
                        </TableRow>
                    })}
                </TableBody>
            </Table>
        </TableContainer></div>
    )
}

export default index