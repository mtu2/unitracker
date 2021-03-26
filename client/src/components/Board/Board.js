import React, { useState, useEffect } from "react";
import { DragDropContext } from "react-beautiful-dnd";
import styles from "./Board.module.scss";
import List from "./List/List";
import { listAPI } from "../../utils/API";

function Board() {
  const [listsData, setListsData] = useState([]);

  useEffect(() => {
    async function fetchListsData() {
      const res = await listAPI.getAll();
      setListsData(res.data);
    }
    fetchListsData();
  }, []);

  function onDragEnd(result) {
    const { destination, source, draggableId } = result;
    console.log(result);

    // if null destination
    if (!destination) return;
    // if dropped at same list and same position
    if (
      destination.droppableId === source.droppableId &&
      destination.index === source.index
    )
      return;

    // Find start and finish list
    let startList;
    let startListIndex;
    let finishList;
    let finishListIndex;
    for (let i = 0; i < listsData.length; i++) {
      if (listsData[i]._id === source.droppableId) {
        startList = listsData[i];
        startListIndex = i;
      }
      if (listsData[i]._id === destination.droppableId) {
        finishList = listsData[i];
        finishListIndex = i;
      }
    }

    // Find dragged card
    let draggedCard = startList.cards[source.index];

    // Moving within a List
    if (startListIndex === finishListIndex) {
      const updatedCards = Array.from(startList.cards);
      updatedCards.splice(source.index, 1);
      updatedCards.splice(destination.index, 0, draggedCard);
      console.log(startList.cards);
      console.log(updatedCards);

      const updatedList = { ...startList, cards: updatedCards };
      const updatedListsData = [...listsData];
      updatedListsData[finishListIndex] = updatedList;

      console.log(updatedListsData);
      setListsData(updatedListsData);
    }
  }

  return (
    <DragDropContext onDragEnd={onDragEnd}>
      <div className={styles.board}>
        {listsData.map((listData, index) => (
          <List key={index} {...listData} />
        ))}
      </div>
    </DragDropContext>
  );
}

export default Board;
