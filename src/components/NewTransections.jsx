import { Box, Button, makeStyles, TextField, Typography } from '@material-ui/core'
import React, { useState } from 'react'

const useStyles = makeStyles({
    container:{
        display:'flex',
        flexDirection :'column',
        '& > *':{
            marginTop:36
        }
    },
    button:{
        color:'#fff',
        // backgroundColor:"#445A6F"
        backgroundColor:"purple"
    }
})

const NewTransections = ({ addTransection }) => {
    const classes = useStyles();
    const [text, setText] = useState('')
    const [amount, setAmount] = useState()

    const newTransection = () =>{
        const transection ={
            id: Math.floor( Math.random() * 10000),
            text: text,
            amount: +amount
        }
        addTransection(transection);
    }

    return (
       <Box className={classes.container}>
           <Typography variant="h5">New Transection</Typography>
           <TextField label="Enter Expense" onChange={(e)=> setText(e.target.value)}/>
           <TextField label="Totel Amount" onChange={(e)=> setAmount(e.target.value)}/>
           <Button variant="contained" onClick={newTransection} className={classes.button}>Add New Transection</Button>
       </Box>
    )
}

export default NewTransections
