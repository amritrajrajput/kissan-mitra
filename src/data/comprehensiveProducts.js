// Comprehensive product data with detailed pulses, vegetables, and buy/sell functionality
export const comprehensiveProducts = [
  // Vegetables - 15 types with subcategories
  {
    id: 101,
    name: 'Organic Potatoes',
    category: 'vegetables',
    subcategory: 'root-vegetables',
    type: 'sell',
    price: 25.00,
    bulkPrices: {
      '10kg': 220.00,
      '20kg': 420.00,
      '50kg': 1000.00
    },
    unit: 'kg',
    stock: 500,
    farmer: 'Rajesh Kumar',
    location: 'Punjab',
    rating: 4.8,
    reviews: 234,
    image: 'https://images.unsplash.com/photo-1574316071802-0d684efa2438?w=400',
    description: 'Fresh organic potatoes, perfect for all cooking needs',
    certifications: ['Organic', 'FSSAI'],
    seasonal: false,
    varieties: ['Red Potato', 'White Potato', 'Baby Potato']
  },
  {
    id: 102,
    name: 'Fresh Tomatoes',
    category: 'vegetables',
    subcategory: 'nightshades',
    type: 'sell',
    price: 45.50,
    bulkPrices: {
      '10kg': 400.00,
      '20kg': 750.00,
      '50kg': 1800.00
    },
    unit: 'kg',
    stock: 300,
    farmer: 'Anita Sharma',
    location: 'Haryana',
    rating: 4.6,
    reviews: 189,
    image: 'https://images.unsplash.com/photo-1546094096-0df4bcaaa337?w=400',
    description: 'Juicy red tomatoes, vine-ripened for maximum flavor',
    certifications: ['Fresh', 'FSSAI'],
    seasonal: false,
    varieties: ['Roma', 'Cherry', 'Beefsteak']
  },
  {
    id: 103,
    name: 'Red Onions',
    category: 'vegetables',
    subcategory: 'alliums',
    type: 'sell',
    price: 35.00,
    bulkPrices: {
      '10kg': 320.00,
      '20kg': 600.00,
      '50kg': 1400.00
    },
    unit: 'kg',
    stock: 400,
    farmer: 'Vikram Singh',
    location: 'Maharashtra',
    rating: 4.7,
    reviews: 312,
    image: 'https://images.unsplash.com/photo-1601493700631-2b16ec4b4716?w=400',
    description: 'Premium quality red onions with long shelf life',
    certifications: ['Fresh', 'FSSAI'],
    seasonal: false,
    varieties: ['Red Onion', 'White Onion', 'Shallots']
  },
  {
    id: 104,
    name: 'Fresh Cauliflower',
    category: 'vegetables',
    subcategory: 'cruciferous',
    type: 'sell',
    price: 30.00,
    bulkPrices: {
      '10kg': 270.00,
      '20kg': 500.00,
      '50kg': 1200.00
    },
    unit: 'kg',
    stock: 200,
    farmer: 'Ramesh Patel',
    location: 'Gujarat',
    rating: 4.5,
    reviews: 156,
    image: 'https://images.unsplash.com/photo-1589927986089-35812388d1f4?w=400',
    description: 'Fresh white cauliflower, pesticide-free',
    certifications: ['Organic', 'FSSAI'],
    seasonal: true,
    varieties: ['White Cauliflower', 'Purple Cauliflower', 'Romanesco']
  },
  {
    id: 105,
    name: 'Green Cabbage',
    category: 'vegetables',
    subcategory: 'cruciferous',
    type: 'sell',
    price: 22.00,
    bulkPrices: {
      '10kg': 200.00,
      '20kg': 380.00,
      '50kg': 900.00
    },
    unit: 'kg',
    stock: 350,
    farmer: 'Sunita Devi',
    location: 'Uttar Pradesh',
    rating: 4.4,
    reviews: 128,
    image: 'https://images.unsplash.com/photo-1546868871-7041f2a4716?w=400',
    description: 'Crisp green cabbage, perfect for salads and cooking',
    certifications: ['Fresh', 'FSSAI'],
    seasonal: false,
    varieties: ['Green Cabbage', 'Red Cabbage', 'Savoy Cabbage']
  },
  {
    id: 106,
    name: 'Fresh Brinjal',
    category: 'vegetables',
    subcategory: 'nightshades',
    type: 'sell',
    price: 40.00,
    bulkPrices: {
      '10kg': 360.00,
      '20kg': 680.00,
      '50kg': 1600.00
    },
    unit: 'kg',
    stock: 180,
    farmer: 'Arjun Reddy',
    location: 'Andhra Pradesh',
    rating: 4.6,
    reviews: 201,
    image: 'https://images.unsplash.com/photo-1603049830228-f1223da201d4?w=400',
    description: 'Fresh purple brinjals, perfect for curries',
    certifications: ['Fresh', 'FSSAI'],
    seasonal: false,
    varieties: ['Purple Brinjal', 'Green Brinjal', 'White Brinjal']
  },
  {
    id: 107,
    name: 'Lady Finger (Okra)',
    category: 'vegetables',
    subcategory: 'pods',
    type: 'sell',
    price: 60.00,
    bulkPrices: {
      '10kg': 540.00,
      '20kg': 1000.00,
      '50kg': 2400.00
    },
    unit: 'kg',
    stock: 120,
    farmer: 'Meena Joshi',
    location: 'Madhya Pradesh',
    rating: 4.7,
    reviews: 167,
    image: 'https://images.unsplash.com/photo-1601493700631-2b16ec4b4716?w=400',
    description: 'Fresh okra, tender and perfect for cooking',
    certifications: ['Fresh', 'FSSAI'],
    seasonal: true,
    varieties: ['Green Okra', 'Red Okra', 'White Okra']
  },
  {
    id: 108,
    name: 'Fresh Spinach',
    category: 'vegetables',
    subcategory: 'leafy-greens',
    type: 'sell',
    price: 25.00,
    bulkPrices: {
      '10kg': 220.00,
      '20kg': 420.00,
      '50kg': 1000.00
    },
    unit: 'kg',
    stock: 250,
    farmer: 'Deepak Kumar',
    location: 'West Bengal',
    rating: 4.5,
    reviews: 143,
    image: 'https://images.unsplash.com/photo-1576045057995-568f588f82fb?w=400',
    description: 'Fresh green spinach leaves, rich in nutrients',
    certifications: ['Organic', 'FSSAI'],
    seasonal: false,
    varieties: ['Baby Spinach', 'Curly Spinach', 'Flat-leaf Spinach']
  },
  {
    id: 109,
    name: 'Orange Carrots',
    category: 'vegetables',
    subcategory: 'root-vegetables',
    type: 'sell',
    price: 30.00,
    bulkPrices: {
      '10kg': 270.00,
      '20kg': 500.00,
      '50kg': 1200.00
    },
    unit: 'kg',
    stock: 300,
    farmer: 'Suresh Yadav',
    location: 'Punjab',
    rating: 4.6,
    reviews: 198,
    image: 'https://images.unsplash.com/photo-1598170845058-32b9d6a5da37?w=400',
    description: 'Sweet orange carrots, perfect for juicing and cooking',
    certifications: ['Fresh', 'FSSAI'],
    seasonal: false,
    varieties: ['Orange Carrots', 'Purple Carrots', 'Yellow Carrots']
  },
  {
    id: 110,
    name: 'Green Beans',
    category: 'vegetables',
    subcategory: 'legumes',
    type: 'sell',
    price: 55.00,
    bulkPrices: {
      '10kg': 500.00,
      '20kg': 950.00,
      '50kg': 2200.00
    },
    unit: 'kg',
    stock: 180,
    farmer: 'Ravi Kumar',
    location: 'Karnataka',
    rating: 4.5,
    reviews: 134,
    image: 'https://images.unsplash.com/photo-1589927986089-35812388d1f4?w=400',
    description: 'Fresh green beans, crisp and tender',
    certifications: ['Fresh', 'FSSAI'],
    seasonal: true,
    varieties: ['French Beans', 'String Beans', 'Wax Beans']
  },
  {
    id: 111,
    name: 'Fresh Capsicum',
    category: 'vegetables',
    subcategory: 'nightshades',
    type: 'sell',
    price: 65.00,
    bulkPrices: {
      '10kg': 600.00,
      '20kg': 1100.00,
      '50kg': 2600.00
    },
    unit: 'kg',
    stock: 220,
    farmer: 'Priya Sharma',
    location: 'Maharashtra',
    rating: 4.6,
    reviews: 178,
    image: 'https://images.unsplash.com/photo-1589927986089-35812388d1f4?w=400',
    description: 'Fresh capsicum in multiple colors',
    certifications: ['Fresh', 'FSSAI'],
    seasonal: false,
    varieties: ['Green Capsicum', 'Red Capsicum', 'Yellow Capsicum']
  },
  {
    id: 112,
    name: 'Fresh Radish',
    category: 'vegetables',
    subcategory: 'root-vegetables',
    type: 'sell',
    price: 20.00,
    bulkPrices: {
      '10kg': 180.00,
      '20kg': 340.00,
      '50kg': 800.00
    },
    unit: 'kg',
    stock: 280,
    farmer: 'Amit Patel',
    location: 'Gujarat',
    rating: 4.4,
    reviews: 112,
    image: 'https://images.unsplash.com/photo-1589927986089-35812388d1f4?w=400',
    description: 'Fresh white radish, crisp and peppery',
    certifications: ['Fresh', 'FSSAI'],
    seasonal: true,
    varieties: ['White Radish', 'Red Radish', 'Black Radish']
  },
  {
    id: 113,
    name: 'Fresh Ginger',
    category: 'vegetables',
    subcategory: 'root-vegetables',
    type: 'sell',
    price: 120.00,
    bulkPrices: {
      '10kg': 1100.00,
      '20kg': 2100.00,
      '50kg': 5000.00
    },
    unit: 'kg',
    stock: 150,
    farmer: 'Kerala Spices',
    location: 'Kerala',
    rating: 4.8,
    reviews: 245,
    image: 'https://images.unsplash.com/photo-1589927986089-35812388d1f4?w=400',
    description: 'Fresh ginger root, aromatic and flavorful',
    certifications: ['Organic', 'FSSAI'],
    seasonal: false,
    varieties: ['Young Ginger', 'Mature Ginger', 'Baby Ginger']
  },
  {
    id: 114,
    name: 'Fresh Garlic',
    category: 'vegetables',
    subcategory: 'alliums',
    type: 'sell',
    price: 150.00,
    bulkPrices: {
      '10kg': 1400.00,
      '20kg': 2700.00,
      '50kg': 6500.00
    },
    unit: 'kg',
    stock: 200,
    farmer: 'Rajasthan Garlic Farms',
    location: 'Rajasthan',
    rating: 4.7,
    reviews: 289,
    image: 'https://images.unsplash.com/photo-1589927986089-35812388d1f4?w=400',
    description: 'Fresh garlic bulbs, pungent and aromatic',
    certifications: ['Fresh', 'FSSAI'],
    seasonal: false,
    varieties: ['White Garlic', 'Purple Garlic', 'Elephant Garlic']
  },
  {
    id: 115,
    name: 'Fresh Coriander',
    category: 'vegetables',
    subcategory: 'leafy-greens',
    type: 'sell',
    price: 40.00,
    bulkPrices: {
      '10kg': 360.00,
      '20kg': 680.00,
      '50kg': 1600.00
    },
    unit: 'kg',
    stock: 100,
    farmer: 'Maharashtra Herbs',
    location: 'Maharashtra',
    rating: 4.5,
    reviews: 167,
    image: 'https://images.unsplash.com/photo-1589927986089-35812388d1f4?w=400',
    description: 'Fresh coriander leaves, aromatic and flavorful',
    certifications: ['Organic', 'FSSAI'],
    seasonal: false,
    varieties: ['Coriander Leaves', 'Coriander Seeds', 'Cilantro']
  },

  // Pulses - 8 types with subcategories
  {
    id: 201,
    name: 'Red Lentils (Masoor Dal)',
    category: 'pulses',
    subcategory: 'lentils',
    type: 'sell',
    price: 90.00,
    bulkPrices: {
      '10kg': 850.00,
      '20kg': 1600.00,
      '50kg': 3800.00
    },
    unit: 'kg',
    stock: 400,
    farmer: 'Agricultural Cooperative',
    location: 'Madhya Pradesh',
    rating: 4.8,
    reviews: 567,
    image: 'https://images.unsplash.com/photo-1601493700631-2b16ec4b4716?w=400',
    description: 'Premium quality red lentils, rich in protein and fiber',
    certifications: ['Organic', 'FSSAI', 'Protein-Rich'],
    seasonal: false,
    varieties: ['Whole Masoor', 'Split Masoor', 'Red Lentils']
  },
  {
    id: 202,
    name: 'Chickpeas (Chana)',
    category: 'pulses',
    subcategory: 'legumes',
    type: 'sell',
    price: 85.00,
    bulkPrices: {
      '10kg': 800.00,
      '20kg': 1500.00,
      '50kg': 3600.00
    },
    unit: 'kg',
    stock: 350,
    farmer: 'Farmer Producer Organization',
    location: 'Rajasthan',
    rating: 4.7,
    reviews: 423,
    image: 'https://images.unsplash.com/photo-1515543904379-3d757afe72e4?w=400',
    description: 'High-quality chickpeas, perfect for curries and snacks',
    certifications: ['Organic', 'FSSAI', 'High-Protein'],
    seasonal: false,
    varieties: ['White Chickpeas', 'Black Chickpeas', 'Green Chickpeas']
  },
  {
    id: 203,
    name: 'Pigeon Peas (Arhar Dal)',
    category: 'pulses',
    subcategory: 'legumes',
    type: 'sell',
    price: 120.00,
    bulkPrices: {
      '10kg': 1100.00,
      '20kg': 2100.00,
      '50kg': 5000.00
    },
    unit: 'kg',
    stock: 280,
    farmer: 'Maharashtra Farmers Group',
    location: 'Maharashtra',
    rating: 4.6,
    reviews: 389,
    image: 'https://images.unsplash.com/photo-1601493700631-2b16ec4b4716?w=400',
    description: 'Premium pigeon peas, staple in Indian cuisine',
    certifications: ['Fresh', 'FSSAI', 'Traditional'],
    seasonal: false,
    varieties: ['Whole Arhar', 'Split Arhar', 'Pigeon Peas']
  },
  {
    id: 204,
    name: 'Mung Beans (Moong)',
    category: 'pulses',
    subcategory: 'legumes',
    type: 'sell',
    price: 110.00,
    bulkPrices: {
      '10kg': 1000.00,
      '20kg': 1900.00,
      '50kg': 4500.00
    },
    unit: 'kg',
    stock: 320,
    farmer: 'Organic Farmers Association',
    location: 'Karnataka',
    rating: 4.8,
    reviews: 445,
    image: 'https://images.unsplash.com/photo-1515543904379-3d757afe72e4?w=400',
    description: 'Organic mung beans, easy to digest and nutritious',
    certifications: ['Organic', 'FSSAI', 'Gluten-Free'],
    seasonal: false,
    varieties: ['Whole Moong', 'Split Moong', 'Moong Dal']
  },
  {
    id: 205,
    name: 'Black Gram (Urad Dal)',
    category: 'pulses',
    subcategory: 'legumes',
    type: 'sell',
    price: 130.00,
    bulkPrices: {
      '10kg': 1200.00,
      '20kg': 2300.00,
      '50kg': 5500.00
    },
    unit: 'kg',
    stock: 250,
    farmer: 'Uttar Pradesh Farmers',
    location: 'Uttar Pradesh',
    rating: 4.7,
    reviews: 378,
    image: 'https://images.unsplash.com/photo-1515543904379-3d757afe72e4?w=400',
    description: 'Premium black gram, essential for South Indian dishes',
    certifications: ['Fresh', 'FSSAI', 'Traditional'],
    seasonal: false,
    varieties: ['Whole Urad', 'Split Urad', 'Urad Dal']
  },
  {
    id: 206,
    name: 'Kidney Beans (Rajma)',
    category: 'pulses',
    subcategory: 'legumes',
    type: 'sell',
    price: 140.00,
    bulkPrices: {
      '10kg': 1300.00,
      '20kg': 2500.00,
      '50kg': 6000.00
    },
    unit: 'kg',
    stock: 200,
    farmer: 'Himalayan Pulses',
    location: 'Himachal Pradesh',
    rating: 4.9,
    reviews: 512,
    image: 'https://images.unsplash.com/photo-1515543904379-3d757afe72e4?w=400',
    description: 'Premium kidney beans, perfect for North Indian cuisine',
    certifications: ['Organic', 'FSSAI', 'Himalayan'],
    seasonal: false,
    varieties: ['Red Rajma', 'White Rajma', 'Black Rajma']
  },
  {
    id: 207,
    name: 'Green Peas (Matar)',
    category: 'pulses',
    subcategory: 'legumes',
    type: 'sell',
    price: 80.00,
    bulkPrices: {
      '10kg': 750.00,
      '20kg': 1400.00,
      '50kg': 3400.00
    },
    unit: 'kg',
    stock: 280,
    farmer: 'Punjab Farmers',
    location: 'Punjab',
    rating: 4.6,
    reviews: 298,
    image: 'https://images.unsplash.com/photo-1515543904379-3d757afe72e4?w=400',
    description: 'Fresh green peas, sweet and tender',
    certifications: ['Fresh', 'FSSAI', 'Sweet'],
    seasonal: true,
    varieties: ['Garden Peas', 'Snow Peas', 'Sugar Snap Peas']
  },
  {
    id: 208,
    name: 'Soybeans',
    category: 'pulses',
    subcategory: 'legumes',
    type: 'sell',
    price: 75.00,
    bulkPrices: {
      '10kg': 700.00,
      '20kg': 1300.00,
      '50kg': 3100.00
    },
    unit: 'kg',
    stock: 350,
    farmer: 'Madhya Pradesh Soy',
    location: 'Madhya Pradesh',
    rating: 4.5,
    reviews: 234,
    image: 'https://images.unsplash.com/photo-1515543904379-3d757afe72e4?w=400',
    description: 'High-quality soybeans, rich in protein',
    certifications: ['Organic', 'FSSAI', 'Non-GMO'],
    seasonal: false,
    varieties: ['Yellow Soybeans', 'Black Soybeans', 'Green Soybeans']
  }
];

