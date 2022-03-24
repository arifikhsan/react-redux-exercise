import { USER_ADDED, USER_REMOVED } from './action-types';

export function userAdded(user = {}) {
  return {
    type: USER_ADDED,
    payload: {
      id: user.id ? user.id : null,
      name: user.name ? user.name : null,
      balance: user.balance ? user.balance : null,
    },
  };
}

export function userRemoved(user = {}) {
  return {
    type: USER_REMOVED,
    payload: {
      id: user.id ? user.id : null,
    },
  };
}
