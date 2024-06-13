// src/redux/reducers/categoryReducer.js
const initialState = {
    categories: [],
  };
  
  const categoryReducer = (state = initialState, action) => {
    switch (action.type) {
      case 'ADD_CATEGORY':
        return { ...state, categories: [...state.categories, action.payload] };
      case 'REMOVE_CATEGORY':
        return { ...state, categories: state.categories.filter(category => category !== action.payload) };
      case 'RENAME_CATEGORY':
        return {
          ...state,
          categories: state.categories.map(category =>
            category === action.payload.oldName ? action.payload.newName : category
          ),
        };
      default:
        return state;
    }
  };
  
  export default categoryReducer;
  