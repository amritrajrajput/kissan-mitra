import React from 'react';
import { Link } from 'react-router-dom';
import { Leaf, ArrowLeft, ShoppingBag, CheckCircle, Star } from 'lucide-react';

const OrganicProducePage = () => {
  const products = [
    {
      name: "Organic Tomatoes",
      price: "₹40/kg",
      farmer: "Rajesh Kumar, Punjab",
      image: "https://images.unsplash.com/photo-1546094096-0df4bcaaa337?w=400&h=300&fit=crop",
      description: "Fresh, juicy tomatoes grown without any chemicals"
    },
    {
      name: "Organic Spinach",
      price: "₹25/kg",
      farmer: "Anita Devi, Haryana",
      image: "https://images.unsplash.com/photo-1576045057995-568f588f82fb?w=400&h=300&fit=crop",
      description: "Nutrient-rich spinach harvested daily"
    },
    {
      name: "Organic Carrots",
      price: "₹35/kg",
      farmer: "Vikram Singh, Rajasthan",
      image: "https://images.unsplash.com/photo-1598170845058-32b9d6a5da37?w=400&h=300&fit=crop",
      description: "Sweet and crunchy carrots straight from farm"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 to-blue-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Header */}
        <div className="flex items-center mb-8">
          <Link
            to="/"
            className="flex items-center text-green-600 hover:text-green-800 transition-colors"
          >
            <ArrowLeft className="h-5 w-5 mr-2" />
            Back to Home
          </Link>
        </div>

        <div className="text-center mb-12">
          <div className="flex justify-center mb-4">
            <Leaf className="h-16 w-16 text-green-600" />
          </div>
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Fresh Organic Produce</h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Discover the finest organic produce directly from local farmers. 
            100% chemical-free, harvested daily for maximum freshness and nutrition.
          </p>
        </div>

        {/* Benefits */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          <div className="text-center p-6 bg-white rounded-xl shadow-md">
            <CheckCircle className="h-12 w-12 text-green-600 mx-auto mb-4" />
            <h3 className="text-lg font-semibold mb-2">100% Organic</h3>
            <p className="text-gray-600">Certified organic produce without chemicals</p>
          </div>
          <div className="text-center p-6 bg-white rounded-xl shadow-md">
            <ShoppingBag className="h-12 w-12 text-blue-600 mx-auto mb-4" />
            <h3 className="text-lg font-semibold mb-2">Direct from Farmers</h3>
            <p className="text-gray-600">No middlemen, better prices for everyone</p>
          </div>
          <div className="text-center p-6 bg-white rounded-xl shadow-md">
            <Star className="h-12 w-12 text-yellow-500 mx-auto mb-4" />
            <h3 className="text-lg font-semibold mb-2">Premium Quality</h3>
            <p className="text-gray-600">Handpicked daily for maximum freshness</p>
          </div>
        </div>

        {/* Products Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {products.map((product, index) => (
            <div key={index} className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow">
              <img
                src={product.image}
                alt={product.name}
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <h3 className="text-xl font-semibold text-gray-900 mb-2">{product.name}</h3>
                <p className="text-green-600 font-bold text-lg mb-2">{product.price}</p>
                <p className="text-gray-600 text-sm mb-3">{product.farmer}</p>
                <p className="text-gray-700 mb-4">{product.description}</p>
                <Link
                  to="/marketplace"
                  className="w-full bg-green-600 text-white py-2 px-4 rounded-lg hover:bg-green-700 transition-colors text-center block"
                >
                  Buy Now
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default OrganicProducePage;
