import React, { useState } from 'react';

const AddItemPage = ({ items, setItems }) => {
  const [formData, setFormData] = useState({
    name: '',
    type: '',
    description: '',
    coverImage: '',
    images: ''
  });
  const [showSuccess, setShowSuccess] = useState(false);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const newItem = {
      id: items.length + 1,
      name: formData.name,
      type: formData.type,
      description: formData.description,
      coverImage: formData.coverImage,
      images: formData.images.split(',').map(url => url.trim())
    };
    setItems([...items, newItem]);
    setFormData({ name: '', type: '', description: '', coverImage: '', images: '' });
    setShowSuccess(true);
    setTimeout(() => setShowSuccess(false), 3000);
  };

  return (
    <div className="max-w-md mx-auto mt-6">
      <h1 className="text-2xl font-bold mb-6">Add New Item</h1>
      {showSuccess && (
        <div className="mb-4 p-3 bg-green-100 text-green-800 rounded">
          Item successfully added!
        </div>
      )}
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label className="block font-medium mb-1">Item Name:</label>
          <input type="text" name="name" value={formData.name} onChange={handleInputChange} required className="w-full p-2 border rounded" />
        </div>
        <div>
          <label className="block font-medium mb-1">Item Type:</label>
          <input type="text" name="type" value={formData.type} onChange={handleInputChange} required className="w-full p-2 border rounded" />
        </div>
        <div>
          <label className="block font-medium mb-1">Description:</label>
          <textarea name="description" value={formData.description} onChange={handleInputChange} required className="w-full p-2 border rounded h-24" />
        </div>
        <div>
          <label className="block font-medium mb-1">Cover Image URL:</label>
          <input type="url" name="coverImage" value={formData.coverImage} onChange={handleInputChange} required className="w-full p-2 border rounded" />
        </div>
        <div>
          <label className="block font-medium mb-1">Additional Images (comma separated URLs):</label>
          <input type="text" name="images" value={formData.images} onChange={handleInputChange} required className="w-full p-2 border rounded" />
        </div>
        <button type="submit" className="w-full p-8 bg-blue-600 text-white rounded hover:bg-blue-700">
          Add Item
        </button>
      </form>
    </div>
  );
};

export default AddItemPage;