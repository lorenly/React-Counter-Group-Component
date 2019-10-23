import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import GroupCounter from '../GroupCounter/GroupCounter';
import Counter from '../Counter/Counter(1)';

export default function HomePage() {
    return (
      <Router>
        <div>
          <ul>
            <li>
              <Link to="/home">Home</Link>
            </li>
            <li>
              <Link to="Counter">Counter</Link>
            </li>
            <li>
              <Link to="/CounterGroup">Counter Group</Link>
            </li>
          </ul>
  
          <hr />

          <Switch>
            <Route exact path="/home">
              <Home />
            </Route>
            <Route path="/Counter">
              <Counter />
            </Route>
            <Route path="/CounterGroup">
              <CounterGroup />
            </Route>
          </Switch>
        </div>
      </Router>
    );
  }
   
  function Home() {
    return (
      <div>
        <h2>Home</h2>
      </div>
    );
  }
  function Todo() {
    return (
      <div>
       <Counter/>
      </div>
    );
  }
  
  function CounterGroup() {
    return (
      <div>
       <GroupCounter defaultCounts={3}/>
      </div>
    );
  }
  