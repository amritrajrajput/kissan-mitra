import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { TrendingUp, ArrowLeft, BarChart3, Calendar, DollarSign } from 'lucide-react';

const MarketInsightsPage = () => {
  const [selectedCrop, setSelectedCrop] = useState('wheat');
  
  const marketData = {
    wheat: {
      currentPrice: "₹2,100/quintal",
      trend: "+5.2%",
      forecast: "Expected to rise by 3-5% next month",
      seasonalData: [
        { month: "Jan", price: 2000 },
        { month: "Feb", price: 2050 },
        { month: "Mar", price: 2100 },
        { month: "Apr", price: 2150 }
      ]
    },
    rice: {
      currentPrice: "₹3,200/quintal",
      trend: "-2.1%",
      forecast: "Stable with slight decrease expected",
      seasonalData: [
        { month: "Jan", price: 3300 },
        { month: "Feb", price: 3250 },
        { month: "Mar", price: 3200 },
        { month: "Apr", price: 3180 }
      ]
    }
  };

  const insights = [
    {
      title: "Live Market Prices",
      description: "Real-time prices from 50+ markets across India",
      icon: <DollarSign className="h-12 w-12 text-green-600" />
    },
    {
      title: "Seasonal Trends",
      description: "Historical data to predict future price movements",
      icon: <Calendar className="h-12 w-12 text-blue-600" />
    },
    {
      title: "Demand Forecasts",
      description: "AI-powered predictions for better decision making",
      icon: <BarChart3 className="h-12 w-12 text-purple-600" />
    }
  ];

  const crops = [
    { name: "Wheat", value: "wheat", color: "bg-yellow-500" },
    { name: "Rice", value: "rice", color: "bg-green-500" },
    { name: "Pulses", value: "pulses", color: "bg-orange-500" },
    { name: "Vegetables", value: "vegetables", color: "bg-red-500" }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-orange-50 to-yellow-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Header */}
        <div className="flex items-center mb-8">
          <Link
            to="/"
            className="flex items-center text-orange-600 hover:text-orange-800 transition-colors"
          >
            <ArrowLeft className="h-5 w-5 mr-2" />
            Back to Home
          </Link>
        </div>

        <div className="text-center mb-12">
          <div className="flex justify-center mb-4">
            <TrendingUp className="h-16 w-16 text-orange-600" />
          </div>
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Real-time Market Insights</h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Get live market prices, seasonal trends, and demand forecasts to make smart trading decisions. 
            Stay ahead with AI-powered insights.
          </p>
        </div>

        {/* Insights Features */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          {insights.map((insight, index) => (
            <div key={index} className="bg-white p-8 rounded-xl shadow-lg text-center">
              <div className="flex justify-center mb-4">{insight.icon}</div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">{insight.title}</h3>
              <p className="text-gray-600">{insight.description}</p>
            </div>
          ))}
        </div>

        {/* Market Data Section */}
        <div className="bg-white rounded-xl shadow-lg p-8 mb-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Current Market Data</h2>
          
          {/* Crop Selector */}
          <div className="flex flex-wrap gap-2 mb-6">
            {crops.map((crop) => (
              <button
                key={crop.value}
                onClick={() => setSelectedCrop(crop.value)}
                className={`px-4 py-2 rounded-lg font-medium transition-colors ${
                  selectedCrop === crop.value
                    ? `${crop.color} text-white`
                    : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
                }`}
              >
                {crop.name}
              </button>
            ))}
          </div>

          {/* Price Display */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-green-50 p-6 rounded-lg">
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Current Price</h3>
              <p className="text-2xl font-bold text-green-600">
                {marketData[selectedCrop].currentPrice}
              </p>
            </div>
            <div className="bg-blue-50 p-6 rounded-lg">
              <h3 className="text-lg font-semibold text-gray-900 mb-2">7-Day Trend</h3>
              <p className={`text-2xl font-bold ${
                marketData[selectedCrop].trend.startsWith('+') ? 'text-green-600' : 'text-red-600'
              }`}>
                {marketData[selectedCrop].trend}
              </p>
            </div>
            <div className="bg-purple-50 p-6 rounded-lg">
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Forecast</h3>
              <p className="text-sm text-gray-700">{marketData[selectedCrop].forecast}</p>
            </div>
          </div>
        </div>

        {/* Seasonal Trends */}
        <div className="bg-white rounded-xl shadow-lg p-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Seasonal Price Trends</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {marketData[selectedCrop].seasonalData.map((data, index) => (
              <div key={index} className="text-center p-4 bg-gray-50 rounded-lg">
                <p className="font-semibold text-gray-900">{data.month}</p>
                <p className="text-lg font-bold text-orange-600">₹{data.price}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Additional Market Information */}
        <div className="text-center mt-12">
          <div className="bg-blue-50 p-6 rounded-xl">
            <h3 className="text-xl font-semibold text-gray-900 mb-4">Market Analysis Tools</h3>
            <p className="text-gray-600 mb-4">
              Access advanced analytics and historical data to make informed decisions about your agricultural business.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-left">
              <div className="bg-white p-4 rounded-lg">
                <h4 className="font-semibold text-gray-900 mb-2">📊 Price Trends</h4>
                <p className="text-sm text-gray-600">Analyze 5-year price patterns and seasonal variations</p>
              </div>
              <div className="bg-white p-4 rounded-lg">
                <h4 className="font-semibold text-gray-900 mb-2">🌱 Crop Calendar</h4>
                <p className="text-sm text-gray-600">Optimal planting and harvesting times for maximum yield</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MarketInsightsPage;
