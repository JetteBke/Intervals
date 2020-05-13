import React from 'react';
import {BrowserRouter as Router, Route, Switch} from "react-router-dom";
import HomePage from "./components/HomePage";
import './App.css';

const App = () => {
  return (
    <div class="app-container">
      <Switch>
        <Route path="/" component={HomePage}/>
      </Switch>
    </div>
  );
};

const RoutedApp = () => {
    return (
        <Router>
            {App()}
        </Router>
    );
};

export {RoutedApp, App};