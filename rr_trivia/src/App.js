import logo from './logo.svg';
import './App.css';
import React, {useState} from 'react';
import {Button, Grid} from '@material-ui/core';
import {createMuiTheme, ThemeProvider, makeStyles} from '@material-ui/core/styles';
import {green} from '@material-ui/core/colors';

const theme = createMuiTheme({
  typography: {
    button:{
      margin: '50px',
      height: '50px',
      fontSize: '18px',
      color:'white'
    },
    h3: {
      size:'10px',
    }
  },
  palette: {
    primary: green
  },
})

const useStyles = makeStyles((theme) => ({

  root: {
    flexGrow: 1,
  },
 
  paper: {
    padding: theme.spacing(2),
    textAlign: 'center',
    color: theme.palette.text.secondary,
    
  },
}));


function App() {
  const classes = useStyles();
  const [enter, setEnter] = useState(false);
  const [play, setPlay] =  useState(false);
  if(enter) {
    return (
     
      <div className="App">
         <ThemeProvider theme={theme}>
        <Grid >
        <header className="App-header">
          Ready to Play?
          
          <Button variant="contained" color="primary" onClick={() => {setPlay(true)}}>Play</Button>

         
        </header>
        </Grid>
        </ThemeProvider>
      </div>
     
    );
   
  } else {
    return (
      <div className="App">
      <ThemeProvider theme={theme}>
      <Grid 
      container 
      direction={"column"}
      spacing={4}>
      <header className="App-header">
        Rebel Rock Trivia
        <h3 > The trivia game where politics and music collide</h3> 
        
        <Button variant="contained" color="primary" onClick={() => {setEnter(true)}}>Enter</Button>
      </header>
      </Grid>
      </ThemeProvider>
    </div>
    )
  
  }
}

export default App;
