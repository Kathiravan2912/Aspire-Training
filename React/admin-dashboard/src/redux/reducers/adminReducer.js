// src/redux/reducers/adminReducer.js
const initialState = {
    admins: [],
  };
  
  const adminReducer = (state = initialState, action) => {
    switch (action.type) {
      case 'ADD_ADMIN':
        return { ...state, admins: [...state.admins, action.payload] };
      case 'REMOVE_ADMIN':
        return { ...state, admins: state.admins.filter(admin => admin !== action.payload) };
      default:
        return state;
    }
  };
  
  export default adminReducer;
  