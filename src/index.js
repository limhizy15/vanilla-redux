import { createStore } from 'redux';

const plus = document.querySelector('#plus');
const minus = document.querySelector('#minus');
const number = document.querySelector('span');

// modify datas in reducer
const countModifier = (count = 0, action) => {
  switch (action.type) {
    case 'PLUS':
      return count + 1;
    case 'MINUS':
      return count - 1;
    default:
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
