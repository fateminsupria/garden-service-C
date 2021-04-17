import React, { createContext, useState } from 'react';
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import Home from './components/Home/Home/Home';
import Login from './components/Login/Login/Login';
import Appointment from './components/Appointment/Appointment/Appointment';
import Dashboard from './components/Dashboard/Dashboard/Dashboard';
import AllClients from './components/AllClients/AllClients/AllClients';
import AddGardener from './components/AddGardener/AddGardener';
import PrivateRoute from './components/Login/PrivateRoute/PrivateRoute';


export const UserContext = createContext();
function App() {
  document.title = "Grasshopper Garden Service";
  
  const [loggedInUser, setLoggedInUser] = useState({});
  return (
    <UserContext.Provider value={[loggedInUser, setLoggedInUser]}>
    <Router>
    <Switch>
    <Route path="/appointment">
            <Appointment></Appointment>
          </Route>
          <PrivateRoute path="/dashboard">
            <Dashboard></Dashboard>
          </PrivateRoute>
          <PrivateRoute path="/allClients">
            <AllClients></AllClients>
          </PrivateRoute>
          <Route path="/addGardener">
            <AddGardener></AddGardener>
          </Route>
      <Route path="/login">
            <Login></Login>
          </Route>
          <Route exact path="/">
        <Home></Home>
      </Route>
    </Switch>
  </Router>
  </UserContext.Provider>
);
}

export default App;
