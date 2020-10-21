import React from "react";
import styles from "./Card.module.css";
import { formatDates } from "../../../utils/dates";

function Card(props) {
  return (
    <div className={styles.card} style={{ background: props.color }}>
      <p className={styles.subject}>{props.subject}</p>
      <p className={styles.description}>{props.description}</p>
      <p className={styles.dueDate}>{formatDates(props.dueDate)}</p>
    </div>
  );
}

export default Card;

// {
//   color: "#990099",
//   _id: "5f8ea6a8c0f4d23110ecc8aa",
//   subject: "FNCE30007 Derivative Securities",
//   description:
//     "Write notes and complete group projecet - talk to XYZ and solve",
//   dueDate: "2020-10-22T00:00:00.000Z",
// }
