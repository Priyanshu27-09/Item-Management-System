import React from 'react';

const ItemCard = ({ item, onClick }) => (
  <div 
    className="border rounded-lg overflow-hidden cursor-pointer transition-transform hover:scale-105 hover:shadow-md"
    onClick={onClick}
  >
    <img 
      src={item.coverImage} 
      alt={item.name} 
      className="w-full h-48 object-cover"
    />
    <div className="p-4">
      <h3 className="font-bold text-lg">{item.name}</h3>
      <p className="text-gray-600">{item.type}</p>
    </div>
  </div>
);

const ViewItemsPage = ({ items, setSelectedItem, setCurrentImageIndex }) => (
  <>
    <h1 className="text-2xl font-bold mb-6">View Items</h1>
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 mt-6">
      {items.map(item => (
        <ItemCard 
          key={item.id} 
          item={item} 
          onClick={() => {
            setSelectedItem(item);
            setCurrentImageIndex(0);
          }}
        />
      ))}
    </div>
  </>
);

export default ViewItemsPage;