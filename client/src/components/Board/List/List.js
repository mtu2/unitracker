import React, { useState, useEffect } from "react";
import styles from "./List.module.scss";

import Card from "./Card/Card";
import AddCard from "./AddCard/AddCard";
import DropdownMenu from "../../UI/DropdownMenu/DropdownMenu";
import DropdownMenuItem from "../../UI/DropdownMenu/DropdownMenuItem/DropdownMenuItem";
import { listAPI } from "../../../utils/API";

import { ReactComponent as MoreHorizIcon } from "../../../assets/icons/more_horiz-24px.svg";
import { ReactComponent as RearrangeIcon } from "../../../assets/icons/compare_arrows-20px.svg";
import { ReactComponent as EditIcon } from "../../../assets/icons/edit-20px.svg";
import { ReactComponent as DeleteForeverIcon } from "../../../assets/icons/delete_forever-20px.svg";

function List(props) {
  const [cards, setCards] = useState([]);
  console.log("List rendered");

  useEffect(() => {
    setCards(props.cards);
  }, [props.cards]);

  // async function fetchCardsData() {
  //   const res = await listAPI.getById(props._id);
  //   setCards(res.data.cards);
  // }

  async function handleCreateCard(newCard) {
    // Instant card add for frontend
    setCards((prevCards) => [...prevCards, newCard]);

    // Send to backend and update any (e.g. card ._id)
    const newList = await listAPI.createCard(props._id, newCard);
    setCards(newList.data);
  }
  function handleDeleteCard(cardId) {
    setCards((prevCards) => prevCards.filter((card) => card._id !== cardId));
    listAPI.deleteCard(props._id, cardId);
  }
  async function handleUpdateCard(cardId, updatedCard) {
    console.log(cardId);
    setCards((prevCards) =>
      prevCards.map((card) => (card._id === cardId ? updatedCard : card))
    );

    // Send to backend and update any (e.g. card ._id)
    const newList = await listAPI.updateCard(props._id, cardId, updatedCard);
    setCards(newList.data);
  }

  return (
    <div className={styles.list}>
      <h1>{props.name}</h1>
      <DropdownMenu icon={<MoreHorizIcon />} className={styles.menu}>
        <DropdownMenuItem icon={<RearrangeIcon />} text="Move List" />
        <DropdownMenuItem icon={<EditIcon />} text="Rename List" />
        <DropdownMenuItem
          icon={<DeleteForeverIcon />}
          text="Delete List"
          styling="red"
        />
      </DropdownMenu>
      {cards.map((cardData, index) => (
        <Card
          key={index}
          {...cardData}
          deleteCard={handleDeleteCard}
          updateCard={handleUpdateCard}
        />
      ))}
      <AddCard createCard={handleCreateCard} />
    </div>
  );
}

export default List;

// TEST SPEED: Implementing React.memo on Card and useContext on passed functions. Change handleCreateCard to update just latest card and not full list.
