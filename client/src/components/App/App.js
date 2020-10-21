import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import styles from "./App.module.css";

import Navigation from "../Navigation/Navigation";
import Dashboard from "../Dashboard/Dashboard";

import "react-datetime/css/react-datetime.css"; // import css for datetime

function App() {
  return (
    <Router>
      <div className={styles.app}>
        <Navigation className={styles.navigation} />
        <Route path="/" exact component={Dashboard} />
      </div>
    </Router>
  );
}

export default App;
