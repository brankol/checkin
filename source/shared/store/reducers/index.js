import cuid from 'cuid';
import { combineReducers } from 'redux';

// const initialState = {
//   currentUser: null,
//   users: [],
//   checkins: []
// };

export function checkins (state = [], action) {
  const data = action.payload;

  switch (action.type) {
    case 'CHECK_IN':
      return [
        ...state,
        Object.assign({}, { id: data.id || cuid() })
      ];
    default:
      return state;
  }
}

const checkinApp = combineReducers({
  checkins
});

export default checkinApp;
