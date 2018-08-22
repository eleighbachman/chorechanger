import { START_RUNNING } from '../actions';
export default function(state=false, action) {
  switch(action.type) {
    case START_RUNNING:
      return !state;
    default:
      return state;
  }
}
