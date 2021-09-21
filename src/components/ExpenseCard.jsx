import { Card, CardContent, Typography, makeStyles, Box } from '@material-ui/core'
import React from 'react'

const useStyles = makeStyles({
    container:{
        display:'flex',
        '& > *' :{
            padding:10,
            flex:1
        }
    },
    income:{
        color:'green'
    },
    expense:{
        color:'red'
    }
})

const ExpenseCard = ({transections}) => {
    const classes = useStyles(); 
    const amount = transections.map(transection => transection.amount);
    const income = amount.filter(item => item>0).reduce((acc, item) => (acc+=item),0).toFixed(2);
    const expense =(amount.filter(item => item<0).reduce((acc, item) => (acc+=item),0) * -1).toFixed(2);
    return (
        <>
            <Box className={classes.container}>
            <Card>
                <CardContent>
                    <Typography>Income</Typography>
                    <Typography className={classes.income}>₹{income}</Typography>
                </CardContent>
            </Card>
            <Card>
                <CardContent>
                    <Typography>Expense</Typography>
                    <Typography className={classes.expense}>₹{expense}</Typography>
                </CardContent>
            </Card>
            </Box>
        </>
    )
}

export default ExpenseCard
