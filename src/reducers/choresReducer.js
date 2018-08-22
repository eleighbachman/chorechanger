import { FETCH_CHORES,
         ADD_CHORE,
         CLEAR_CHORES,
         RESET_CHORES,
         COMPLETE_CHORE,
         UNDO_CHORE,
         SET_ACTIVE
        } from '../actions';

export default function(state=["Practice Norsk", "Study Redux"], action) {
  switch (action.type) {
    case FETCH_CHORES:
      return state;
    case ADD_CHORE:
      return [action.payload, ...state]
    case CLEAR_CHORES:
      return [];
    case RESET_CHORES:
      return [...action.payload, ...state]
    case COMPLETE_CHORE:
      return state.filter(chore => chore !== action.payload)
    case UNDO_CHORE:
      return [...state, action.payload]
    case SET_ACTIVE:
      return state.filter(chore => chore !== action.payload)
    default:
      return state;
  }
};
