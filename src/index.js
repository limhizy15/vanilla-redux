import { createStore } from 'redux';

const plus = document.querySelector('#plus');
const minus = document.querySelector('#minus');
const number = document.querySelector('span');

// modify datas in reducer
const countModifier = (count = 0, action) => {
  if (action.type === 'PLUS') {
    return count + 1;
  } else if (action.type === 'MINUS') {
    return count - 1;
  } else {
    return count;
  }
};

// create store
const countStore = createStore(countModifier);

// send action to reducer
countStore.dispatch({ type: 'MINUS' });
countStore.dispatch({ type: 'MINUS' });
countStore.dispatch({ type: 'MINUS' });
countStore.dispatch({ type: 'MINUS' });
countStore.dispatch({ type: 'PLUS' });

console.log(countStore.getState());
