import React, { useState } from 'react';
import Navigation from './components/Navigation';
import ViewItemsPage from './pages/ViewItemsPage';
import AddItemPage from './pages/AddItemPage';
import ItemDetailsModal from './components/ItemDetailsModal';

const App = () => {
  const [view, setView] = useState('view');
  const [items, setItems] = useState([
    {
      id: 1,
      name: 'Blue T-Shirt',
      type: 'Shirt',
      description: 'Comfortable cotton t-shirt in blue color',
      coverImage:  'https://th.bing.com/th/id/OIP.RbbudyWthxz0b8C5vlmVPgHaIy?rs=1&pid=ImgDetMain&cb=idpwebpc2',
      images: [
      'https://th.bing.com/th/id/OIP.RbbudyWthxz0b8C5vlmVPgHaIy?rs=1&pid=ImgDetMain&cb=idpwebpc2',
        'https://via.placeholder.com/300x400?text=Black+Jeans+2'
      ]
    },
    {
      id: 2,
      name: 'Black Jeans',
      type: 'Pant',
      description: 'Slim fit black jeans made from premium denim',
      coverImage: 'https://oldnavy.gap.com/webcontent/0050/513/431/cn50513431.jpg',
      images: [
        'https://images.bewakoof.com/t1080/men-s-black-slim-fit-jeans-525681-1659356829-4.jpg',
        'https://via.placeholder.com/300x400?text=Black+Jeans+2'
      ]
    }
  ]);
  const [selectedItem, setSelectedItem] = useState(null);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  return (
    <div className="container mx-auto p-4 max-w-6xl">
     <header className="text-center mb-8">
  <h1 className="text-3xl font-bold mb-2">Item Management System</h1>
  <p className="text-gray-500 mb-4">Manage your items easily</p>
  <div className="flex justify-center mt-2">
    <Navigation view={view} setView={setView} />
  </div>
</header>


      <main className="bg-white rounded-lg shadow p-6">
        {view === 'view' ? (
          <ViewItemsPage 
            items={items} 
            setSelectedItem={setSelectedItem} 
            setCurrentImageIndex={setCurrentImageIndex} 
          />
        ) : (
          <AddItemPage items={items} setItems={setItems} />
        )}
      </main>

      {selectedItem && (
        <ItemDetailsModal 
          item={selectedItem} 
          setSelectedItem={setSelectedItem} 
          currentImageIndex={currentImageIndex} 
          setCurrentImageIndex={setCurrentImageIndex} 
        />
      )}
    </div>
  );
};

export default App;