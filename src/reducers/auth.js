import { CHANGE_AUTH } from 'actions/types';

const initialState = {
  isLoggedIn: false
}

export default function (state = initialState, action) {
  switch (action.type) {
    case CHANGE_AUTH:
      return Object.assign({}, state, { isLoggedIn: action.payload })
    default:
      return state;
  }
}