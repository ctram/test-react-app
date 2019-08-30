import React from 'react';
import '../styles/App.css';

import { BrowserRouter as Router, Route, Link } from "react-router-dom";

import Home from './Home'
import SignInForm from './SignInForm';

function App() {
  return (
    <Router>
      <div>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/sign-in">Sign In</Link>
          </li>
        </ul>

        <hr />

        <Route exact path="/" component={Home} />
        <Route exact path="/sign-in" component={SignInForm} />
      </div>
    </Router>
  );
}

export default App;
