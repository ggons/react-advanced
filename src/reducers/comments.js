import { 
  SAVE_COMMENT,
  FETCH_COMMENTS
} from 'actions/types';

const initialState = {
  list: []
}

export default function (state = initialState, action) {
  switch (action.type) {
    case SAVE_COMMENT:
      return Object.assign({}, state, { list: [...state.list, action.payload]});
    case FETCH_COMMENTS:
      const comments = action.payload.data.map(comment => comment.name);
      return Object.assign({}, state, { list: [...state.list,  ...comments]});
    default:
      return state;
  }
}