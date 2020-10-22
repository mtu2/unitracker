import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import styles from "./App.module.css";

import Navigation from "../Navigation/Navigation";
import Dashboard from "../Dashboard/Dashboard";

import { MuiPickersUtilsProvider } from "@material-ui/pickers";
import LuxonUtils from "@date-io/luxon";

function App() {
  return (
    <Router>
      <MuiPickersUtilsProvider utils={LuxonUtils}>
        <div className={styles.app}>
          <Navigation className={styles.navigation} />
          <Route path="/" exact component={Dashboard} />
        </div>
      </MuiPickersUtilsProvider>
    </Router>
  );
}

export default App;
