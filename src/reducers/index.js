import { combineReducers } from 'redux';
import choresReducer from './choresReducer';
import completedReducer from './completedReducer';
import activeChoreReducer from './activeChoreReducer';
import archiveChoreReducer from './archiveChoreReducer';

const rootReducer = combineReducers({
  chores: choresReducer,
  completedChores: completedReducer,
  activeChore: activeChoreReducer,
  archiveChore: archiveChoreReducer
})

export default rootReducer;
