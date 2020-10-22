import React, { useState } from "react";
import styles from "./AddAnotherCard.module.css";

import { GithubPicker } from "react-color";
import { formatDates } from "../../../utils/dates";
import { textColorFromBgColor } from "../../../utils/colors";
import OutsideClickHandler from "react-outside-click-handler";
import { Grow } from "@material-ui/core";
import { DateTimePicker } from "@material-ui/pickers";
import { ReactComponent as AddIcon } from "../../../assets/icons/add-24px.svg";
import { ReactComponent as CalendarIcon } from "../../../assets/icons/calendar_today-14px.svg";
import { ReactComponent as PaletteIcon } from "../../../assets/icons/palette-14px.svg";

const DEFAULT_COLOR = "#F6F2F2";

function AddAnotherCard(props) {
  const [subject, setSubject] = useState("");
  const [description, setDescription] = useState("");
  const [dueDate, setDueDate] = useState(null);
  const [color, setColor] = useState(DEFAULT_COLOR);

  const [subjectNumOfLines, setSubjectNumOfLines] = useState(1);
  const [descriptionNumOfLines, setDescriptionNumOfLines] = useState(1);

  const [open, setOpen] = useState(false);
  const [openPalette, setOpenPalette] = useState(false);
  const [openDateTime, setOpenDateTime] = useState(false);
  const [disableHandleOpenClose, setDisableHandleOpenClose] = useState(false);

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
    if (disableHandleOpenClose) return;
    if (!open) return setOpen(true);

    if (subject !== "" && description !== "" && color !== "") {
      props.createCard({ subject, description, color, dueDate });
      // if duedate is empty dont create with duedate
    }

    setSubject("");
    setDescription("");
    setDueDate(null);
    setColor(DEFAULT_COLOR);

    setOpen(false);
    setOpenPalette(false);
    setOpenDateTime(false);
    setDisableHandleOpenClose(false);
  }

  function handleOpenPalette() {
    setOpenPalette(!openPalette);
  }

  function handleOpenDateTime() {
    if (!openDateTime) {
      // Open DateTime Picker
      setDisableHandleOpenClose(true);
    } else {
      // Close DateTime Picker
      setDisableHandleOpenClose(false);
    }
    setOpenDateTime(!openDateTime);
  }

  return (
    <>
      {open ? (
        <OutsideClickHandler onOutsideClick={handleOpenClose}>
          <Grow in={open}>
            <form style={{ position: "relative" }}>
              <div
                className={styles.addCard}
                style={{
                  background: color,
                  color: textColorFromBgColor(color),
                }}
              >
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
                <div>
                  <PaletteIcon
                    onClick={handleOpenPalette}
                    className={styles.icon}
                  />
                  <CalendarIcon
                    onClick={handleOpenDateTime}
                    className={styles.icon}
                  />
                  {dueDate && (
                    <p className={styles.dueDate} onClick={handleOpenDateTime}>
                      {formatDates(dueDate)}
                    </p>
                  )}
                </div>
              </div>
              {openPalette && (
                <div
                  style={{
                    position: "absolute",
                    bottom: "-62px",
                    left: "10px",
                  }}
                >
                  <GithubPicker
                    onChangeComplete={(color) => setColor(color.hex)}
                  />
                </div>
              )}
              <DateTimePicker
                open={openDateTime}
                variant="inline"
                value={dueDate}
                onChange={setDueDate}
                onClose={handleOpenDateTime}
                style={{ width: "0px", height: "0px" }}
              />
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
