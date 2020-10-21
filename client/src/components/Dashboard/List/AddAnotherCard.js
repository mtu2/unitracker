import React, { useState } from "react";
import styles from "./AddAnotherCard.module.css";

import Datetime from "react-datetime";
import OutsideClickHandler from "react-outside-click-handler";
import { Grow } from "@material-ui/core";
import { ReactComponent as AddIcon } from "../../../assets/icons/add-24px.svg";

const DEFAULT_COLOR = "rgba(255, 255, 255, 0.6)";

function AddAnotherCard(props) {
  const [open, setOpen] = useState(false);
  const [subject, setSubject] = useState("");
  const [description, setDescription] = useState("");
  const [dueDate, setDueDate] = useState(Date.now()); //change to none
  const [color, setColor] = useState(DEFAULT_COLOR);

  const [subjectNumOfLines, setSubjectNumOfLines] = useState(1);
  const [descriptionNumOfLines, setDescriptionNumOfLines] = useState(1);

  function handleSubjectChange(ev) {
    setSubject(ev.target.value);
    const lines = calcNumOfLines(ev.target.value.length);
    if (subjectNumOfLines !== lines) setSubjectNumOfLines(lines);
  }
  function handleDescriptionChange(ev) {
    setDescription(ev.target.value);
    const lines = calcNumOfLines(ev.target.value.length);
    if (descriptionNumOfLines !== lines) setDescriptionNumOfLines(lines);
  }

  function calcNumOfLines(textLength) {
    const textLengthPerLine = 35;
    return 1 + Math.floor(textLength / textLengthPerLine);
  }

  function handleOpenClose() {
    console.log(open);
    if (!open) return setOpen(true);

    if (subject !== "" && description !== "" && color !== "") {
      props.createCard({ subject, description, color, dueDate });
      // if duedate is empty dont create with duedate
    }
    setSubject("");
    setDescription("");
    setDueDate(Date.now());
    setColor(DEFAULT_COLOR);
    setOpen(false);
  }

  return (
    <>
      {open ? (
        <OutsideClickHandler onOutsideClick={handleOpenClose}>
          <Grow in={open}>
            <form>
              <div className={styles.addCard} style={{ background: color }}>
                <textarea
                  className={styles.subject}
                  value={subject}
                  placeholder={"Enter a subject"}
                  onChange={handleSubjectChange}
                  rows={subjectNumOfLines}
                  autoFocus
                />
                <textarea
                  className={styles.description}
                  value={description}
                  placeholder={"Write a description"}
                  onChange={handleDescriptionChange}
                  rows={descriptionNumOfLines}
                />
                <textarea
                  className={styles.dueDate}
                  value={dueDate}
                  onChange={(ev) => setDueDate(ev.target.value)}
                />
                <Datetime />
              </div>
              <div className={styles.addButton}></div>
            </form>
          </Grow>
        </OutsideClickHandler>
      ) : (
        <div className={styles.addCardPrompt} onClick={handleOpenClose}>
          <AddIcon />
          <p>Add another card</p>
        </div>
      )}
    </>
  );
}

export default AddAnotherCard;
