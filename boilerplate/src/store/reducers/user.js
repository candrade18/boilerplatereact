const INITIAL_STATE = {
    name: 'Cadu',
    lastname: 'Eduardo'
  }
  
export default function reducer(state = INITIAL_STATE, action) {
  
    if( action.type === 'SET_NOME' ) {
      return {
        ...state,
        name: action.name
      }
    }
  
    return state;
}