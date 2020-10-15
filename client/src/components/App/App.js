import React from "react";
import styles from "./App.module.css";

import Navigation from "../Navigation/Navigation";
import WelcomeMessage from "../WelcomeMessage/WelcomeMessage";
import Dashboard from "../Dashboard/Dashboard";

function App() {
  return (
    <div className={styles.app}>
      <Navigation className={styles.navigation} />
      <div className={styles.page}>
        <WelcomeMessage />
        <Dashboard />
      </div>
    </div>
  );
}

export default App;
