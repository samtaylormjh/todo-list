import { ADD_TODO, DELETE_TODO, GET_TODOS } from "./actions";

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
      // const newTodo = {
      //   userId: action.payload.data.todo.userId,
      //   id: action.payload.data.id,
      //   title: action.payload.data.todo.title,
      //   completed: action.payload.data.todo.completed,
      // };
      const newState = [...state, action.payload.data.todo];
      return newState;
    }

    default:
      return state;
  }
}
