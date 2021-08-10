import { ADD_TODO, DELETE_TODO, GET_TODOS, UPDATE_TODO } from "./actions";

export default function todosReducer(state = [], action) {
  switch (action.type) {
    case `${GET_TODOS}_FULFILLED`: {
      return action.payload.data;
    }
    case `${DELETE_TODO}_FULFILLED`: {
      let newState = state.filter(
        (t) => t.id !== action.payload.config.todo.id
      );
      return newState;
    }
    case `${ADD_TODO}_FULFILLED`: {
      const newTodo = {
        userId: action.payload.data.todo.userId,
        id: action.payload.data.id,
        title: action.payload.data.todo.title,
        completed: action.payload.data.todo.completed,
      };

      console.log(newTodo);
      const newState = [...state, newTodo];
      return newState;
    }
    case `${UPDATE_TODO}_FULFILLED`: {
      const newTodo = {
        userId: action.payload.data.todo.userId,
        id: action.payload.data.todo.id,
        title: action.payload.data.todo.todo,
        completed: action.payload.data.todo.completed,
      };
      let newState = [...state];
      const indexToUpdate = newState.findIndex((t) => t.id == newTodo.id);
      newState[indexToUpdate] = newTodo;

      return newState;
    }
    default:
      return state;
  }
}
