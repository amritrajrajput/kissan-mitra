// User type definition
export const User = {
  id: String,
  email: String,
  name: String,
  role: ['farmer', 'buyer'],
  avatar: String,
  phone: String,
  location: {
    address: String,
    city: String,
    state: String,
    pincode: String
  },
  createdAt: Date
};

// Product type definition
export const Product = {
  id: String,
  title: String,
  description: String,
  price: Number,
  quantity: Number,
  unit: String,
  category: String,
  images: [String],
  farmerId: String,
  farmer: User,
  location: {
    address: String,
    city: String,
    state: String,
    pincode: String
  },
  isActive: Boolean,
  createdAt: Date,
  updatedAt: Date
};

// Message type definition
export const Message = {
  id: String,
  senderId: String,
  receiverId: String,
  content: String,
  createdAt: Date,
  isRead: Boolean
};

// Conversation type definition
export const Conversation = {
  id: String,
  participants: [User],
  lastMessage: Message,
  updatedAt: Date
};

// Auth state type definition
export const AuthState = {
  user: User || null,
  token: String || null,
  isLoading: Boolean
};

// Register data type definition
export const RegisterData = {
  email: String,
  password: String,
  name: String,
  role: ['farmer', 'buyer'],
  phone: String,
  location: {
    address: String,
    city: String,
    state: String,
    pincode: String
  }
};