// Buy products - Farmers looking to buy
export const buyProducts = [
  {
    id: 301,
    name: 'Wheat',
    category: 'grains',
    subcategory: 'cereals',
    type: 'buy',
    price: 25.00,
    quantity: 1000,
    unit: 'kg',
    buyer: 'Flour Mill Co.',
    location: 'Punjab',
    deadline: '2024-12-31',
    image: 'https://images.unsplash.com/photo-1586201375761-83865001e31c?w=400',
    description: 'Looking to buy high-quality wheat for flour production',
    requirements: ['Moisture < 12%', 'Protein > 11%', 'Clean grain']
  },
  {
    id: 302,
    name: 'Rice',
    category: 'grains',
    subcategory: 'cereals',
    type: 'buy',
    price: 35.00,
    quantity: 800,
    unit: 'kg',
    buyer: 'Rice Processing Unit',
    location: 'Haryana',
    deadline: '2024-12-25',
    image: 'https://images.unsplash.com/photo-1586201375761-83865001e31c?w=400',
    description: 'Seeking premium quality rice for export',
    requirements: ['Long grain', 'Aromatic', 'Low broken']
  },
  {
    id: 303,
    name: 'Corn',
    category: 'grains',
    subcategory: 'cereals',
    type: 'buy',
    price: 20.00,
    quantity: 1500,
    unit: 'kg',
    buyer: 'Animal Feed Company',
    location: 'Rajasthan',
    deadline: '2024-12-20',
    image: 'https://images.unsplash.com/photo-1586201375761-83865001e31c?w=400',
    description: 'Looking for corn for animal feed production',
    requirements: ['Moisture < 14%', 'Clean', 'No mold']
  }
];

