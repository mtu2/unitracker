import axios from "axios";

export const listAPI = {
  // List AJAX requests
  getAll: () => axios.get("/api/lists"),
  create: (listData) => axios.post("/api/lists", listData),

  getById: (id) => axios.get(`/api/lists/${id}`),
  update: (id, listData) => axios.put(`/api/lists/${id}`, listData),
  delete: (id) => axios.delete(`/api/lists/${id}`),

  // Card AJAX requests
  getCardById: (id, cardId) => axios.get(`/api/lists/${id}/cards/${cardId}`),
  createCard: (id, cardData) => axios.post(`/api/lists/${id}/cards`, cardData),
  updateCard: (id, cardId, cardData) =>
    axios.put(`/api/lists/${id}/cards/${cardId}`, cardData),
  deleteCard: (id, cardId) => axios.delete(`/api/lists/${id}/cards/${cardId}`),
};
