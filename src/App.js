import React from 'react';
import './App.css';
import SideMenu from "./components/SideMenu";
import { makeStyles, CssBaseline, createMuiTheme, ThemeProvider } from '@material-ui/core';
import Header from "./components/Header";
import PageHeader from "./components/PageHeader";

import Patient_Registration from "./pages/Patient_Registration/Patient_Registration";
import Patient_Event_Display from "./pages/Patient_Event_Display/Patient_Event_Display";
import Upcoming_Events_Display from "./pages/Upcoming_Events_Display/Upcoming_Events_Display";
import Patients_Event_Add_And_Edit from "./pages/Patient_Event_Add_And_Edit/Patient_Event_Add_And_Edit";
import {BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import {Link} from 'react-router-dom';

const theme = createMuiTheme({
  palette:{
    background:{
      default:"#f4f5fd"
    },
  },
  shape:{
    borderRadius:'12px'
  },
  overrides:{
    MuiAppBar:{
      root:{
        transform:'translateZ(0)'
      }
    }
  }
})

const useStyles = makeStyles({
  appMain:{
    paddingLeft:'320px',
    width:'100%'
  }
})

function App() {
  const classes = useStyles();

  return (
    <ThemeProvider theme={theme}>
     <SideMenu />
     <Router>
       <div className={classes.appMain}> 
         <Header />
         <Switch>
           <Route path="/" exact component={Home} />
           <Route path="/about" component={Patient_Event_Display} />
           <Route path="/shop" component={Patient_Registration} />
           <Route path="/shop1" component={Upcoming_Events_Display} />
           <Route path="/shop2" component={Patients_Event_Add_And_Edit} />
         </Switch>
         
         
       </div>
     </Router>
     <CssBaseline />
    </ThemeProvider>
  );
}

const Home = () => (
  <div>
    <h1>Welcome</h1>
    <Link to='/shop'>
      <h2>Register</h2>
    </Link>
    <Link to='/shop1'>
      <h2>Check Upcoming Events</h2>
    </Link>
    <Link to='/about'>
      <h2>Get all the details of a patient</h2>
    </Link>
    <Link to='/shop2'>
      <h2>Edit or Add an event for a patient</h2>
    </Link>

  </div>
);


export default App