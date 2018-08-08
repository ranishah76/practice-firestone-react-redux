import { createStore, applyMiddleware, compose } from 'redux'

export const configureStore = { preLoadedState } => {
    const middlewares = [];
    const middleWareEnhancer = applyMiddleware(...middlewares)

    const storeEnhancers = [middleWareEnhancer];
    const composedEnhancer = compose (...storeEnhancers);

    const store = createStore(
      rootReducer,
      preLoadedState,
      composedEnhancer
    );

    return store;
}
