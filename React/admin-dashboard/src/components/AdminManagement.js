// src/components/AdminManagement.js
import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addAdmin, removeAdmin } from '../redux/actions/adminActions';

const AdminManagement = () => {
  const [adminName, setAdminName] = useState('');
  const dispatch = useDispatch();
  const admins = useSelector(state => state.admin.admins);

  const handleAddAdmin = () => {
    dispatch(addAdmin(adminName));
    setAdminName('');
  };

  const handleRemoveAdmin = (name) => {
    dispatch(removeAdmin(name));
  };

  return (
    <div>
      <h2>Admin Management</h2>
      <input
        type="text"
        value={adminName}
        onChange={(e) => setAdminName(e.target.value)}
        placeholder="Add admin"
      />
      <button onClick={handleAddAdmin}>Add Admin</button>
      <ul>
        {admins.map((admin) => (
          <li key={admin}>
            {admin} <button onClick={() => handleRemoveAdmin(admin)}>Remove</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default AdminManagement;
