import React from "react";
import { Link } from "react-router-dom";
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
      <Link to="/" className={styles.logoLink}>
        <h1>UniTracker</h1>
      </Link>

      <ul>
        <li>
          <Link to="/" className={styles.itemLink}>
            <FontAwesomeIcon icon={faHome} className={styles.icon} />
            Dashboard
          </Link>
        </li>
      </ul>

      <div className={styles.navItemGroup}>
        <p>Analyse</p>
        <ul>
          <li>
            <Link to="/" className={styles.itemLink}>
              <FontAwesomeIcon icon={faBook} className={styles.icon} />
              Reports
            </Link>
          </li>
          <li>
            <Link to="/" className={styles.itemLink}>
              <FontAwesomeIcon icon={faChartLine} className={styles.icon} />
              Insights
            </Link>
          </li>
        </ul>
      </div>

      <div className={styles.navItemGroup}>
        <p>Manage</p>
        <ul>
          <li>
            <Link to="/semesters" className={styles.itemLink}>
              <FontAwesomeIcon icon={faCalendarDay} className={styles.icon} />
              Semesters
            </Link>
          </li>
          <li>
            <Link to="/" className={styles.itemLink}>
              <FontAwesomeIcon icon={faBookOpen} className={styles.icon} />
              Subjects
            </Link>
          </li>
          <li>
            <Link to="/courses" className={styles.itemLink}>
              <FontAwesomeIcon icon={faSchool} className={styles.icon} />
              Courses
            </Link>
          </li>
        </ul>
      </div>

      <div className={styles.navItemGroup}>
        <p>Customise</p>
        <ul>
          <li>
            <Link to="/" className={styles.itemLink}>
              <FontAwesomeIcon icon={faCog} className={styles.icon} />
              Settings
            </Link>
          </li>
          <li>
            <Link to="/" className={styles.itemLink}>
              <FontAwesomeIcon
                icon={faQuestionCircle}
                className={styles.icon}
              />
              Help
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Navigation;
