import { USER_ADDED } from './action-types';

let lastId = 0;
const initialState = [];

export default function reducer(state = initialState, action) {
  switch (action.type) {
    case USER_ADDED:
      return [
        ...state,
        {
          id: ++lastId,
          name: action.payload.name,
          balance: action.payload.balance,
        },
      ];

    case USER_REMOVED:
      return state.filter((user) => user.id !== action.payload.id);

    default:
      return state;
  }
}
