import React from 'react';
import { Link } from 'react-router-dom';
import { Users, ArrowLeft, Heart, MessageCircle, Handshake } from 'lucide-react';

const FarmerConnectionPage = () => {
  const connectionFeatures = [
    {
      title: "Direct Communication",
      description: "Chat directly with farmers to discuss products and build relationships",
      icon: <MessageCircle className="h-12 w-12 text-purple-600" />
    },
    {
      title: "Verified Profiles",
      description: "All farmers are verified with complete profile information and reviews",
      icon: <Handshake className="h-12 w-12 text-green-600" />
    },
    {
      title: "Long-term Partnerships",
      description: "Build lasting relationships with farmers for consistent supply",
      icon: <Heart className="h-12 w-12 text-red-500" />
    }
  ];

  const farmers = [
    {
      name: "Rajesh Kumar",
      location: "Punjab",
      crops: ["Wheat", "Rice", "Vegetables"],
      experience: "15 years",
      image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop&crop=face",
      rating: 4.8
    },
    {
      name: "Anita Devi",
      location: "Haryana",
      crops: ["Organic Vegetables", "Fruits"],
      experience: "10 years",
      image: "https://images.unsplash.com/photo-1494790108755-2616b612b786?w=150&h=150&fit=crop&crop=face",
      rating: 4.9
    },
    {
      name: "Vikram Singh",
      location: "Rajasthan",
      crops: ["Pulses", "Oilseeds", "Spices"],
      experience: "20 years",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop&crop=face",
      rating: 4.7
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 to-pink-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Header */}
        <div className="flex items-center mb-8">
          <Link
            to="/"
            className="flex items-center text-purple-600 hover:text-purple-800 transition-colors"
          >
            <ArrowLeft className="h-5 w-5 mr-2" />
            Back to Home
          </Link>
        </div>

        <div className="text-center mb-12">
          <div className="flex justify-center mb-4">
            <Users className="h-16 w-16 text-purple-600" />
          </div>
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Direct Farmer Connection</h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Build meaningful relationships with local farmers. Know exactly where your food comes from 
            and support sustainable farming practices directly.
          </p>
        </div>

        {/* Connection Features */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          {connectionFeatures.map((feature, index) => (
            <div key={index} className="bg-white p-8 rounded-xl shadow-lg text-center">
              <div className="flex justify-center mb-4">{feature.icon}</div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">{feature.title}</h3>
              <p className="text-gray-600">{feature.description}</p>
            </div>
          ))}
        </div>

        {/* Featured Farmers */}
        <div className="bg-white rounded-xl shadow-lg p-8 mb-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-6 text-center">Featured Farmers</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {farmers.map((farmer, index) => (
              <div key={index} className="border rounded-lg p-6 hover:shadow-md transition-shadow">
                <div className="flex items-center mb-4">
                  <img
                    src={farmer.image}
                    alt={farmer.name}
                    className="h-16 w-16 rounded-full mr-4"
                  />
                  <div>
                    <h3 className="font-semibold text-gray-900">{farmer.name}</h3>
                    <p className="text-sm text-gray-600">{farmer.location}</p>
                    <div className="flex items-center">
                      <span className="text-yellow-500">★</span>
                      <span className="text-sm text-gray-600 ml-1">{farmer.rating}</span>
                    </div>
                  </div>
                </div>
                <div className="mb-3">
                  <p className="text-sm text-gray-600 mb-1"><strong>Crops:</strong> {farmer.crops.join(", ")}</p>
                  <p className="text-sm text-gray-600"><strong>Experience:</strong> {farmer.experience}</p>
                </div>
                <Link
                  to="/messages"
                  className="w-full bg-purple-600 text-white py-2 px-4 rounded-lg hover:bg-purple-700 transition-colors text-center block"
                >
                  Connect Now
                </Link>
              </div>
            ))}
          </div>
        </div>

        {/* Additional Information */}
        <div className="text-center">
          <div className="bg-purple-100 p-6 rounded-xl">
            <h3 className="text-xl font-semibold text-gray-900 mb-4">Why Connect Directly?</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-left">
              <div className="bg-white p-4 rounded-lg">
                <h4 className="font-semibold text-gray-900 mb-2">🤝 Build Trust</h4>
                <p className="text-sm text-gray-600">Establish long-term relationships with verified farmers</p>
              </div>
              <div className="bg-white p-4 rounded-lg">
                <h4 className="font-semibold text-gray-900 mb-2">🌱 Quality Assurance</h4>
                <p className="text-sm text-gray-600">Get fresh, organic produce directly from source</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FarmerConnectionPage;
