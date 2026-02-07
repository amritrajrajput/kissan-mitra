import React from 'react';
import { useAuthStore } from '../stores/authStore.js'; // Corrected import path
import { Link } from 'react-router-dom';
import { User, ShoppingBag, TrendingUp, DollarSign } from 'lucide-react';

const DashboardPage = () => {
  const { user } = useAuthStore();

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <div className="text-center mb-8">
        <h1 className="text-3xl font-bold text-gray-900 mb-4">
          Welcome to Kisaan Mitra!
        </h1>
        <p className="text-xl text-gray-600">
          Your personalized dashboard with real data
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
      {/* Profile Card */}
      <div className="bg-white p-6 rounded-lg shadow-md flex flex-col items-center">
        <User className="h-12 w-12 text-primary-600 mb-4" />
        <h3 className="text-xl font-semibold text-gray-900 mb-2">Profile</h3>
        <p className="text-gray-600 text-center mb-4">Manage your personal information and settings.</p>
        <Link
          to="/profile"
          className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-primary-600 hover:bg-primary-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary-500"
        >
          View Profile
        </Link>
      </div>

      {/* Marketplace Card */}
      <div className="bg-white p-6 rounded-lg shadow-md flex flex-col items-center">
        <ShoppingBag className="h-12 w-12 text-primary-600 mb-4" />
        <h3 className="text-xl font-semibold text-gray-900 mb-2">Marketplace</h3>
        <p className="text-gray-600 text-center mb-4">Explore products, buy, or list your own.</p>
        <Link
          to="/marketplace"
          className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-primary-600 hover:bg-primary-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary-500"
        >
          Go to Marketplace
        </Link>
      </div>

        {/* Sales/Purchases Overview (Placeholder) */}
        <div className="bg-white p-6 rounded-lg shadow-md flex flex-col items-center">
          <TrendingUp className="h-12 w-12 text-primary-600 mb-4" />
          <h3 className="text-xl font-semibold text-gray-900 mb-2">Activity Overview</h3>
          <p className="text-gray-600 text-center mb-4">View your recent sales and purchases.</p>
        </div>
      </div>

      {/* Additional Sections (e.g., Recent Messages, Quick Actions) could go here */}
      <div className="mt-12 text-center">
        <h2 className="text-2xl font-bold text-gray-900 mb-4">Quick Actions</h2>
        <div className="flex justify-center space-x-4">
          <Link
            to="/messages"
            className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md shadow-sm text-white bg-green-600 hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500"
          >
            <DollarSign className="h-5 w-5 mr-2" />
            Messages
          </Link>
          <Link
            to="/list-product" // Assuming a route for listing products
            className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md shadow-sm text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
          >
            <ShoppingBag className="h-5 w-5 mr-2" />
            List a Product
          </Link>
        </div>
      </div>
    </div>
  );
};

export default DashboardPage;
