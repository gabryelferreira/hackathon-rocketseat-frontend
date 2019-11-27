import React from 'react';
import { Router as BrowserRouter, Route, Switch } from "react-router-dom";
import history from './services/history';
import Home from './pages/home';

function App() {
  return (
    <BrowserRouter history={history}>
      <Switch>
        <Route path="/" exact component={Home} />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
