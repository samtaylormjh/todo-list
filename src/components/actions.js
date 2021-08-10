import axios from "axios";

export const GET_TODOS = "GET_TODOS";
export const getTodos = () => {
  const request = axios.get("https://jsonplaceholder.typicode.com/todos");
  return {
    type: GET_TODOS,
    payload: request,
  };
};

export const ADD_TODO = "ADD_TODO";
export const addTodo = (todo) => {
  return {
    type: ADD_TODO,
    todo: todo,
  };
};
