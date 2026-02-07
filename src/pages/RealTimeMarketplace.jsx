import React, { useState, useEffect } from 'react';
import { ShoppingCart, TrendingUp, TrendingDown, Star, Clock, MapPin, Phone, ShoppingBag, Store } from 'lucide-react';
import { Link } from 'react-router-dom';
import { comprehensiveProducts, buyProducts, categories, subcategories } from '../data/comprehensiveProducts';
import { useShoppingCart } from '../context/ShoppingCartContext';

const RealTimeMarketplace = () => {
  const { cart, addToCart, removeFromCart, updateQuantity, getTotalPrice, getTotalItems } = useShoppingCart();
  const [sellProducts, setSellProducts] = useState([]);
  const [buyProductsList, setBuyProductsList] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [selectedSubcategory, setSelectedSubcategory] = useState('all');
  const [selectedType, setSelectedType] = useState('sell');
  const [sortBy, setSortBy] = useState('price');
  const [searchTerm, setSearchTerm] = useState('');

  // Initialize with comprehensive products
  useEffect(() => {
    setSellProducts(comprehensiveProducts.filter(p => p.type === 'sell'));
    setBuyProductsList(buyProducts.filter(p => p.type === 'buy'));

    // Simulate real-time price updates
    const interval = setInterval(() => {
      setSellProducts(prevProducts => 
        prevProducts.map(product => ({
          ...product,
          price: Math.max(1, product.price + (Math.random() - 0.5) * 2),
          lastUpdated: new Date().toISOString()
        }))
      );
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  const currentProducts = selectedType === 'sell' ? sellProducts : buyProductsList;

  const filteredProducts = currentProducts.filter(product => {
    const matchesCategory = selectedCategory === 'all' || product.category === selectedCategory;
    const matchesSubcategory = selectedSubcategory === 'all' || product.subcategory === selectedSubcategory;
    const matchesSearch = product.name.toLowerCase().includes(searchTerm.toLowerCase());
    return matchesCategory && matchesSubcategory && matchesSearch;
  });

  const sortedProducts = [...filteredProducts].sort((a, b) => {
    if (sortBy === 'price') return a.price - b.price;
    if (sortBy === 'rating') return b.rating - a.rating;
    return 0;
  });

  const cartTotal = cart.reduce((total, item) => total + (item.price * item.quantity), 0);
  const cartItemsCount = cart.reduce((total, item) => total + item.quantity, 0);

  const currentSubcategories = selectedCategory !== 'all' ? subcategories[selectedCategory] || [] : [];

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Header */}
        <div className="text-center mb-8">
          <h1 className="text-3xl font-bold text-gradient mb-2">
            {selectedType === 'sell' ? 'Real-Time Marketplace' : 'Buy Requirements'}
          </h1>
          <p className="text-gray-600">
            {selectedType === 'sell' 
              ? 'Fresh produce directly from farmers - 15 vegetables & 8 pulses available' 
              : 'Farmers looking to buy produce - connect directly with buyers'}
          </p>
        </div>

        {/* Filters and Search */}
        <div className="glass-card mb-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Type</label>
              <select
                value={selectedType}
                onChange={(e) => setSelectedType(e.target.value)}
                className="input-modern"
              >
                <option value="sell">For Sale</option>
                <option value="buy">Looking to Buy</option>
              </select>
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Category</label>
              <select
                value={selectedCategory}
                onChange={(e) => setSelectedCategory(e.target.value)}
                className="input-modern"
              >
                <option value="all">All Categories</option>
                {categories.map(cat => (
                  <option key={cat.id} value={cat.id}>{cat.name}</option>
                ))}
              </select>
            </div>
            {selectedCategory !== 'all' && currentSubcategories.length > 0 && (
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Subcategory</label>
                <select
                  value={selectedSubcategory}
                  onChange={(e) => setSelectedSubcategory(e.target.value)}
                  className="input-modern"
                >
                  <option value="all">All Subcategories</option>
                  {currentSubcategories.map(sub => (
                    <option key={sub.id} value={sub.id}>{sub.name}</option>
                  ))}
                </select>
              </div>
            )}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Search</label>
              <input
                type="text"
                placeholder={`Search ${selectedType === 'sell' ? 'products' : 'requirements'}...`}
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="input-modern"
              />
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          {/* Products Grid */}
          <div className="lg:col-span-3">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {sortedProducts.map(product => (
                <Link 
                  key={product.id} 
                  to={selectedType === 'sell' ? `/product/${product.id}` : `/direct-buy/${product.id}`}
                  className="card-modern hover:shadow-lg transition-shadow duration-300 block"
                >
                  <div className="relative">
                    <img
                      src={product.image}
                      alt={product.name}
                      className="w-full h-48 object-cover rounded-t-lg"
                    />
                    {selectedType === 'sell' && product.discount && (
                      <div className="absolute top-2 right-2 bg-red-500 text-white px-2 py-1 rounded-full text-sm">
                        -{product.discount}%
                      </div>
                    )}
                  </div>
                  <div className="p-4">
                    <h3 className="text-lg font-semibold text-gray-900 mb-2">{product.name}</h3>
                    <div className="flex items-center mb-2">
                      <Star className="h-4 w-4 text-yellow-400 fill-current" />
                      <span className="ml-1 text-xs text-gray-600">{product.rating} ({product.reviews})</span>
                    </div>
                    <div className="flex items-center text-xs text-gray-600 mb-2">
                      <MapPin className="h-4 w-4 mr-1" />
                      {product.location}
                    </div>
                    {selectedType === 'sell' ? (
                      <>
                        <div className="flex items-center text-xs text-gray-600 mb-2">
                          <Phone className="h-4 w-4 mr-1" />
                          {product.farmer}
                        </div>
                    <div className="flex items-center justify-between mb-4">
                      <div>
                        <span className="text-2xl font-bold text-green-600">₹{product.price.toFixed(2)}</span>
                        {product.originalPrice && (
                          <span className="text-sm text-gray-500 line-through ml-2">₹{product.originalPrice}</span>
                        )}
                      </div>
                      <span className="text-sm text-gray-600">{product.stock} {product.unit} left</span>
                    </div>
                        <div className="flex items-center justify-between">
                          <div className="flex items-center text-sm text-gray-600">
                            <Clock className="h-4 w-4 mr-1" />
                            Updated: {new Date(product.lastUpdated).toLocaleTimeString()}
                          </div>
                          <button
                            onClick={(e) => {
                              e.preventDefault();
                              addToCart(product);
                            }}
                            className="btn-modern btn-primary"
                          >
                            Add to Cart
                          </button>
                        </div>
                      </>
                    ) : (
                      <>
                        <div className="flex items-center text-xs text-gray-600 mb-2">
                          <Store className="h-4 w-4 mr-1" />
                          {product.buyer}
                        </div>
                    <div className="flex items-center justify-between mb-4">
                      <div>
                        <span className="text-2xl font-bold text-blue-600">₹{product.price.toFixed(2)}</span>
                        <span className="text-sm text-gray-500 ml-2">per {product.unit}</span>
                      </div>
                      <span className="text-sm text-gray-600">{product.quantity} {product.unit} needed</span>
                    </div>
                        <div className="flex items-center justify-between">
                          <div className="flex items-center text-sm text-gray-600">
                            <Clock className="h-4 w-4 mr-1" />
                            Deadline: {new Date(product.deadline).toLocaleDateString()}
                          </div>
                          <button
                            onClick={(e) => e.preventDefault()}
                            className="btn-modern btn-secondary"
                          >
                            Contact Buyer
                          </button>
                        </div>
                      </>
                    )}
                  </div>
                </Link>
              ))}
            </div>
          </div>

          {/* Cart Sidebar */}
          <div className="lg:col-span-1">
            <div className="glass-card sticky top-4">
              <h3 className="text-xl font-bold mb-4">
                {selectedType === 'sell' ? 'Shopping Cart' : 'Interested Offers'} ({cartItemsCount})
              </h3>
              {cart.length === 0 ? (
                <p className="text-gray-600 text-center py-8">
                  {selectedType === 'sell' ? 'Your cart is empty' : 'No offers yet'}
                </p>
              ) : (
                <div className="space-y-4">
                  {cart.map(item => (
                    <div key={item.id} className="border-b pb-4">
                      <div className="flex justify-between items-start">
                        <div>
                          <h4 className="font-medium text-gray-900">{item.name}</h4>
                          <p className="text-sm text-gray-600">₹{item.price.toFixed(2)} × {item.quantity}</p>
                        </div>
                        <button
                          onClick={() => removeFromCart(item.id)}
                          className="text-red-500 hover:text-red-700"
                        >
                          Remove
                        </button>
                      </div>
                      <div className="flex items-center mt-2">
                        <button
                          onClick={() => updateQuantity(item.id, item.quantity - 1)}
                          className="px-2 py-1 border rounded"
                        >
                          -
                        </button>
                        <span className="px-3">{item.quantity}</span>
                        <button
                          onClick={() => updateQuantity(item.id, item.quantity + 1)}
                          className="px-2 py-1 border rounded"
                        >
                          +
                        </button>
                      </div>
                    </div>
                  ))}
                  <div className="border-t pt-4">
                    <div className="flex justify-between items-center mb-4">
                      <span className="font-bold">Total:</span>
                      <span className="text-xl font-bold text-green-600">₹{cartTotal.toFixed(2)}</span>
                    </div>
                    <button className="btn-modern btn-primary w-full">
                      {selectedType === 'sell' ? 'Proceed to Checkout' : 'Send Offer'}
                    </button>
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

export default RealTimeMarketplace;
