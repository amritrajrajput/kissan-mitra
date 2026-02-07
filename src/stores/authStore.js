import { create } from 'zustand';
import { persist } from 'zustand/middleware';

export const useAuthStore = create(
  persist(
    (set, get) => ({
      user: null,
      token: null,
      isLoading: false,

      login: async (email, password) => {
        set({ isLoading: true });
        try {
          // Mock login - replace with actual API call
          const mockUser = {
            id: '1',
            email,
            name: email.includes('farmer') ? 'Rajesh Kumar' : 'Anil Sharma',
            role: email.includes('farmer') ? 'farmer' : 'buyer',
            avatar: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop&crop=face',
            phone: '+91 98765 43210',
            location: {
              address: 'Village Road',
              city: 'Pune',
              state: 'Maharashtra',
              pincode: '411001'
            }
          };
          
          setTimeout(() => {
            set({ user: mockUser, token: 'mock-jwt-token', isLoading: false });
          }, 1000);
        } catch (error) {
          set({ isLoading: false });
          throw error;
        }
      },

      register: async (userData) => {
        set({ isLoading: true });
        try {
          // Mock registration - replace with actual API call
          const newUser = {
            id: Date.now().toString(),
            email: userData.email,
            name: userData.name,
            role: userData.role,
            avatar: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop&crop=face',
            phone: userData.phone,
            location: userData.location
          };
          
          setTimeout(() => {
            set({ user: newUser, token: 'mock-jwt-token', isLoading: false });
          }, 1000);
        } catch (error) {
          set({ isLoading: false });
          throw error;
        }
      },

      logout: () => {
        set({ user: null, token: null });
      },

      updateUser: (userData) => {
        set((state) => ({
          user: { ...state.user, ...userData }
        }));
      }
    }),
    {
      name: 'auth-storage',
    }
  )
);
