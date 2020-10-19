import React, { useState, useEffect } from "react";
import styles from "./SemesterBoard.module.css";
import { semesterAPI } from "../../utils/API";

function SemesterBoard() {
  const [semesters, setSemesters] = useState([]);
  const [newSemName, setNewSemName] = useState("");
  const [newSemCompleted, setNewSemCompleted] = useState(true);

  useEffect(() => {
    fetchSemesters();
  }, []);

  async function fetchSemesters() {
    const res = await semesterAPI.getAll();
    setSemesters(res.data);
  }

  async function onSubmit(e) {
    e.preventDefault();
    await semesterAPI.create({
      name: newSemName,
      completed: newSemCompleted,
    });
    fetchSemesters();
    setNewSemName("");
    setNewSemCompleted(true);
  }
  const calcHeight = () => `${semesters.length * 50}px`;

  return (
    <>
      <h1 className={styles.title}>Manage Semesters</h1>
      <div className={styles.semesterBoard} style={{ height: calcHeight() }}>
        {semesters.map((subjectData, index) => (
          <div key={index} className={styles.semesterUnit}>
            <h2>{subjectData.name}</h2>
            <p>{subjectData.completed ? "Completed" : "In Progress"}</p>
          </div>
        ))}
      </div>
      <h1 className={styles.title}>Create Semester</h1>
      <form onSubmit={onSubmit}>
        <label>Name: </label>
        <input
          type="text"
          required
          value={newSemName}
          onChange={(e) => setNewSemName(e.target.value)}
        />
        <button type="submit" value="Create Semester">
          Create
        </button>
      </form>
    </>
  );
}

export default SemesterBoard;
