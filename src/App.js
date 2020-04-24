import React from 'react';
import './App.css';
import Search from "./components/home"
import Results from "./components/results"
import {BrowserRouter, Switch, Route} from "react-router-dom"

function App() {
  return (
    // <React.Fragment>
      <BrowserRouter>
        <Switch>
          <Route exact path="/" component={Search} />
          <Route path="/results" component={Results} />
        </Switch>
      </BrowserRouter>
    // </React.Fragment>
  );
}

export default App;
