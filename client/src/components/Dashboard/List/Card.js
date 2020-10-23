import React from "react";
import styles from "./Card.module.css";

import DropdownMenu from "../../UI/DropdownMenu/DropdownMenu";
import DropdownMenuItem from "../../UI/DropdownMenu/DropdownMenuItem/DropdownMenuItem";
import { formatDates } from "../../../utils/dates";
import { textColorFromBgColor } from "../../../utils/colors";

import { ReactComponent as MoreHorizIcon } from "../../../assets/icons/more_horiz-24px.svg";
import { ReactComponent as EditIcon } from "../../../assets/icons/edit-20px.svg";
import { ReactComponent as DeleteIcon } from "../../../assets/icons/delete-20px.svg";

function Card(props) {
  return (
    <div
      className={styles.card}
      style={{
        background: props.color,
        color: textColorFromBgColor(props.color),
      }}
    >
      <DropdownMenu icon={<MoreHorizIcon />} className={styles.menu}>
        <DropdownMenuItem icon={<EditIcon />} text="Edit Card" />
        <DropdownMenuItem
          icon={<DeleteIcon />}
          text="Delete Card"
          styling="red"
          onClick={() => {
            console.log(props._id);
            props.deleteCard(props._id);
          }}
        />
      </DropdownMenu>
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
