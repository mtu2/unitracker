import React, { useState, useEffect } from "react";
import styles from "./CourseBoard.module.css";
import { courseAPI } from "../../utils/API";

function CourseBoard() {
  const [courses, setCourses] = useState([]);
  const [newCourseName, setNewCourseName] = useState("");
  const [newCourseColor, setNewCourseColor] = useState("#000000");

  useEffect(() => {
    fetchCourses();
  }, []);

  async function fetchCourses() {
    const res = await courseAPI.getAll();
    setCourses(res.data);
  }

  async function onSubmit(e) {
    e.preventDefault();
    await courseAPI.create({
      name: newCourseName,
      color: newCourseColor,
    });
    fetchCourses();
    setNewCourseName("");
    setNewCourseColor("#000000");
  }
  const calcHeight = () => `${courses.length * 50}px`;

  return (
    <>
      <h1 className={styles.title}>Manage Courses</h1>
      <div className={styles.courseBoard} style={{ height: calcHeight() }}>
        {courses.map((courseData, index) => (
          <div key={index} className={styles.courseUnit}>
            <h2>{courseData.name}</h2>
            <p>{courseData.color}</p>
          </div>
        ))}
      </div>
      <h1 className={styles.title}>Create Course</h1>
      <form onSubmit={onSubmit}>
        <label>Name: </label>
        <input
          type="text"
          required
          value={newCourseName}
          onChange={(e) => setNewCourseName(e.target.value)}
        />
        <button type="submit" value="Create Course">
          Create
        </button>
      </form>
    </>
  );
}

export default CourseBoard;
