export const FETCH_CHORES = 'FETCH_CHORES';
export const ADD_CHORE = 'ADD_CHORE';
export const CLEAR_CHORES = 'CLEAR_CHORES';
export const RESET_CHORES = 'RESET_CHORES';
export const COMPLETE_CHORE = 'COMPLETE_CHORE';
export const UNDO_CHORE = 'UNDO_CHORE';
export const START_RUNNING = 'START_RUNNING';
export const INCREMENT_CHORE = 'INCREMENT_CHORE';
export const SET_ACTIVE = 'SET_ACTIVE';
export const ARCHIVE_ACTIVE = 'ARCHIVE_ACTIVE';

export function fetchChores() {
  return {
    type: FETCH_CHORES
  }
}

export function addChore(chore) {
  return {
    type: ADD_CHORE,
    payload: chore
  }
}

export function clearChores() {
  return {
    type: CLEAR_CHORES
  }
}

export function resetChores(completedChores) {
  return {
    type: RESET_CHORES,
    payload: completedChores
  }
}

export function completeChore(chore) {
  return {
    type: COMPLETE_CHORE,
    payload: chore
  }
}

export function undoChore(chore) {
  return {
    type: UNDO_CHORE,
    payload: chore
  }
}

export function startRunning() {
  return {
    type: START_RUNNING
  }
}

export function incrementChore(chore) {
  return {
    type: INCREMENT_CHORE,
    payload: chore
  }
}

export function setActive(chore) {
  return {
    type: SET_ACTIVE,
    payload: chore
  }
}

export function archiveActive(chore) {
  return {
    type: ARCHIVE_ACTIVE,
    payload: chore
  }
}
