import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { ShoppingCart, Star, MapPin, Phone, Leaf } from 'lucide-react';
import { comprehensiveProducts } from '../data/comprehensiveProducts';
import { useShoppingCart } from '../context/ShoppingCartContext';
const ProductDetailPage = () => {
  const { addToCart } = useShoppingCart();
  const { id } = useParams();
  const product = comprehensiveProducts.find(p => p.id === parseInt(id));

  if (!product) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-gray-900 mb-2">Product Not Found</h1>
          <p className="text-gray-600">The product you're looking for doesn't exist.</p>
          <Link to="/real-time-marketplace" className="btn-modern btn-primary mt-4">
            Back to Marketplace
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Product Image */}
          <div> 
            <img
              src={product.image}
              alt={product.name}
              className="w-full h-96 object-cover rounded-lg shadow-lg"
            />
          </div>

          {/* Product Details */}
          <div>
            <h1 className="text-3xl font-bold text-gray-900 mb-4">{product.name}</h1>
          
            <div className="flex items-center mb-4">
              <Star className="h-5 w-5 text-yellow-400 fill-current" />
              <span className="ml-1 text-gray-600">{product.rating} ({product.reviews} reviews)</span>
            </div>

            <div className="flex items-center text-gray-600 mb-4">
              <MapPin className="h-5 w-5 mr-2" />
              <span>{product.location}</span>
            </div>

            {product.farmer && (
              <div className="flex items-center text-gray-600 mb-4">
                <Phone className="h-5 w-5 mr-2" />
                <span>{product.farmer}</span>
              </div>
            )}

            <div className="mb-6">
              <span className="text-3xl font-bold text-green-600">₹{product.price.toFixed(2)}</span>
              {product.originalPrice && (
                <span className="text-lg text-gray-500 line-through ml-2">₹{product.originalPrice}</span>
              )}
            </div>

            <p className="text-gray-700 mb-6">{product.description}</p>

            <div className="mb-6">
              <h3 className="text-lg font-semibold mb-2">Product Details</h3>
              <div className="grid grid-cols-2 gap-4 text-sm">
                <div>
                  <span className="font-medium">Category:</span> {product.category}
                </div>
                <div>
                  <span className="font-medium">Subcategory:</span> {product.subcategory}
                </div>
                <div>
                  <span className="font-medium">Stock:</span> {product.stock} {product.unit}
                </div>
                <div>
                  <span className="font-medium">Type:</span> {product.type}
                </div>
              </div>
            </div>

            {product.varieties && product.varieties.length > 0 && (
              <div className="mb-6">
                <h3 className="text-lg font-semibold mb-2">Available Varieties</h3>
                <div className="flex flex-wrap gap-2">
                  {product.varieties.map((variety, index) => (
                    <span key={index} className="bg-gray-200 px-3 py-1 rounded-full text-sm">
                      {variety}
                    </span>
                  ))}
                </div>
              </div>
            )}

            {product.certifications && product.certifications.length > 0 && (
              <div className="mb-6">
                <h3 className="text-lg font-semibold mb-2">Certifications</h3>
                <div className="flex flex-wrap gap-2">
                  {product.certifications.map((cert, index) => (
                    <span key={index} className="bg-green-100 text-green-800 px-3 py-1 rounded-full text-sm flex items-center">
                      <Leaf className="h-4 w-4 mr-1" />
                      {cert}
                    </span>
                  ))}
                </div>
              </div>
            )}

            {product.bulkPrices && Object.keys(product.bulkPrices).length > 0 && (
              <div className="mb-6">
                <h3 className="text-lg font-semibold mb-2">Bulk Pricing</h3>
                <div className="space-y-2">
                  {Object.entries(product.bulkPrices).map(([quantity, price]) => (
                    <div key={quantity} className="flex justify-between items-center p-3 bg-gray-100 rounded-lg">
                      <span>{quantity}</span>
                      <span className="font-bold">₹{price}</span>
                    </div>
                  ))}
                </div>
              </div>
            )}

            <div className="flex space-x-4">
             

              <button onClick={() => addToCart(product)} className="btn-modern btn-primary flex-1">
                <ShoppingCart className="h-5 w-5 mr-2" />
                Add to Cart
              </button> 
              <Link to="/real-time-marketplace" className="btn-modern btn-secondary">
                Back to Marketplace
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};


export default ProductDetailPage;
