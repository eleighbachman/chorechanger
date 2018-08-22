import { combineReducers } from 'redux';
import choresReducer from './choresReducer';
import completedReducer from './completedReducer';
import runningReducer from './runningReducer';
import activeChoreReducer from './activeChoreReducer';
import archiveChoreReducer from './archiveChoreReducer';

const rootReducer = combineReducers({
  chores: choresReducer,
  completedChores: completedReducer,
  running: runningReducer,
  activeChore: activeChoreReducer,
  archiveChore: archiveChoreReducer
})

export default rootReducer;
