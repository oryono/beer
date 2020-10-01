import React from 'react';
import {BrowserRouter as Router, Switch, Route} from "react-router-dom";
import Beer from "./pages/beer";
import Beers from "./pages/beers";
import {Todos} from "./pages/todos";

function App() {
  return (
    <Router>
      <Switch>
          <Route path="/" exact>
              {() => (<h1>Home</h1>)}
          </Route>
          <Route path="/beers/:id">
              <Beer/>
          </Route>
          <Route path="/beers">
              <Beers/>
          </Route>

          <Route path="/todos">
              <Todos/>
          </Route>
          <Route path="*">
              {() => <h1>Not found</h1>}
          </Route>
      </Switch>
    </Router>
  );
}

export default App;
