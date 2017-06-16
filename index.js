import makeStore from './src/store';
import {startServer} from './src/server';
import initialState from './entries.json';

export const store = makeStore();
startServer(store);

store.dispatch({
    type: 'SET_ENTRIES',
    entries: initialState
});
store.dispatch({type: 'NEXT'});