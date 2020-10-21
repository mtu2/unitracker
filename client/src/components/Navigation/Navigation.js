import React from "react";
import styles from "./Navigation.module.css";
import { ReactComponent as ExpandMoreIcon } from "../../assets/icons/expand_more-24px.svg";
import { ReactComponent as BookmarksIcon } from "../../assets/icons/bookmarks-24px.svg";
import { ReactComponent as AddIcon } from "../../assets/icons/add-24px.svg";
import { ReactComponent as SettingsIcon } from "../../assets/icons/settings-24px.svg";
import { ReactComponent as InfoIcon } from "../../assets/icons/info-24px.svg";
import { ReactComponent as AccountIcon } from "../../assets/icons/perm_identity-24px.svg";

function Navigation() {
  return (
    <div className={styles.navigation}>
      <div className={styles.leftNavigation}>
        <div className={styles.logo}></div>
        <ul>
          <li className={styles.iconAndTextItem}>
            <ExpandMoreIcon className={styles.icon} />
            Dashboard
          </li>
        </ul>
      </div>
      <div className={styles.rightNavigation}>
        <ul>
          <li className={styles.iconAndTextItem}>
            <BookmarksIcon className={styles.icon} />
            Subjects
          </li>
          <li className={styles.iconAndTextItem}>
            <AddIcon className={styles.icon} />
            Add List
          </li>
          <li className={styles.iconItem}>
            <SettingsIcon className={styles.icon} />
          </li>
          <li className={styles.iconItem}>
            <InfoIcon className={styles.icon} />
          </li>
          <li className={styles.iconItem}>
            <AccountIcon className={styles.icon} />
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Navigation;
