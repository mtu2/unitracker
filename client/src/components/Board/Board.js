import React, { useState, useEffect } from "react";
import styles from "./Board.module.scss";
import List from "./List/List";
import { listAPI } from "../../utils/API";

function Board() {
  const [listsData, setListsData] = useState([]);
  console.log("Board rendered");
  useEffect(() => {
    async function fetchListsData() {
      const res = await listAPI.getAll();
      setListsData(res.data);
    }
    fetchListsData();
  }, []);

  return (
    <div className={styles.board}>
      {listsData.map((listData, index) => (
        <List key={index} {...listData} />
      ))}
    </div>
  );
}

export default Board;
