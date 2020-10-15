import React, { useState } from "react";
import styles from "./DropdownMenu.module.css";
import OutsideClickHandler from "react-outside-click-handler";
import { Fade } from "@material-ui/core";

const DropdownMenu = (props) => {
  const [open, setOpen] = useState(false);

  return (
    <div className={`${styles.menu} ${props.className}`}>
      <OutsideClickHandler onOutsideClick={() => setOpen(false)}>
        <p href="#" onClick={() => setOpen(!open)}>
          {props.icon}
        </p>
        <Fade in={open}>
          <div className={styles.dropdown}>{props.children}</div>
        </Fade>
      </OutsideClickHandler>
    </div>
  );
};

export default DropdownMenu;
