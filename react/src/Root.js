import React from 'react';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension/logOnlyInProduction';
// import reduxPromise from 'redux-promise';
import async from 'middlewares/async';
import stateValidator from 'middlewares/stateValidator';
import reducers from 'reducers';

const composeEnhancers = composeWithDevTools({
  // options like actionSanitizer, stateSanitizer
});

const store = createStore(reducers, 
  composeEnhancers(applyMiddleware(async, stateValidator))
);

const Root = ({ children }) => (
  <Provider store={store}>
    { children }
  </Provider>
)

export default Root;