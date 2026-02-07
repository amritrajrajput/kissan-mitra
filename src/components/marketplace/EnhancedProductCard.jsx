import React, { useState } from 'react';
import { Star, MapPin, ShoppingCart, Package, Leaf, Award } from 'lucide-react';
import BulkOrderModal from './BulkOrderModal';

const EnhancedProductCard = ({ product, onAddToCart }) => {
  const [showBulkModal, setShowBulkModal] = useState(false);

  const handleAddToCart = (productData) => {
    onAddToCart(productData);
  };

  const getDiscountPercentage = () => {
    const regularPrice = product.price * 20;
    const bulkPrice = product.bulkPrices['20kg'];
    return Math.round(((regularPrice - bulkPrice) / regularPrice) * 100);
  };

  return (
    <>
      <div className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300">
        <div className="relative">
          <img
            src={product.image}
            alt={product.name}
            className="w-full h-48 object-cover"
          />
          
          {/* Certification Badges */}
          <div className="absolute top-2 left-2 flex flex-col space-y-1">
            {product.certifications?.includes('Organic') && (
              <span className="bg-green-500 text-white px-2 py-1 rounded-full text-xs flex items-center">
                <Leaf size={12} className="mr-1" /> Organic
              </span>
            )}
            {product.certifications?.includes('FSSAI') && (
              <span className="bg-blue-500 text-white px-2 py-1 rounded-full text-xs flex items-center">
                <Award size={12} className="mr-1" /> FSSAI
              </span>
            )}
          </div>

          {/* Stock Badge */}
          <div className="absolute top-2 right-2">
            <span className={`px-2 py-1 rounded-full text-xs ${product.stock > 100 ? 'bg-green-100 text-green-800' : 'bg-red-100 text-red-800'}`}>
              {product.stock} kg available
            </span>
          </div>
        </div>

        <div className="p-4">
          <h3 className="text-lg font-semibold text-gray-900 mb-1">{product.name}</h3>
          
          <div className="flex items-center mb-2">
            <Star className="h-4 w-4 text-yellow-400 fill-current" />
            <span className="ml-1 text-sm text-gray-600">
              {product.rating} ({product.reviews} reviews)
            </span>
          </div>

          <div className="flex items-center text-sm text-gray-600 mb-2">
            <MapPin className="h-4 w-4 mr-1" />
            {product.location}
          </div>

          <div className="mb-3">
            <div className="flex justify-between items-center">
              <span className="text-2xl font-bold text-green-600">
                ₹{product.price}/kg
              </span>
              {product.bulkPrices && (
                <span className="text-xs text-green-600 bg-green-100 px-2 py-1 rounded">
                  Save {getDiscountPercentage()}% on bulk
                </span>
              )}
            </div>
          </div>

          <div className="space-y-2">
            <button
              onClick={() => setShowBulkModal(true)}
              className="w-full bg-green-500 text-white py-2 rounded-md hover:bg-green-600 transition-colors flex items-center justify-center text-sm"
            >
              <Package size={16} className="mr-2" />
              Buy in Bulk
            </button>
            
            <button
              onClick={() => handleAddToCart({ ...product, quantity: 1, finalPrice: product.price })}
              className="w-full border border-green-500 text-green-500 py-2 rounded-md hover:bg-green-50 transition-colors flex items-center justify-center text-sm"
            >
              <ShoppingCart size={16} className="mr-2" />
              Add 1 kg - ₹{product.price}
            </button>
          </div>

          {/* Bulk Pricing Preview */}
          {product.bulkPrices && (
            <div className="mt-3 text-xs text-gray-500 bg-gray-50 p-2 rounded">
              <div className="font-medium mb-1">Bulk Pricing:</div>
              <div className="flex justify-between">
                <span>10kg: ₹{product.bulkPrices['10kg']}</span>
                <span>20kg: ₹{product.bulkPrices['20kg']}</span>
              </div>
            </div>
          )}
        </div>
      </div>

      <BulkOrderModal
        product={product}
        isOpen={showBulkModal}
        onClose={() => setShowBulkModal(false)}
        onAddToCart={handleAddToCart}
      />
    </>
  );
};

export default EnhancedProductCard;
