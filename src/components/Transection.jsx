import { Box, Divider, List, Typography } from '@material-ui/core'
import { makeStyles } from '@material-ui/styles'
import React from 'react'
import DisplayTransection from './DisplayTransection'
 
const useStyles = makeStyles({
    component:{
        '& > *':{
            marginBottom :10
        }
    }
})

const Transection = ({ transections, deleteTransection }) => {
    const classes = useStyles();
    return (
        <Box className={classes.component}>
            <Typography variant="h5">Transection History</Typography>
            <Divider/>
            <List>
                {
                    transections.map(transection =>{
                        return <DisplayTransection key={transection.id} transection={transection} deleteTransection={deleteTransection} />
                    })
                }
            </List>
        </Box>
    )
}

export default Transection
