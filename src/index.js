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

const onChange = () => {
  number.innerText = countStore.getState();
};

// listen data change
countStore.subscribe(onChange);

plus.addEventListener('click', () => countStore.dispatch({ type: 'PLUS' }));
minus.addEventListener('click', () => countStore.dispatch({ type: 'MINUS' }));
