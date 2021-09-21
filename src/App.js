import { Typography, makeStyles, Box } from '@material-ui/core';
import { useState } from 'react';
import './App.css';
import Balance from './components/Balance';
import ExpenseCard from './components/ExpenseCard';
import NewTransections from './components/NewTransections';
import Transection from './components/Transection';

const useStyles= makeStyles({
  header:{
    color:'purple',
    fontSize:35,
    margin:'10px auto',
    textTransform:'uppercase',
    
  },
  component:{
    background :"#fff",
    width:800,
    padding:10,
    borderRadius:20,
    display: 'flex',
    '& > *':{
      width:'50%',
      padding:10,
      height:'70vh'
    }
  }
})

function App() {
  const classes = useStyles();

  const [transections, setTransections] = useState([
    {id: 1, text: 'momos', amount: -20},
    {id: 2, text: 'salary', amount: 3000},
    {id: 3, text: 'Book', amount: -100},
    {id: 4, text: 'Bonus', amount: 1200}
  ]);

  const deleteTransection = (id) =>{
    setTransections(transections.filter(transection => transection.id !== id ));
  }

  const addTransection = (transection) =>{
    setTransections(transections => [transection, ...transections])
  }

  return (
    <div className="App">
      <Typography className={classes.header}>Expense Tracker </Typography>
      <Box className={classes.component}>
        <Box>
          <Balance transections={transections} />
          <ExpenseCard transections={transections}/>
          <NewTransections addTransection={addTransection}/>
        </Box>
        <Box>
          <Transection transections={transections} deleteTransection={deleteTransection}/>
        </Box>
      </Box>
    </div>
  );
}

export default App;
