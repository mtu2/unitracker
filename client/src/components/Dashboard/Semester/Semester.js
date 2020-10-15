import React from "react";
import styles from "./Semester.module.css";

import Subject from "./Subject";
import DropdownMenu from "../../DropdownMenu/DropdownMenu";
import { ReactComponent as MenuIcon } from "../../../assets/icons/menu-20px.svg";
import { formatWAM, calcLetterGrade } from "../../../utils/grades";

function Semester(props) {
  const calcHeight = () => `${props.subjects.length * 50 + 50}px`;

  return (
    <div className={styles.semester} style={{ height: calcHeight() }}>
      <div className={styles.top}>
        <h2>{props.termName}</h2>
        <p>Semester WAM</p>
        <h3>
          {formatWAM(props.semesterWAM)}, {calcLetterGrade(props.semesterWAM)}
        </h3>
        <DropdownMenu icon={<MenuIcon />}>
          <p>Add subject</p>
          <p>Go to semester</p>
        </DropdownMenu>
      </div>
      {props.subjects.map((subjectData, index) => (
        <Subject key={index} order={index} {...subjectData} />
      ))}
    </div>
  );
}

export default Semester;
