import { createStore } from 'redux';

function reducer() {
  return {
    name: 'Cadu',
    lastname: 'Eduardo'
  }
}

const store = createStore(reducer);


export default store;
