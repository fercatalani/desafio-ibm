import axios from "axios";

const api = axios.create({
  baseURL: "http://169.57.99.187:30001",
});

export const getBooks = () => {
  return api.get("/books").then((response) => response.data);
};

export const getBookById = (id) => {
  return api.get(`/book/${id}`).then((response) => response.data);
};

export const getCategories = () => {
  return api.get("/categories").then((response) => response.data);
};

export const deleteBook = (id) => {
  return api.delete(`/book/${id}`);
};

export const createBook = (book) => {
  return api.post("/book", book);
};

export default api;
