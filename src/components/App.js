import React from 'react';
import { BrowserRouter as Router, Route, Switch, Link} from 'react-router-dom';
import Mainpage from '../containers/Mainpage.js'
import './App.css';
import Shop from '../containers/Shop';


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
      </Switch>
    </Router>
  );
}

export default App;