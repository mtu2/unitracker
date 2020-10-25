import React, { useState } from "react";
import styles from "./Card.module.scss";

import DropdownMenu from "../../../UI/DropdownMenu/DropdownMenu";
import DropdownMenuItem from "../../../UI/DropdownMenu/DropdownMenuItem/DropdownMenuItem";
import { formatDates } from "../../../../utils/dates";
import { textColorFromBgColor } from "../../../../utils/colors";

import { ReactComponent as MoreHorizIcon } from "../../../../assets/icons/more_horiz-20px.svg";
import { ReactComponent as EditIcon } from "../../../../assets/icons/edit-20px.svg";
import { ReactComponent as DeleteIcon } from "../../../../assets/icons/delete-20px.svg";

function Card(props) {
  // If menu open will disable unhover from turning menu to visibility: hidden
  const [focusMenu, setFocusMenu] = useState(false);

  return (
    <div
      className={styles.card}
      style={{
        background: props.color,
        color: textColorFromBgColor(props.color),
      }}
    >
      <DropdownMenu
        icon={<MoreHorizIcon />}
        className={`${styles.menu} ${
          focusMenu ? styles.focused : styles.unfocused
        }`}
        onOpen={() => setFocusMenu(true)}
        onClose={() => setFocusMenu(false)}
      >
        <DropdownMenuItem icon={<EditIcon />} text="Edit Card" />
        <DropdownMenuItem
          icon={<DeleteIcon />}
          text="Delete Card"
          styling="red"
          onClick={() => props.deleteCard(props._id)}
        />
      </DropdownMenu>
      <p className={styles.subject}>{props.subject}</p>
      <p className={styles.description}>{props.description}</p>
      <p className={styles.dueDate}>{formatDates(props.dueDate)}</p>
    </div>
  );
}

export default Card;
