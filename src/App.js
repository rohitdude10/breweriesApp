
import "./App.css";
import React from "react";

import Navbar from "./component/Navbar";
import Homepage from "./Homepage";
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Breweries_detail from "./Breweries_detail"

function App() {
  return (
    <div className="App">
      <Navbar />
      <BrowserRouter>
        <Switch>
          <Route exact path="/">
            <Homepage />
          </Route>
          <Route path="/detail">
            <Breweries_detail/>

          </Route>
        </Switch>
        
      </BrowserRouter>
    </div>
  );
}

export default App;
