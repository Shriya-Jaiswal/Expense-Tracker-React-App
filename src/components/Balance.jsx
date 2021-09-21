import { Box, Typography , makeStyles } from '@material-ui/core'
import React from 'react'

const useStyles = makeStyles({
    balance:{
        fontSize:25,
        marginBottom:20
    }
})

const Balance = ({ transections }) => {
    const classes = useStyles();
    const amount = transections.map(transection => transection.amount);
    const total = amount.reduce((amount,item) => (amount+=item), 0).toFixed(2);
    return (
        <Box>
            <Typography className={classes.balance}>Balance ₹{total} </Typography>
        </Box>
    )
}

export default Balance
