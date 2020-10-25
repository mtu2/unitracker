import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import styles from "./App.module.scss";

import Navigation from "../Navigation/Navigation";
import Board from "../Board/Board";

import { MuiPickersUtilsProvider } from "@material-ui/pickers";
import LuxonUtils from "@date-io/luxon";

function App() {
  return (
    <Router>
      <MuiPickersUtilsProvider utils={LuxonUtils}>
        <div className={styles.app}>
          <Navigation className={styles.navigation} />
          <Route path="/" exact component={Board} />
        </div>
      </MuiPickersUtilsProvider>
    </Router>
  );
}

export default App;
