import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { ShoppingCart, Search, Filter, Star, MapPin, Clock, Leaf, Award } from 'lucide-react';
import { enhancedProducts } from '../data/enhancedProducts';

const MarketplacePage = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [sortBy, setSortBy] = useState('name');

  const categories = [
    { id: 'all', name: 'All Products', icon: '🌱' },
    { id: 'vegetables', name: 'Fresh Vegetables', icon: '🥬' },
    { id: 'fruits', name: 'Seasonal Fruits', icon: '🍎' },
    { id: 'grains', name: 'Grains & Pulses', icon: '🌾' },
    { id: 'organic', name: 'Organic Produce', icon: '🍃' },
    { id: 'spices', name: 'Spices & Herbs', icon: '🌶️' }
  ];

  const filteredProducts = enhancedProducts
    .filter(product => {
      const matchesSearch = product.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                           product.description.toLowerCase().includes(searchTerm.toLowerCase());
      const matchesCategory = selectedCategory === 'all' || 
                            (selectedCategory === 'organic' && product.certifications?.includes('Organic')) ||
                            product.category === selectedCategory;
      return matchesSearch && matchesCategory;
    })
    .sort((a, b) => {
      if (sortBy === 'price') return a.price - b.price;
      if (sortBy === 'rating') return b.rating - a.rating;
      if (sortBy === 'name') return a.name.localeCompare(b.name);
      return 0;
    });

  const featuredProducts = enhancedProducts.filter(product => product.featured).slice(0, 3);

  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 to-blue-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Header */}
        <div className="text-center mb-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-4">Farm Fresh Marketplace</h1>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Discover the finest agricultural produce directly from local farmers across India
          </p>
        </div>

        {/* Search and Filters */}
        <div className="bg-white rounded-xl shadow-lg p-6 mb-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
            <div className="md:col-span-2">
              <div className="relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
                <input
                  type="text"
                  placeholder="Search for products, farmers, or locations..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
                />
              </div>
            </div>
            <div>
              <select
                value={selectedCategory}
                onChange={(e) => setSelectedCategory(e.target.value)}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
              >
                {categories.map(category => (
                  <option key={category.id} value={category.id}>
                    {category.icon} {category.name}
                  </option>
                ))}
              </select>
            </div>
            <div>
              <select
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value)}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
              >
                <option value="name">Sort by Name</option>
                <option value="price">Sort by Price</option>
                <option value="rating">Sort by Rating</option>
              </select>
            </div>
          </div>
        </div>

        {/* Featured Products */}
        {featuredProducts.length > 0 && (
          <div className="mb-8">
            <h2 className="text-xl font-bold text-gray-900 mb-6">Featured Products</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {featuredProducts.map(product => (
                <div key={product.id} className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow">
                  <img
                    src={product.image}
                    alt={product.name}
                    className="w-full h-48 object-cover"
                  />
                  <div className="p-6">
                    <h3 className="text-lg font-semibold text-gray-900 mb-2">{product.name}</h3>
                    <div className="flex items-center mb-3">
                      <Star className="h-4 w-4 text-yellow-400 fill-current" />
                      <span className="ml-1 text-xs text-gray-600">{product.rating} ({product.reviews} reviews)</span>
                    </div>
                    <p className="text-gray-600 text-xs mb-4 line-clamp-2">{product.description}</p>
                    <div className="flex items-center justify-between mb-4">
                      <span className="text-xl font-bold text-green-600">₹{product.price}/kg</span>
                      <span className={`px-2 py-1 rounded-full text-xs ${
                        product.stock > 100 ? 'bg-green-100 text-green-800' : 'bg-red-100 text-red-800'
                      }`}>
                        {product.stock} kg left
                      </span>
                    </div>
                    <Link
                      to={`/product/${product.id}`}
                      className="w-full bg-green-500 text-white py-2 px-4 rounded-lg hover:bg-green-600 transition-colors text-center block"
                    >
                      View Details
                    </Link>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Categories Grid */}
        <div className="mb-8">
          <h2 className="text-xl font-bold text-gray-900 mb-6">Browse Categories</h2>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
            {categories.map(category => (
              <button
                key={category.id}
                onClick={() => setSelectedCategory(category.id)}
                className={`p-4 rounded-lg text-center transition-all ${
                  selectedCategory === category.id
                    ? 'bg-green-500 text-white shadow-lg'
                    : 'bg-white text-gray-700 hover:bg-green-50 hover:shadow-md'
                }`}
              >
                <div className="text-2xl mb-2">{category.icon}</div>
                <div className="text-sm font-medium">{category.name}</div>
              </button>
            ))}
          </div>
        </div>

        {/* Products Grid */}
        <div>
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-xl font-bold text-gray-900">
              {selectedCategory === 'all' ? 'All Products' :
               categories.find(c => c.id === selectedCategory)?.name}
              <span className="text-gray-500 text-base ml-2">({filteredProducts.length} items)</span>
            </h2>
          </div>

          {filteredProducts.length === 0 ? (
            <div className="text-center py-12 bg-white rounded-xl">
              <div className="text-6xl mb-4">🌱</div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">No products found</h3>
              <p className="text-gray-600">Try adjusting your search or filters</p>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredProducts.map(product => (
                <div key={product.id} className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow">
                  <div className="relative">
                    <img
                      src={product.image}
                      alt={product.name}
                      className="w-full h-48 object-cover"
                    />
                    {product.certifications?.includes('Organic') && (
                      <div className="absolute top-2 right-2 bg-green-500 text-white px-2 py-1 rounded-full text-xs flex items-center">
                        <Leaf className="h-3 w-3 mr-1" />
                        Organic
                      </div>
                    )}
                  </div>
                  <div className="p-6">
                    <h3 className="text-lg font-semibold text-gray-900 mb-2">{product.name}</h3>
                    <div className="flex items-center mb-3">
                      <Star className="h-4 w-4 text-yellow-400 fill-current" />
                      <span className="ml-1 text-xs text-gray-600">{product.rating} ({product.reviews})</span>
                    </div>
                    <div className="flex items-center text-xs text-gray-600 mb-3">
                      <MapPin className="h-4 w-4 mr-1" />
                      {product.location}
                    </div>
                    <p className="text-gray-600 text-xs mb-4 line-clamp-2">{product.description}</p>
                    <div className="flex items-center justify-between mb-4">
                      <span className="text-xl font-bold text-green-600">₹{product.price}/kg</span>
                      <span className={`px-2 py-1 rounded-full text-xs ${
                        product.stock > 100 ? 'bg-green-100 text-green-800' : 'bg-red-100 text-red-800'
                      }`}>
                        {product.stock} kg
                      </span>
                    </div>
                    <Link
                      to={`/product/${product.id}`}
                      className="w-full bg-green-500 text-white py-2 px-4 rounded-lg hover:bg-green-600 transition-colors text-center block"
                    >
                      View Product
                    </Link>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>

        {/* Stats Section */}
        <div className="mt-12 bg-gradient-to-r from-green-600 to-blue-600 text-white rounded-xl p-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-3xl font-bold mb-2">15,000+</div>
              <div className="text-sm opacity-90">Verified Farmers</div>
            </div>
            <div>
              <div className="text-3xl font-bold mb-2">50,000+</div>
              <div className="text-sm opacity-90">Happy Customers</div>
            </div>
            <div>
              <div className="text-3xl font-bold mb-2">100+</div>
              <div className="text-sm opacity-90">Product Categories</div>
            </div>
            <div>
              <div className="text-3xl font-bold mb-2">24h</div>
              <div className="text-sm opacity-90">Delivery Promise</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MarketplacePage;
