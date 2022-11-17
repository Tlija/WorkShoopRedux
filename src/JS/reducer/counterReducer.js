import { ADD_VALUE, DECREMENT, INCREMENT, TOGGLE } from "../actionTypes/couterTypes";

const intialState = { count: 0,show_counter:false };
export const counterReducer = (state = intialState, action) => {
  switch (action.type) {
    case INCREMENT:
      return { ...state, count: state.count + 1 };
    case DECREMENT:
      return { ...state, count: state.count && state.count - 1 };
    case ADD_VALUE:
      return { ...state, count: state.count + action.payload };
      case TOGGLE:
        return{...state,show_counter:!state.show_counter,count:0}
    default:
      return state;
  }
};
