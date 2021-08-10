import { DELETE_TODO, GET_TODOS } from "./actions";

export default function todosReducer(state = [], action) {
  switch (action.type) {
    case `${GET_TODOS}_FULFILLED`: {
      return action.payload.data;
    }
    case `${DELETE_TODO}_FULFILLED`: {
      console.log(action);
      let newState = state.filter((t) => t.id !== action.payload.data.id);
      return newState;
    }
    default:
      return state;
  }
}