// Categories for filtering
export const categories = [
  { id: 'vegetables', name: 'Vegetables', icon: '🥬', count: 15 },
  { id: 'pulses', name: 'Pulses', icon: '🌾', count: 8 },
  { id: 'grains', name: 'Grains', icon: '🌾', count: 3 },
  { id: 'fruits', name: 'Fruits', icon: '🍎', count: 0 }
];

// Subcategories for detailed filtering
export const subcategories = {
  vegetables: [
    { id: 'root-vegetables', name: 'Root Vegetables', count: 4 },
    { id: 'nightshades', name: 'Nightshades', count: 3 },
    { id: 'alliums', name: 'Alliums', count: 2 },
    { id: 'cruciferous', name: 'Cruciferous', count: 2 },
    { id: 'pods', name: 'Pods', count: 1 },
    { id: 'leafy-greens', name: 'Leafy Greens', count: 2 },
    { id: 'legumes', name: 'Legumes', count: 1 }
  ],
  pulses: [
    { id: 'lentils', name: 'Lentils', count: 1 },
    { id: 'legumes', name: 'Legumes', count: 7 }
  ],
  grains: [
    { id: 'cereals', name: 'Cereals', count: 3 }
  ]
};

// Bulk options
export const bulkOptions = [
  { label: '1 kg', value: 1, multiplier: 1 },
  { label: '5 kg', value: 5, multiplier: 0.95 },
  { label: '10 kg', value: 10, multiplier: 0.9 },
  { label: '20 kg', value: 20, multiplier: 0.85 },
  { label: '50 kg', value: 50, multiplier: 0.8 }
];

// Product types
export const productTypes = [
  { id: 'sell', name: 'For Sale', icon: '🛒' },
  { id: 'buy', name: 'Looking to Buy', icon: '🛍️' }
];

// Quality grades
export const qualityGrades = [
  { id: 'premium', name: 'Premium', color: 'green' },
  { id: 'standard', name: 'Standard', color: 'yellow' },
  { id: 'economy', name: 'Economy', color: 'orange' }
];

// Seasonal availability
export const seasonalProducts = [
  { id: 'winter', name: 'Winter Special', products: [104, 107, 112] },
  { id: 'summer', name: 'Summer Fresh', products: [101, 102, 103] },
  { id: 'all-season', name: 'All Season', products: [101, 102, 103, 105, 106, 108, 109, 110, 111, 113, 114, 115] }
];
