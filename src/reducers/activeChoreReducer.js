import { SET_ACTIVE } from '../actions';

export default function(state="", action) {
  switch (action.type) {
    case SET_ACTIVE:
      return action.payload;
    default:
      return state;
  }
};
