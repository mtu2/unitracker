import React from "react";
import styles from "./WelcomeMessage.module.css";
import { DAYS, MONTHS } from "../../../utils/dates";

const getTimeMessage = (name) => {
  const hour = new Date().getHours();
  if (hour <= 4 || 17 <= hour) return `Good evening, ${name}`;
  else if (5 <= hour <= 11) return `Good morning, ${name}`;
  else return `Good afternoon, ${name}`;
};

const getDateMessage = () => {
  const date = new Date();
  return `${DAYS[date.getDay()]}, ${date.getDate()} 
  ${MONTHS[date.getMonth()]} ${date.getFullYear()}`;
};

function WelcomeMessage() {
  return (
    <div className={styles.welcomeMessage}>
      <h1>{getTimeMessage("Michael")}</h1>
      <p>{getDateMessage()}</p>
    </div>
  );
}

export default WelcomeMessage;
