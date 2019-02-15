// constants
export const SHOW_MESSAGE = 'SHOW_MESSAGE';
export const CLEAR_MESSAGE = 'CLEAR_MESSAGE';

// action creators
export function showMessage() {
  return { type: SHOW_MESSAGE, message: 'Redux is up and going!' };
}

export function clearMessage() {
  return { type: CLEAR_MESSAGE, message: '' };
}
