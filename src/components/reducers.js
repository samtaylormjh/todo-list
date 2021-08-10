import { GET_TODOS } from "./actions";

export default function todosReducer(state = [], action) {
  switch (action.type) {
    case `${GET_TODOS}_FULFILLED`: {
      return action.payload.data;
    }
    default:
      return state;
  }
}
