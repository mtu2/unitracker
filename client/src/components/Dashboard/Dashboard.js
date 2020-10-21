import React, { useState, useEffect } from "react";
import styles from "./Dashboard.module.css";
import List from "./List/List";
import { listAPI } from "../../utils/API";

function Dashboard() {
  const [listsData, setListsData] = useState([]);

  useEffect(() => {
    async function fetchListsData() {
      const res = await listAPI.getAll();
      setListsData(res.data);
    }
    fetchListsData();
  }, []);

  return (
    <div className={styles.dashboard}>
      {listsData.map((listData, index) => (
        <List key={index} {...listData} />
      ))}
    </div>
  );
}

export default Dashboard;
