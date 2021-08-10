import axios from "axios";

export const GET_TODOS = "GET_TODOS";
export const getTodos = () => {
  const request = axios.get(
    "https://jsonplaceholder.typicode.com/todos?_limit=8"
  );
  return {
    type: GET_TODOS,
    payload: request,
  };
};

export const ADD_TODO = "ADD_TODO";
export const addTodo = (todo) => {
  const request = axios.post(
    "https://jsonplaceholder.typicode.com/todos?_limit=8",
    {
      todo,
    }
  );
  return {
    type: ADD_TODO,
    payload: request,
  };
};

export const DELETE_TODO = "DELETE_TODO";
export const deleteTodo = (todo) => {
  const request = axios.delete(
    "https://jsonplaceholder.typicode.com/todos/" + todo.id,
    { todo }
  );
  return {
    type: DELETE_TODO,
    todo: todo,
    payload: request,
  };
};
