import { RESET_CHORES, COMPLETE_CHORE, UNDO_CHORE, ARCHIVE_ACTIVE } from '../actions';

export default function(state=["Practice German", "Go on Walk"], action) {
  switch (action.type) {
    case RESET_CHORES:
      return state=[];
    case COMPLETE_CHORE:
      const completed = [action.payload];
      return [completed, ...state]
    case UNDO_CHORE:
      return state.filter(chore => chore !== action.payload)
    case ARCHIVE_ACTIVE:
      return [action.payload, ...state]
    default:
      return state;
  }
};
