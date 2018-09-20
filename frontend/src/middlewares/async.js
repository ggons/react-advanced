export default ({ dispatch }) => next => action => {
  // next middleware
  if (!action.payload || !action.payload.then) {
    return next(action);
  }

  action.payload.then(function (response) {
    const newAction = { ...action, payload: response };
    dispatch(newAction);
  })
}

// action -> dispatch -> middleware #1 -> next -> middleware #2 -> next -> ... -> reducers