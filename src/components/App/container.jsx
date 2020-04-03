import React from 'react';
import './App.css';
import PropTypes from 'prop-types';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from 'react-router-dom';
import Dashboard from '../Dashboard';
import PrivateRoute from '../PrivateRoute';
import Login from '../Login';


const App = (props) => {
  const { isAuthenticated, isVerifying } = props;
  return (
    <div className="App">
      <Router>
        <div>
          <Switch>
            <Route path="/login">
              <Login />
            </Route>
            <PrivateRoute
              path="/"
              component={Dashboard}
              isAuthenticated={isAuthenticated}
              isVerifying={isVerifying}
            />
          </Switch>
        </div>
      </Router>
    </div>
  );
};

App.propTypes = {
  isVerifying: PropTypes.bool.isRequired,
  isAuthenticated: PropTypes.bool.isRequired,
};

export default App;
