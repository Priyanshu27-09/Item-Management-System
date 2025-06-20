import React from 'react';

const Navigation = ({ view, setView }) => (
  <nav className="flex justify-center gap-4 mb-5">
    <button 
      className={`px-4 py-2 rounded ${view === 'view' ? 'bg-blue-600 text-white' : 'bg-gray-200'}`}
      onClick={() => setView('view')}
    >
      View Items
    </button>
    <button 
      className={`px-4 py-2 rounded ${view === 'add' ? 'bg-blue-600 text-white' : 'bg-gray-200'}`}
      onClick={() => setView('add')}
    >
      Add Item
    </button>
  </nav>
);

export default Navigation;