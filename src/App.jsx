import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Navbar from './components/layout/Navbar.jsx';
import Footer from './components/layout/Footer.jsx';
import HomePage from './pages/HomePage.jsx';
import LoginPage from './pages/LoginPage.jsx';
import RegisterPage from './pages/RegisterPage.jsx';
import DashboardPage from './pages/DashboardPage.jsx';
import MarketplacePage from './pages/MarketplacePage.jsx';
import RealTimeMarketplace from './pages/RealTimeMarketplace.jsx';
import ProductDetailPage from './pages/ProductDetailPage.jsx';
import ProfilePage from './pages/ProfilePage.jsx';
import MessagesPage from './pages/MessagesPage.jsx';
import OrganicProducePage from './pages/OrganicProducePage.jsx';
import FairPricingPage from './pages/FairPricingPage.jsx';
import FarmerConnectionPage from './pages/FarmerConnectionPage.jsx';
import MarketInsightsPage from './pages/MarketInsightsPage.jsx';
import DirectTransactionPage from './pages/DirectTransactionPage.jsx';
import { ShoppingCartProvider } from './context/ShoppingCartContext.jsx';
import { useAuthStore } from './stores/authStore.js';

import ScrollToTop from './components/ScrollToTop.jsx';

const PrivateRoute = ({ children }) => {
  const { user } = useAuthStore();
  return user ? children : <Navigate to="/login" />;
};

function App() {
  return (
    <ShoppingCartProvider>
      <Router>
        <ScrollToTop />
        <div className="min-h-screen bg-gray-50">
          <Navbar />
          <main className="pt-16">
            <Routes>
              <Route path="/" element={<HomePage />} />
              <Route path="/login" element={<LoginPage />} />
              <Route path="/register" element={<RegisterPage />} />
              <Route path="/marketplace" element={<MarketplacePage />} />
              <Route path="/real-time-marketplace" element={<RealTimeMarketplace />} />
              <Route path="/product/:id" element={<ProductDetailPage />} />
              <Route path="/direct-buy/:id" element={<DirectTransactionPage />} />
              <Route path="/organic-produce" element={<OrganicProducePage />} />
              <Route path="/fair-pricing" element={<FairPricingPage />} />
              <Route path="/farmer-connection" element={<FarmerConnectionPage />} />
              <Route path="/market-insights" element={<MarketInsightsPage />} />
              
              <Route 
                path="/dashboard"
                element={<PrivateRoute><DashboardPage /></PrivateRoute>}
              />
              <Route 
                path="/profile"
                element={<PrivateRoute><ProfilePage /></PrivateRoute>}
              />
              <Route 
                path="/messages"
                element={<PrivateRoute><MessagesPage /></PrivateRoute>}
              />
            </Routes>
          </main>
          <Footer />
        </div>
      </Router>
    </ShoppingCartProvider>
  );
}

export default App;
