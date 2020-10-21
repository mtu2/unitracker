import React, { useState, useEffect } from "react";
import styles from "./List.module.css";

import Card from "./Card";
import AddAnotherCard from "./AddAnotherCard";
import { listAPI } from "../../../utils/API";
import DropdownMenu from "../../UI/DropdownMenu/DropdownMenu";
import { ReactComponent as MoreHorizIcon } from "../../../assets/icons/more_horiz-24px.svg";

function List(props) {
  const [cards, setCards] = useState([]);

  useEffect(() => {
    setCards(props.cards);
  }, [props.cards]);

  // async function fetchCardsData() {
  //   const res = await listAPI.getById(props._id);
  //   setCards(res.data.cards);
  // }

  function handleCreateCard(newCard) {
    listAPI.createCard(props._id, newCard);
    setCards((prevCards) => [...prevCards, newCard]);
  }

  return (
    <div className={styles.list}>
      <h1>{props.name}</h1>
      <DropdownMenu icon={<MoreHorizIcon />} className={styles.menu}>
        <p>Move List</p>
        <p>Rename List</p>
        <p>Delete List</p>
      </DropdownMenu>
      {cards.map((cardData, index) => (
        <Card key={index} {...cardData} />
      ))}
      <AddAnotherCard createCard={handleCreateCard} />
    </div>
  );
}

export default List;
