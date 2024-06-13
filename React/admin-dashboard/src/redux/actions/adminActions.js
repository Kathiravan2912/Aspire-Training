// src/redux/actions/adminActions.js
export const addAdmin = (name) => {
    return { type: 'ADD_ADMIN', payload: name };
  };
  
  export const removeAdmin = (name) => {
    return { type: 'REMOVE_ADMIN', payload: name };
  };
  