import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import { enhancedProducts } from '../data/enhancedProducts';
import { ShoppingCart, Phone, MessageCircle, Star, MapPin, Leaf, Award, Clock } from 'lucide-react';

const DirectTransactionPage = () => {
  const { id } = useParams();
  const product = enhancedProducts.find(p => p.id === parseInt(id));
  const [cart, setCart] = useState([]);
  const [showContact, setShowContact] = useState(false);
  const [selectedQuantity, setSelectedQuantity] = useState(1);

  if (!product) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-gray-900 mb-2">Product Not Found</h1>
          <p className="text-gray-600">The product you're looking for doesn't exist.</p>
        </div>
      </div>
    );
  }

  const handleAddToCart = (productData) => {
    // Check if quantity exceeds available stock
    if (productData.quantity > product.stock) {
      alert(`Only ${product.stock} kg available in stock. Please select a lower quantity.`);
      return;
    }

    setCart(prevCart => {
      const existingItem = prevCart.find(item => item.id === productData.id);
      if (existingItem) {
        const newQuantity = existingItem.quantity + productData.quantity;
        if (newQuantity > product.stock) {
          alert(`Cannot add more than ${product.stock} kg. You already have ${existingItem.quantity} kg in cart.`);
          return prevCart;
        }
        return prevCart.map(item =>
          item.id === productData.id
            ? { 
                ...item, 
                quantity: newQuantity,
                finalPrice: calculatePriceForQuantity(newQuantity)
              }
            : item
        );
      }
      return [...prevCart, {
        ...productData,
        addedAt: new Date().toISOString(),
        freshness: 'Today'
      }];
    });
    
    // Show success message
    alert(`${productData.quantity} kg of ${productData.name} added to cart!`);
  };

  const removeFromCart = (productId) => {
    setCart(prevCart => prevCart.filter(item => item.id !== productId));
  };

  const updateQuantity = (productId, newQuantity) => {
    if (newQuantity > product.stock) {
      alert(`Only ${product.stock} kg available in stock.`);
      return;
    }

    setCart(prevCart => 
      prevCart.map(item =>
        item.id === productId
          ? { 
              ...item, 
              quantity: newQuantity,
              finalPrice: calculatePriceForQuantity(newQuantity)
            }
          : item
      )
    );
  };

  const calculatePriceForQuantity = (quantity) => {
    if (quantity === 10) return product.bulkPrices['10kg'];
    if (quantity === 20) return product.bulkPrices['20kg'];
    return product.price * quantity;
  };

  const calculatePrice = () => {
    return calculatePriceForQuantity(selectedQuantity);
  };

  const cartTotal = cart.reduce((total, item) => total + (item.finalPrice || item.price * item.quantity), 0);
  const totalItems = cart.reduce((total, item) => total + item.quantity, 0);

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Product Details */}
          <div className="lg:col-span-2">
            <div className="bg-white rounded-lg shadow-lg p-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {/* Product Image */}
                <div>
                  <img
                    src={product.image}
                    alt={product.name}
                    className="w-full h-64 object-cover rounded-lg"
                  />
                  
                  {/* Certification Badges */}
                  <div className="mt-4 flex flex-wrap gap-2">
                    {product.certifications?.includes('Organic') && (
                      <span className="bg-green-100 text-green-800 px-3 py-1 rounded-full text-sm flex items-center">
                        <Leaf size={14} className="mr-1" /> Organic Certified
                      </span>
                    )}
                    {product.certifications?.includes('FSSAI') && (
                      <span className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm flex items-center">
                        <Award size={14} className="mr-1" /> FSSAI Approved
                      </span>
                    )}
                  </div>
                </div>

                {/* Product Info */}
                <div>
                  <h1 className="text-3xl font-bold text-gray-900 mb-2">{product.name}</h1>
                  
                  <div className="flex items-center mb-4">
                    <Star className="h-5 w-5 text-yellow-400 fill-current" />
                    <span className="ml-1 text-gray-600">{product.rating} ({product.reviews} reviews)</span>
                  </div>

                  <p className="text-gray-600 mb-4">{product.description}</p>

                  {/* Stock Info */}
                  <div className="mb-4">
                    <span className={`inline-block px-3 py-1 rounded-full text-sm ${product.stock > 100 ? 'bg-green-100 text-green-800' : 'bg-red-100 text-red-800'}`}>
                      {product.stock} kg in stock
                    </span>
                  </div>

                  {/* Bulk Pricing */}
                  <div className="mb-6">
                    <h3 className="text-lg font-semibold mb-3">Bulk Pricing Options</h3>
                    <div className="space-y-2">
                      <div className="flex justify-between items-center p-3 bg-gray-50 rounded-lg">
                        <span>1 kg</span>
                        <span className="font-bold">₹{product.price}</span>
                      </div>
                      <div className="flex justify-between items-center p-3 bg-green-50 rounded-lg">
                        <span>10 kg</span>
                        <span className="font-bold text-green-600">₹{product.bulkPrices['10kg']} (₹{product.bulkPrices['10kg']/10}/kg)</span>
                      </div>
                      <div className="flex justify-between items-center p-3 bg-green-100 rounded-lg">
                        <span>20 kg</span>
                        <span className="font-bold text-green-600">₹{product.bulkPrices['20kg']} (₹{product.bulkPrices['20kg']/20}/kg)</span>
                      </div>
                    </div>
                  </div>

                  {/* Farmer Information */}
                  <div className="mb-6">
                    <h3 className="text-lg font-semibold mb-3">Farmer Information</h3>
                    <div className="bg-gray-50 p-4 rounded-lg">
                      <p className="font-medium text-gray-900">{product.farmer}</p>
                      <div className="flex items-center text-gray-600 mt-1">
                        <MapPin size={16} className="mr-1" />
                        <span>{product.location}</span>
                      </div>
                      <div className="flex items-center text-gray-600 mt-1">
                        <Clock size={16} className="mr-1" />
                        <span>Usually responds within 2 hours</span>
                      </div>
                    </div>
                  </div>

                  {/* Contact Options */}
                  <div className="flex space-x-4">
                    <button
                      onClick={() => setShowContact(true)}
                      className="flex-1 bg-blue-500 text-white py-3 rounded-lg hover:bg-blue-600 transition-colors flex items-center justify-center"
                    >
                      <Phone size={16} className="mr-2" />
                      Contact Farmer
                    </button>
                    <button
                      onClick={() => setShowContact(true)}
                      className="flex-1 bg-green-500 text-white py-3 rounded-lg hover:bg-green-600 transition-colors flex items-center justify-center"
                    >
                      <MessageCircle size={16} className="mr-2" />
                      Chat Now
                    </button>
                  </div>
                </div>
              </div>
            </div>

            {/* Quick Add Section */}
            <div className="mt-6 bg-white rounded-lg shadow-lg p-6">
              <h3 className="text-xl font-bold mb-4">Quick Add to Cart</h3>
              <div className="flex items-center space-x-4">
                <select
                  value={selectedQuantity}
                  onChange={(e) => setSelectedQuantity(parseInt(e.target.value))}
                  className="border border-gray-300 rounded-lg px-4 py-2"
                >
                  <option value={1}>1 kg - ₹{product.price}</option>
                  <option value={10}>10 kg - ₹{product.bulkPrices['10kg']}</option>
                  <option value={20}>20 kg - ₹{product.bulkPrices['20kg']}</option>
                </select>
                
                <button
                  onClick={() => handleAddToCart({
                    ...product,
                    quantity: selectedQuantity,
                    finalPrice: calculatePrice()
                  })}
                  className="bg-green-500 text-white px-6 py-2 rounded-lg hover:bg-green-600 transition-colors flex items-center"
                >
                  <ShoppingCart size={16} className="mr-2" />
                  Add to Cart - ₹{calculatePrice()}
                </button>
              </div>
            </div>
          </div>

          {/* Cart Sidebar */}
          <div className="lg:col-span-1">
            <div className="bg-white rounded-lg shadow-lg p-6 sticky top-4">
              <h3 className="text-xl font-bold mb-4 flex items-center">
                <ShoppingCart size={20} className="mr-2" />
                Your Order
              </h3>
              
              {cart.length === 0 ? (
                <p className="text-gray-500 text-center py-4">No items in cart</p>
              ) : (
                <div className="space-y-3">
                  {cart.map((item, index) => (
                    <div key={index} className="border-b pb-3">
                      <div className="flex justify-between items-start mb-2">
                        <div className="flex-1">
                          <p className="font-medium text-green-800">{item.name}</p>
                          <div className="flex items-center space-x-2 mt-1">
                            <span className="bg-green-100 text-green-800 text-xs px-2 py-1 rounded-full">
                              🕒 {item.freshness}
                            </span>
                            <span className="text-xs text-gray-500">
                              Added: {new Date(item.addedAt).toLocaleTimeString()}
                            </span>
                          </div>
                        </div>
                        <button
                          onClick={() => removeFromCart(item.id)}
                          className="text-red-500 hover:text-red-700 text-sm"
                        >
                          Remove
                        </button>
                      </div>
                      
                      <div className="flex items-center justify-between">
                        <div className="flex items-center space-x-2">
                          <button
                            onClick={() => updateQuantity(item.id, Math.max(1, item.quantity - 1))}
                            className="w-6 h-6 bg-gray-200 rounded flex items-center justify-center hover:bg-gray-300"
                          >
                            -
                          </button>
                          <span className="text-sm font-medium">{item.quantity} kg</span>
                          <button
                            onClick={() => updateQuantity(item.id, item.quantity + 1)}
                            disabled={item.quantity >= product.stock}
                            className="w-6 h-6 bg-gray-200 rounded flex items-center justify-center hover:bg-gray-300 disabled:opacity-50"
                          >
                            +
                          </button>
                        </div>
                        <span className="font-semibold">₹{(item.finalPrice || item.price * item.quantity).toFixed(2)}</span>
                      </div>
                    </div>
                  ))}
                  
                  <div className="border-t pt-3">
                    <div className="space-y-2 mb-4">
                      <div className="flex justify-between text-sm">
                        <span>Items ({totalItems} kg):</span>
                        <span>₹{cartTotal.toFixed(2)}</span>
                      </div>
                      <div className="flex justify-between text-sm">
                        <span>Freshness Guarantee:</span>
                        <span className="text-green-600">Free</span>
                      </div>
                      <div className="flex justify-between text-sm">
                        <span>Delivery (Next Day):</span>
                        <span className="text-green-600">₹50.00</span>
                      </div>
                    </div>
                    
                    <div className="flex justify-between font-bold text-lg border-t pt-2">
                      <span>Grand Total:</span>
                      <span>₹{(cartTotal + 50).toFixed(2)}</span>
                    </div>
                    
                    <button className="w-full mt-4 bg-green-600 text-white py-3 rounded-lg hover:bg-green-700 transition-colors font-semibold">
                      🚚 Proceed to Checkout
                    </button>
                    
                    <p className="text-xs text-center text-gray-500 mt-2">
                      Fresh produce will be delivered within 24 hours
                    </p>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DirectTransactionPage;
