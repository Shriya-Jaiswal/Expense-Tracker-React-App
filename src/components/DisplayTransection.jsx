import { ListItem, ListItemIcon, ListItemText } from '@material-ui/core'
import { makeStyles } from '@material-ui/styles'
import DeleteIcon from '@material-ui/icons/Delete';
import React from 'react'

const useStyles = makeStyles({
    list:{
        marginTop:10,
        border:'1px solid #f6f6f6'
    }
})

const DisplayTransection = ({ transection, deleteTransection }) => {
    const classes = useStyles();
    const color = transection.amount >= 0 ? 'green' : 'red';
    const sign = transection.amount >=0 ? '₹' : '-₹';
    const amount = sign + Math.abs(transection.amount);

    return (
        <ListItem className={classes.list} style={{background:`${color}`,color:"#fff"}}>
            <ListItemIcon>
                <DeleteIcon onClick={() => deleteTransection(transection.id)}/>
            </ListItemIcon>
            <ListItemText primary={transection.text}/>
            <ListItemText primary={amount}/>
        </ListItem>
    )
}

export default DisplayTransection
