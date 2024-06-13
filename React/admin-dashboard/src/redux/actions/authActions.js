// src/redux/actions/authActions.js
import bcrypt from 'bcryptjs';

export const login = (username, password) => async (dispatch) => {
  const storedUser = JSON.parse(localStorage.getItem(username));
  if (storedUser && bcrypt.compareSync(password, storedUser.password)) {
    dispatch({ type: 'LOGIN_SUCCESS', payload: username });
    localStorage.setItem('isAuthenticated', true);
  } else {
    alert('Invalid credentials');
  }
};

export const logout = () => {
  localStorage.removeItem('isAuthenticated');
  return { type: 'LOGOUT' };
};
