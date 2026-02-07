import React from 'react';
import { Link } from 'react-router-dom';
import { ShoppingBag, ArrowLeft, TrendingDown, Shield, Award } from 'lucide-react';

const FairPricingPage = () => {
  const pricingBenefits = [
    {
      title: "No Middlemen",
      description: "Direct farmer-to-buyer transactions eliminate unnecessary intermediaries",
      savings: "Save up to 40%",
      icon: <TrendingDown className="h-12 w-12 text-green-600" />
    },
    {
      title: "Transparent Pricing",
      description: "Real-time market prices visible to both farmers and buyers",
      savings: "100% Transparent",
      icon: <Shield className="h-12 w-12 text-blue-600" />
    },
    {
      title: "Better Margins",
      description: "Farmers earn more while buyers pay less - a win-win for everyone",
      savings: "Win-Win Model",
      icon: <Award className="h-12 w-12 text-yellow-500" />
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-purple-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Header */}
        <div className="flex items-center mb-8">
          <Link
            to="/"
            className="flex items-center text-blue-600 hover:text-blue-800 transition-colors"
          >
            <ArrowLeft className="h-5 w-5 mr-2" />
            Back to Home
          </Link>
        </div>

        <div className="text-center mb-12">
          <div className="flex justify-center mb-4">
            <ShoppingBag className="h-16 w-16 text-blue-600" />
          </div>
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Fair Transparent Pricing</h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Experience complete transparency in agricultural pricing. No hidden costs, 
            no middlemen markups - just fair prices for farmers and buyers.
          </p>
        </div>

        {/* Pricing Benefits */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          {pricingBenefits.map((benefit, index) => (
            <div key={index} className="bg-white p-8 rounded-xl shadow-lg text-center">
              <div className="flex justify-center mb-4">{benefit.icon}</div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">{benefit.title}</h3>
              <p className="text-gray-600 mb-4">{benefit.description}</p>
              <div className="bg-gray-100 py-2 px-4 rounded-full inline-block">
                <span className="font-bold text-gray-900">{benefit.savings}</span>
              </div>
            </div>
          ))}
        </div>

        {/* How Pricing Works */}
        <div className="bg-white rounded-xl shadow-lg p-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-6 text-center">How Our Pricing Works</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-lg font-semibold text-green-600 mb-3">For Farmers</h3>
              <ul className="space-y-2 text-gray-700">
                <li className="flex items-start">
                  <span className="text-green-500 mr-2">•</span>
                  Set your own prices based on market conditions
                </li>
                <li className="flex items-start">
                  <span className="text-green-500 mr-2">•</span>
                  Get 100% of the selling price - no commissions
                </li>
                <li className="flex items-start">
                  <span className="text-green-500 mr-2">•</span>
                  Access real-time market price information
                </li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-semibold text-blue-600 mb-3">For Buyers</h3>
              <ul className="space-y-2 text-gray-700">
                <li className="flex items-start">
                  <span className="text-blue-500 mr-2">•</span>
                  See transparent pricing from multiple farmers
                </li>
                <li className="flex items-start">
                  <span className="text-blue-500 mr-2">•</span>
                  Compare prices and quality before buying
                </li>
                <li className="flex items-start">
                  <span className="text-blue-500 mr-2">•</span>
                  Pay directly to farmers - no hidden fees
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Pricing Comparison */}
        <div className="text-center mt-12">
          <div className="bg-blue-50 p-6 rounded-xl">
            <h3 className="text-xl font-semibold text-gray-900 mb-4">Price Comparison</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-left">
              <div className="bg-white p-4 rounded-lg">
                <h4 className="font-semibold text-gray-900 mb-2">Traditional Market</h4>
                <ul className="text-sm text-gray-600 space-y-1">
                  <li>• Multiple middlemen</li>
                  <li>• 30-40% markup</li>
                  <li>• Hidden costs</li>
                  <li>• Price opacity</li>
                </ul>
              </div>
              <div className="bg-green-50 p-4 rounded-lg">
                <h4 className="font-semibold text-gray-900 mb-2">Kisaan Mitra</h4>
                <ul className="text-sm text-gray-600 space-y-1">
                  <li>• Direct from farmers</li>
                  <li>• 0% commission</li>
                  <li>• Transparent pricing</li>
                  <li>• Fair for everyone</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FairPricingPage;
