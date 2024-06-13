// src/redux/actions/categoryActions.js
export const addCategory = (name) => {
    return { type: 'ADD_CATEGORY', payload: name };
  };
  
  export const removeCategory = (name) => {
    return { type: 'REMOVE_CATEGORY', payload: name };
  };
  
  export const renameCategory = (oldName, newName) => {
    return { type: 'RENAME_CATEGORY', payload: { oldName, newName } };
  };
  