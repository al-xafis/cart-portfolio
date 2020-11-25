import React from 'react';
import { BrowserRouter as Router, Route, Switch, Link} from 'react-router-dom';
import Mainpage from '../containers/Mainpage.js'
import './App.css';
import Shop from '../containers/Shop';
import Register from './Register/Register.js';
import Login from './Login/Login.js';


const App = () => {
  return (
    <Router>
      <Switch>
        <Route exact path="/">
          <Mainpage />
        </Route>
        <Route exact path="/shop">
          <Shop />
        </Route>
        <Route exact path="/login">
          <Login />
        </Route>
        <Route exact path="/register">
          <Register />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;