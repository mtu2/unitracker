import React from "react";
import styles from "./Subject.module.css";

import DropdownMenu from "../../DropdownMenu/DropdownMenu";
import { ReactComponent as VertDotsIcon } from "../../../assets/icons/more_vert-20px.svg";
import { calcLetterGrade } from "../../../utils/grades";

function Subject(props) {
  const topLine = props.order > 0 ? styles.topLine : "";
  return (
    <div className={`${styles.subject} ${topLine}`}>
      <p className={styles.subjectCode}>{props.subjectCode}</p>
      <p className={styles.subjectName}>{props.subjectName}</p>
      <p className={styles.courseName}>{props.courseName}</p>
      <p className={styles.grade}>
        {props.grade}, {calcLetterGrade(props.grade)}
      </p>
      <DropdownMenu
        icon={<VertDotsIcon width="16" height="16" />}
        className={styles.menu}
      >
        <p>Edit subject</p>
      </DropdownMenu>
    </div>
  );
}

export default Subject;
