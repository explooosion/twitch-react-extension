import Auth from '../models/Auth';

export default (state = Auth, action) => {
  switch (action.type) {
    case 'SET_AUTH':
      return { ...state, ...action.payload };
    default:
      return state;
  }
}
