import React from 'react'
import Modal from '@mui/material/Modal';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import LinearProgress from '@mui/material/LinearProgress';
import Tick from "../../tick.png"

const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 400,
    bgcolor: 'rgba(255,255,255,0.8)',
    border: '1px solid #000',
    color: '#000',
    boxShadow: 24,
    p: 4,
    borderRadius: "15px",
    display: "flex",
    alignItems: "center",
    flexDirection: "column"
};


const index = ({ open, completed, error }) => {
    const handleClose = () => { }
    return (
        <div>
            <Modal
                open={open}
                onClose={handleClose}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
            >
                <Box sx={style}>
                    {
                        (!completed && !error) && (<>
                            <Typography id="modal-modal-title" variant="h6" component="h2">
                                Creating transaction...
                            </Typography>
                            <Box sx={{ width: '100%' }}>
                                <LinearProgress />
                            </Box>
                        </>)
                    }

                    {completed && <>
                        <Typography id="modal-modal-title" variant="h6" component="h2">
                            Transaction created
                        </Typography>
                        <Typography id="modal-modal-description" sx={{ mt: 2 }}>
                            Wait a few minutes, we're indexing the transaction
                        </Typography>
                        <img src={Tick} style={{ width: "300px", height: "300px" }} />
                    </>
                    }
                    {
                        error && <Typography id="modal-modal-title" variant="h6" component="h2">
                            Sorry, there was a problem. Try Later
                        </Typography>
                    }
                </Box>
            </Modal>
        </div>
    )
}

export default index