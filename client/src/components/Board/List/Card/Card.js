import React, { useEffect, useState } from "react";
import styles from "./Card.module.scss";

import DropdownMenu from "../../../UI/DropdownMenu/DropdownMenu";
import DropdownMenuItem from "../../../UI/DropdownMenu/DropdownMenuItem/DropdownMenuItem";
import { formatDates } from "../../../../utils/dates";
import { textColorFromBgColor } from "../../../../utils/colors";

import { ReactComponent as MoreHorizIcon } from "../../../../assets/icons/more_horiz-20px.svg";
import { ReactComponent as EditIcon } from "../../../../assets/icons/edit-20px.svg";
import { ReactComponent as DeleteIcon } from "../../../../assets/icons/delete-20px.svg";

//  + EditCard Imports
import { GithubPicker } from "react-color";
import OutsideClickHandler from "react-outside-click-handler";
import { DateTimePicker } from "@material-ui/pickers";
import { ReactComponent as CalendarIcon } from "../../../../assets/icons/calendar_today-14px.svg";
import { ReactComponent as PaletteIcon } from "../../../../assets/icons/palette-14px.svg";

function Card(props) {
  // If menu open will disable unhover from turning menu to visibility: hidden
  const [focusMenu, setFocusMenu] = useState(false);
  const [openEdit, setOpenEdit] = useState(false);

  // Render Card if edit not open
  if (!openEdit)
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
          <DropdownMenuItem
            icon={<EditIcon />}
            text="Edit Card"
            onClick={() => setOpenEdit(true)}
          />
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

  // Render EditCard if edit open
  return <EditCard {...props} open={openEdit} setOpen={setOpenEdit} />;
}

function EditCard(props) {
  const [subject, setSubject] = useState(props.subject);
  const [description, setDescription] = useState(props.description);
  const [dueDate, setDueDate] = useState(props.dueDate);
  const [color, setColor] = useState(props.color);

  const [subjectNumOfLines, setSubjectNumOfLines] = useState(1);
  const [descriptionNumOfLines, setDescriptionNumOfLines] = useState(1);

  const [openPalette, setOpenPalette] = useState(false);
  const [openDateTime, setOpenDateTime] = useState(false);
  const [disableOpenClose, setDisableOpenClose] = useState(false);

  useEffect(() => {
    setSubjectNumOfLines(calcNumOfLines(props.subject.length));
    setDescriptionNumOfLines(calcNumOfLines(props.description.length));
    console.log(calcNumOfLines(props.description.length));
  }, [props.subject, props.description]);

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
    if (subject !== "" && description !== "" && color !== "") {
      const updatedCard = { subject, description, color, dueDate };
      if (updatedCard["dueDate"] === null) delete updatedCard["dueDate"];
      props.updateCard(props._id, updatedCard);
    }

    props.setOpen(false);
    // Set to default
    // setSubject("");
    // setDescription("");
    // setDueDate(null);
    // setColor(DEFAULT_COLOR);

    // setSubjectNumOfLines(1);
    // setDescriptionNumOfLines(1);

    // setOpen(false);
    // setOpenPalette(false);
    // setOpenDateTime(false);
    // setDisableOpenClose(false);
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

  return (
    <OutsideClickHandler onOutsideClick={handleOpenClose}>
      <form style={{ position: "relative" }}>
        <div
          className={styles.editCard}
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
            <PaletteIcon onClick={handleOpenPalette} className={styles.icon} />
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
              "z-index": "100",
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
    </OutsideClickHandler>
  );
}

export default Card;
