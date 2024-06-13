// src/components/CategoryManagement.js
import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addCategory, removeCategory, renameCategory } from '../redux/actions/categoryActions';

const CategoryManagement = () => {
  const [categoryName, setCategoryName] = useState('');
  const [newCategoryName, setNewCategoryName] = useState('');
  const [selectedCategory, setSelectedCategory] = useState(null);
  const dispatch = useDispatch();
  const categories = useSelector(state => state.category.categories);

  const handleAddCategory = () => {
    dispatch(addCategory(categoryName));
    setCategoryName('');
  };

  const handleRemoveCategory = (name) => {
    dispatch(removeCategory(name));
  };

  const handleRenameCategory = () => {
    dispatch(renameCategory(selectedCategory, newCategoryName));
    setSelectedCategory(null);
    setNewCategoryName('');
  };

  return (
    <div>
      <h2>Category Management</h2>
      <input
        type="text"
        value={categoryName}
        onChange={(e) => setCategoryName(e.target.value)}
        placeholder="Add category"
      />
      <button onClick={handleAddCategory}>Add Category</button>
      <ul>
        {categories.map((category) => (
          <li key={category}>
            {category} <button onClick={() => handleRemoveCategory(category)}>Remove</button>
            <button onClick={() => setSelectedCategory(category)}>Rename</button>
          </li>
        ))}
      </ul>
      {selectedCategory && (
        <div>
          <input
            type="text"
            value={newCategoryName}
            onChange={(e) => setNewCategoryName(e.target.value)}
            placeholder="New category name"
          />
          <button onClick={handleRenameCategory}>Rename Category</button>
        </div>
      )}
    </div>
  );
};

export default CategoryManagement;
