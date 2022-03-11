import React from 'react'
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

const index = ({ fund, eths, donateHandler }) => {
    const { title, img, info, eth } = fund
    return (
        <Card style={{ margin: "1%", width: "20%" }}>
            <CardMedia
                component="img"
                height="140"
                image={img}
                alt={title}
            />
            <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                    {title}
                </Typography>
                <Typography variant="body2" color="text.secondary" gutterBottom>
                    {info}
                </Typography>
                <Typography component="div" gutterBottom>
                    <img src="/src/eth.png" style={{ width: "20px", height: "20px" }} />
                    {eth}
                </Typography>
            </CardContent>
            <CardActions style={{ display: "flex", justifyContent: "center" }}>
                <Button size="large" variant="outlined" disabled={(eths >= eth) ? null : true} onClick={donateHandler}>Donate</Button>
            </CardActions>
        </Card>
    )
}

export default index