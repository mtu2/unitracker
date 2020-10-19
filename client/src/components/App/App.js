import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import styles from "./App.module.css";

import Navigation from "../Navigation/Navigation";
import Dashboard from "../Dashboard/Dashboard";
import SemesterBoard from "../SemesterBoard/SemesterBoard";
import CourseBoard from "../CourseBoard/CourseBoard";

function App() {
  return (
    <Router>
      <div className={styles.app}>
        <Navigation className={styles.navigation} />
        <div className={styles.page}>
          <Route path="/" exact component={Dashboard} />
          <Route path="/semesters" component={SemesterBoard} />
          <Route path="/courses" component={CourseBoard} />
        </div>
      </div>
    </Router>
  );
}

export default App;
