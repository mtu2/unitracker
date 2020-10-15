import React from "react";
import styles from "./Navigation.module.css";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBook,
  faBookOpen,
  faCalendarDay,
  faChartLine,
  faCog,
  faHome,
  faQuestionCircle,
  faSchool,
} from "@fortawesome/free-solid-svg-icons";

function Navigation() {
  return (
    <div className={styles.navigation}>
      <h1>UniTracker</h1>
      <ul>
        <li>
          <FontAwesomeIcon icon={faHome} className={styles.icon} />
          Dashboard
        </li>
      </ul>

      <div className={styles.navItemGroup}>
        <p>Analyse</p>
        <ul>
          <li>
            <FontAwesomeIcon icon={faBook} className={styles.icon} />
            Reports
          </li>
          <li>
            <FontAwesomeIcon icon={faChartLine} className={styles.icon} />
            Insights
          </li>
        </ul>
      </div>

      <div className={styles.navItemGroup}>
        <p>Manage</p>
        <ul>
          <li>
            <FontAwesomeIcon icon={faCalendarDay} className={styles.icon} />
            Semesters
          </li>
          <li>
            <FontAwesomeIcon icon={faBookOpen} className={styles.icon} />
            Subjects
          </li>
          <li>
            <FontAwesomeIcon icon={faSchool} className={styles.icon} />
            Courses
          </li>
        </ul>
      </div>

      <div className={styles.navItemGroup}>
        <p>Customise</p>
        <ul>
          <li>
            <FontAwesomeIcon icon={faCog} className={styles.icon} />
            Settings
          </li>
          <li>
            <FontAwesomeIcon icon={faQuestionCircle} className={styles.icon} />
            Help
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Navigation;
