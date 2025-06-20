import React from 'react';

const ItemDetailsModal = ({ item, setSelectedItem, currentImageIndex, setCurrentImageIndex }) => {
  const nextImage = () => {
    setCurrentImageIndex((prevIndex) => 
      (prevIndex + 1) % item.images.length
    );
  };

  const prevImage = () => {
    setCurrentImageIndex((prevIndex) => 
      (prevIndex - 1 + item.images.length) % item.images.length
    );
  };

  const enquire = () => {
    alert(`Enquiry sent for ${item.name}!`);
    setSelectedItem(null);
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
      <div className="bg-white rounded-lg p-6 max-w-2xl w-full max-h-[90vh] overflow-y-auto relative">
        <button 
          className="absolute top-4 right-4 text-2xl"
          onClick={() => setSelectedItem(null)}
        >
          &times;
        </button>
        
        <h2 className="text-2xl font-bold mb-2">{item.name}</h2>
        <p className="mb-1"><span className="font-semibold">Type:</span> {item.type}</p>
        <p className="mb-4"><span className="font-semibold">Description:</span> {item.description}</p>
        
        <div className="relative mb-6">
          <img 
            src={item.images[currentImageIndex]} 
            alt={`${item.name} ${currentImageIndex + 1}`}
            className="w-full h-96 object-contain"
          />
          <div className="flex justify-center items-center mt-4 gap-4">
            <button 
              className="px-4 py-2 bg-gray-200 rounded"
              onClick={prevImage}
            >
              &lt;
            </button>
            <span>{currentImageIndex + 1} / {item.images.length}</span>
            <button 
              className="px-4 py-2 bg-gray-200 rounded"
              onClick={nextImage}
            >
              &gt;
            </button>
          </div>
        </div>
        
        <button 
          className="w-full py-3 bg-blue-600 text-white rounded hover:bg-blue-700"
          onClick={enquire}
        >
          Enquire
        </button>
      </div>
    </div>
  );
};

export default ItemDetailsModal;
