import { ARCHIVE_ACTIVE } from '../actions';

export default function(state='', action) {
  switch(action.type) {
    case ARCHIVE_ACTIVE:
      console.log(action.payload);
      return action.payload;
    default:
      return state;
  }
}
