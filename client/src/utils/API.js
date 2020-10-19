import axios from "axios";

export const semesterAPI = {
  // Semester AJAX requests
  getAll: () => axios.get("/api/semesters"),
  getById: (id) => axios.get(`/api/semesters/${id}`),
  create: (semesterData) => axios.post("/api/semesters", semesterData),
  update: (id, semesterData) => axios.put(`/api/semesters/${id}`, semesterData),
  delete: (id) => axios.delete(`/api/semesters/${id}`),
};

export const courseAPI = {
  // Course AJAX requests
  getAll: () => axios.get("/api/courses"),
  getById: (id) => axios.get(`/api/courses/${id}`),
  create: (courseData) => axios.post("/api/courses", courseData),
  update: (id, courseData) => axios.put(`/api/courses/${id}`, courseData),
  delete: (id) => axios.delete(`/api/courses/${id}`),
};

export const subjectAPI = {};
