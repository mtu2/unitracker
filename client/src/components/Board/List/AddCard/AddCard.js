import React, { useState } from "react";
import styles from "./AddCard.module.scss";

import { GithubPicker } from "react-color";
import { formatDates } from "../../../../utils/dates";
import { textColorFromBgColor } from "../../../../utils/colors";
import OutsideClickHandler from "react-outside-click-handler";
import { Grow } from "@material-ui/core";
import { DateTimePicker } from "@material-ui/pickers";
import { ReactComponent as AddIcon } from "../../../../assets/icons/add-24px.svg";
import { ReactComponent as CalendarIcon } from "../../../../assets/icons/calendar_today-14px.svg";
import { ReactComponent as PaletteIcon } from "../../../../assets/icons/palette-14px.svg";

const DEFAULT_COLOR = "#F6F2F2";

function AddCard(props) {
  const [subject, setSubject] = useState("");
  const [description, setDescription] = useState("");
  const [dueDate, setDueDate] = useState(null);
  const [color, setColor] = useState(DEFAULT_COLOR);

  const [subjectNumOfLines, setSubjectNumOfLines] = useState(1);
  const [descriptionNumOfLines, setDescriptionNumOfLines] = useState(1);

  const [open, setOpen] = useState(false);
  const [openPalette, setOpenPalette] = useState(false);
  const [openDateTime, setOpenDateTime] = useState(false);
  const [disableOpenClose, setDisableOpenClose] = useState(false);

  function calcNumOfLines(textLength) {
    const textLengthPerLine = 35;
    return 1 + Math.floor(textLength / textLengthPerLine);
  }

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

  function handleOpenClose() {
    if (disableOpenClose) return;
    if (!open) return setOpen(true);

    if (subject !== "" && description !== "" && color !== "") {
      const newCard = { subject, description, color, dueDate };
      if (newCard["dueDate"] === null) delete newCard["dueDate"];
      props.createCard(newCard);
    }

    // Set to default
    setSubject("");
    setDescription("");
    setDueDate(null);
    setColor(DEFAULT_COLOR);

    setSubjectNumOfLines(1);
    setDescriptionNumOfLines(1);

    setOpen(false);
    setOpenPalette(false);
    setOpenDateTime(false);
    setDisableOpenClose(false);
  }

  function handleOpenPalette() {
    setOpenPalette(!openPalette);
  }

  function handleOpenDateTime() {
    if (!openDateTime) {
      // Open DateTime Picker
      setDisableOpenClose(true);
    } else {
      // Close DateTime Picker
      setDisableOpenClose(false);
    }
    setOpenDateTime(!openDateTime);
  }

  // Render AddCardPrompt if not open
  if (!open)
    return (
      <div className={styles.addCardPrompt} onClick={handleOpenClose}>
        <AddIcon />
        <p>Add another card</p>
      </div>
    );

  // Render AddCard if open
  return (
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
                bottom: "-84px",
                left: "8px",
              }}
              // TODO: move styles to styles.paletteContainer - BUG (NOT WORKING)
            >
              <GithubPicker onChangeComplete={(color) => setColor(color.hex)} />
            </div>
          )}
          <div
            style={{ position: "absolute", top: "0px", left: "0px" }}
            // TODO: move styles to styles.dateTimeContainer - BUG (NOT WORKING)
          >
            <DateTimePicker
              style={{
                width: "0px",
                height: "0px",
              }}
              open={openDateTime}
              value={dueDate}
              onChange={setDueDate}
              onClose={handleOpenDateTime}
            />
          </div>
        </form>
      </Grow>
    </OutsideClickHandler>
  );
}

export default AddCard;
