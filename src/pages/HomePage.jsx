import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { 
  Leaf, 
  ShoppingBag, 
  Users, 
  TrendingUp, 
  Star,
  ArrowRight,
  ChevronRight,
  CheckCircle,
  Phone,
  Mail,
  MapPin
} from 'lucide-react';

const HomePage = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const features = [
    {
      icon: <Leaf className="h-10 w-10 text-primary-600" />,
      title: "Fresh Organic Produce",
      description: "Direct from local farmers to your table - 100% organic, chemical-free, and harvested daily for maximum freshness.",
      link: "/organic-produce"
    },
    {
      icon: <ShoppingBag className="h-10 w-10 text-primary-600" />,
      title: "Fair Transparent Pricing",
      description: "No middlemen, no hidden costs. Farmers get better prices, buyers save money - everyone wins!",
      link: "/fair-pricing"
    },
    {
      icon: <Users className="h-10 w-10 text-primary-600" />,
      title: "Direct Farmer Connection",
      description: "Build lasting relationships with local farmers. Know exactly where your food comes from.",
      link: "/farmer-connection"
    },
    {
      icon: <TrendingUp className="h-10 w-10 text-primary-700" />,
      title: "Real-time Market Insights",
      description: "Get live market prices, seasonal trends, and demand forecasts to make smart decisions.",
      link: "/market-insights"
    }
  ];

  const testimonials = [
    {
      name: "Rajesh Kumar",
      role: "Organic Farmer, Punjab",
      image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&h=100&fit=crop&crop=face",
      content: "Kisaan Mitra changed my life! I now sell directly to customers and earn 40% more. The platform is so easy to use.",
      rating: 5
    },
    {
      name: "Anita Sharma",
      role: "Restaurant Owner, Delhi",
      image: "https://images.unsplash.com/photo-1494790108755-2616b612b786?w=100&h=100&fit=crop&crop=face",
      content: "The quality of produce is exceptional! My customers love the freshness, and I love the direct farmer relationships.",
      rating: 5
    },
    {
      name: "Vikram Singh",
      role: "Wholesale Buyer, Mumbai",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop&crop=face",
      content: "Finally, a platform that understands both farmer and buyer needs. Transparent pricing and quality assurance!",
      rating: 5
    }
  ];

  const stats = [
    { value: "15,000+", label: "Verified Farmers", icon: <Users className="h-6 w-6" /> },
    { value: "50,000+", label: "Happy Customers", icon: <Star className="h-6 w-6" /> },
    { value: "₹25Cr+", label: "Trade Volume", icon: <TrendingUp className="h-6 w-6" /> },
    { value: "50+", label: "Cities Covered", icon: <MapPin className="h-6 w-6" /> }
  ];

  const howItWorks = [
    {
      step: 1,
      title: "Register",
      description: "Sign up as farmer or buyer in 2 minutes",
      icon: <CheckCircle className="h-8 w-8 text-success-600" />
    },
    {
      step: 2,
      title: "Connect",
      description: "Browse products or list your produce",
      icon: <ShoppingBag className="h-8 w-8 text-primary-600" />
    },
    {
      step: 3,
      title: "Trade",
      description: "Negotiate directly and finalize deals",
      icon: <Users className="h-8 w-8 text-primary-600" />
    },
    {
      step: 4,
      title: "Deliver",
      description: "Fresh produce delivered to your doorstep",
      icon: <Leaf className="h-8 w-8 text-success-600" />
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-primary-50 to-primary-100">
      {/* Hero Section with Animation */}
        <section className="relative bg-gradient-to-br from-green-600 via-green-700 to-green-800 text-white overflow-hidden">
          <div className="absolute inset-0 bg-black opacity-20"></div>
          <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-32">
            <div className={`text-center transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
            Connect Farmers & Buyers
            <br />
            <span className="text-lime-300">Directly</span>
          </h1>
          <p className="text-lg md:text-xl mb-10 max-w-3xl mx-auto leading-relaxed">
            Join India's largest direct-to-farmer marketplace. Fresh organic produce, 
            fair prices, and zero middlemen. Transforming agriculture, one connection at a time.
          </p>
          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
            <Link
              to="/register"
              className="bg-white text-green-600 px-8 py-4 rounded-full font-bold text-lg hover:bg-gray-100 transition-all duration-300 transform hover:scale-105 shadow-lg"
            >
              Start as Farmer
            </Link>
            <Link
              to="/marketplace"
              className="bg-lime-400 text-gray-900 px-8 py-4 rounded-full font-bold text-lg hover:bg-lime-300 transition-all duration-300 transform hover:scale-105 shadow-lg"
            >
              Browse Marketplace
            </Link>
          </div>
            </div>
          </div>
        </section>

        {/* Stats Section with Animation */}
      <section className="py-16 bg-gradient-to-br from-primary-50 to-primary-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div 
                key={index} 
                className="text-center p-6 rounded-xl bg-gradient-to-br from-primary-200 to-primary-500 hover:shadow-lg transition-all duration-300"
              >
                <div className="flex justify-center mb-3 text-primary-600">{stat.icon}</div>
                <div className="text-3xl font-bold text-gray-900 mb-2">{stat.value}</div>
                <div className="text-gray-600 font-medium">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

    
      <section className="py-20 bg-gradient-to-br from-primary-100 to-primary-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">How It Works</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Simple 4-step process to connect farmers and buyers directly
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {howItWorks.map((step, index) => (
              <div key={index} className="text-center">
                <div className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300">
                  <div className="flex justify-center mb-4">{step.icon}</div>
                  <div className="text-2xl font-bold text-gray-900 mb-2">Step {step.step}</div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">{step.title}</h3>
                  <p className="text-gray-600">{step.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section with Enhanced Cards */}
      <section className="py-20 bg-gradient-to-br from-primary-50 to-primary-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Why Choose Kisaan Mitra?</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Experience the future of agricultural trade with cutting-edge features
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <Link
                key={index}
                to={feature.link}
                className="bg-gradient-to-br from-primary-700 to-primary-300 p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 border border-gray-100 cursor-pointer block"
              >
                <div className="flex justify-center mb-6">
                  <div className="p-4 rounded-full bg-gradient-to-br from-primary-100 to-primary-100">
                    {feature.icon}
                  </div>
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4 text-center">{feature.title}</h3>
                <p className="text-gray-900 text-center leading-relaxed">{feature.description}</p>
              </Link>
            ))}
          </div>
        </div>
      </section>


      <section className="py-20 bg-primary-600 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4">Get In Touch</h2>
            <p className="text-xl opacity-90 max-w-2xl mx-auto">
              Have questions? We're here to help you succeed
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            <div className="bg-white bg-opacity-10 p-6 rounded-2xl">
              <Phone className="h-8 w-8 mx-auto mb-4" />
              <h3 className="text-xl font-bold mb-2">Call Us</h3>
              <p className="opacity-90">+91 XXXXX XXXXX</p>
            </div>
            <div className="bg-white bg-opacity-10 p-6 rounded-2xl">
              <Mail className="h-8 w-8 mx-auto mb-4" />
              <h3 className="text-xl font-bold mb-2">Email Us</h3>
              <p className="opacity-90">example@kisaanmitra.com</p>
            </div>
            <div className="bg-white bg-opacity-10 p-6 rounded-2xl">
              <MapPin className="h-8 w-8 mx-auto mb-4" />
              <h3 className="text-xl font-bold mb-2">Visit Us</h3>
              <p className="opacity-90">New Delhi, India</p>
            </div>
          </div>
        </div>
      </section>

      {/* Enhanced CTA Section */}
      <section className="py-20 bg-gradient-to-br from-primary-700 to-primary-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Ready to Transform Your Business?
          </h2>
          <p className="text-xl mb-10 max-w-3xl mx-auto opacity-90">
            Join 50,000+ farmers and buyers who are already revolutionizing agricultural trade. 
            Start your journey today and experience the difference.
          </p>
          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
            <Link
              to="/register"
              className="bg-yellow-400 text-gray-900 px-8 py-4 rounded-full font-bold text-lg hover:bg-yellow-300 transition-all duration-300 transform hover:scale-105 shadow-lg"
            >
              Start Free Trial
              <ArrowRight className="ml-2 h-5 w-5 inline" />
            </Link>
            <Link
              to="/marketplace"
              className="border-2 border-white text-white px-8 py-4 rounded-full font-bold text-lg hover:bg-white hover:text-gray-900 transition-all duration-300"
            >
              Explore Marketplace
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default HomePage;

