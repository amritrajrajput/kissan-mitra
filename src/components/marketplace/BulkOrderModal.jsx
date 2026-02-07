import React, { useState } from 'react';
import { X, ShoppingCart, TrendingDown } from 'lucide-react';

const BulkOrderModal = ({ product, isOpen, onClose, onAddToCart }) => {
  const [selectedQuantity, setSelectedQuantity] = useState(1);

  if (!isOpen || !product) return null;

  const calculatePrice = () => {
    if (selectedQuantity === 10) return product.bulkPrices['10kg'];
    if (selectedQuantity === 20) return product.bulkPrices['20kg'];
    return product.price * selectedQuantity;
  };

  const calculateSavings = () => {
    const regularPrice = product.price * selectedQuantity;
    const bulkPrice = calculatePrice();
    const savings = regularPrice - bulkPrice;
    return savings > 0 ? savings : 0;
  };

  const handleAddToCart = () => {
    onAddToCart({
      ...product,
      quantity: selectedQuantity,
      finalPrice: calculatePrice(),
      savings: calculateSavings()
    });
    onClose();
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
      <div className="bg-white rounded-lg p-6 w-full max-w-md mx-4">
        <div className="flex justify-between items-center mb-4">
          <h3 className="text-xl font-bold">Bulk Order - {product.name}</h3>
          <button onClick={onClose} className="text-gray-500 hover:text-gray-700">
            <X size={24} />
          </button>
        </div>

        <div className="mb-4">
          <img src={product.image} alt={product.name} className="w-full h-32 object-cover rounded-lg mb-2" />
          <p className="text-gray-600 text-sm">{product.description}</p>
        </div>

        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-700 mb-2">Select Quantity</label>
          <div className="grid grid-cols-3 gap-2">
            <button
              onClick={() => setSelectedQuantity(1)}
              className={`p-3 rounded-lg border ${selectedQuantity === 1 ? 'bg-green-500 text-white' : 'bg-gray-100 hover:bg-gray-200'}`}
            >
              1 kg<br/>
              <span className="text-sm">₹{product.price}</span>
            </button>
            <button
              onClick={() => setSelectedQuantity(10)}
              className={`p-3 rounded-lg border ${selectedQuantity === 10 ? 'bg-green-500 text-white' : 'bg-gray-100 hover:bg-gray-200'}`}
            >
              10 kg<br/>
              <span className="text-sm">₹{product.bulkPrices['10kg']}</span>
            </button>
            <button
              onClick={() => setSelectedQuantity(20)}
              className={`p-3 rounded-lg border ${selectedQuantity === 20 ? 'bg-green-500 text-white' : 'bg-gray-100 hover:bg-gray-200'}`}
            >
              20 kg<br/>
              <span className="text-sm">₹{product.bulkPrices['20kg']}</span>
            </button>
          </div>
        </div>

        <div className="mb-4 p-3 bg-gray-50 rounded-lg">
          <div className="flex justify-between items-center">
            <span className="text-lg font-medium">Total Price:</span>
            <span className="text-2xl font-bold text-green-600">
              ₹{calculatePrice().toFixed(2)}
            </span>
          </div>
          
          {calculateSavings() > 0 && (
            <div className="flex items-center text-sm text-green-600 mt-2">
              <TrendingDown size={16} className="mr-1" />
              <span>You save ₹{calculateSavings().toFixed(2)} with bulk purchase!</span>
            </div>
          )}
        </div>

        <button
          onClick={handleAddToCart}
          className="w-full bg-green-500 text-white py-3 rounded-lg font-medium hover:bg-green-600 transition-colors flex items-center justify-center"
        >
          <ShoppingCart size={20} className="mr-2" />
          Add to Cart
        </button>
      </div>
    </div>
  );
};

export default BulkOrderModal;
