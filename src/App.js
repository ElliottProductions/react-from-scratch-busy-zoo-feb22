import './App.css';

import React from 'react';
import ZooPage from './ZooPage';
import AdminPage from './AdminPage';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from 'react-router-dom';



function App() {

  

  return (
    <Router>
      <div>
        <nav>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/admin">Admin</Link>
            </li>
          </ul>
        </nav>
      </div>
      <Switch>
        <Route path="/admin">
          <AdminPage />
        </Route>
        <Route path="/">
          <ZooPage />
        </Route>
      </Switch>
    </Router>
    
  );
}

export default App;
