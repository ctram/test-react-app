import React from 'react';
import '../styles/App.css';

import { BrowserRouter as Router, Route, Link } from "react-router-dom";

import Home from './Home'

function App() {
  return (
    <Router>
      <div>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
        </ul>

        <hr />

        <Route exact path="/" component={Home} />
      </div>
    </Router>
  );
}

export default App;
