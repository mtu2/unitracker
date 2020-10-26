import React, { useState } from "react";
import styles from "./DropdownMenu.module.scss";
import OutsideClickHandler from "react-outside-click-handler";
import { Fade } from "@material-ui/core";

const DropdownMenu = (props) => {
  const [open, setOpen] = useState(false);

  function onClose() {
    setOpen(false);
    if (props.onClose) props.onClose();
  }
  function onOpen() {
    setOpen(true);
    if (props.onOpen) props.onOpen();
  }

  return (
    <div className={`${styles.dropdownMenu} ${props.className}`}>
      <OutsideClickHandler onOutsideClick={onClose}>
        <div onClick={() => (open ? onClose() : onOpen())}>{props.icon}</div>
        <Fade in={open}>
          <div className={styles.dropdown}>{props.children}</div>
        </Fade>
      </OutsideClickHandler>
    </div>
  );
};

export default DropdownMenu;
