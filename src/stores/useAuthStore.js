import axios from "axios";
import toast from "react-hot-toast";
import { create } from "zustand";
import { persist } from "zustand/middleware";

export const useAuthStore = create(
  persist(
    (set, get) => ({
      user: null,
      token: null,
      isAuthenticated: true,
      loading: false,
      error: null,
      clearAuth: () =>
        set({
          user: null,
          token: null,
          isAuthenticated: false,
        }),

      // Login user
      login: async (credentials) => {
        set({ loading: true, error: null });
        try {
          const { data } = await axios.post(
            `${import.meta.env.VITE_VITE_BACKEND_URL}/Auth/Login`,
            credentials
          );

          set({
            user: data.user,
            token: data.token,
            isAuthenticated: true,
            loading: false,
          });

          toast.success("Login successful!");
          return data;
        } catch (error) {
          const message = error.response?.data?.message || error.message;
          set({ error: message, loading: false });
          toast.error(message);
          throw error;
        }
      },

      // Register new user
      register: async (userData) => {
        set({ loading: true, error: null });
        try {
          const { data } = await axios.post(
            `${import.meta.env.VITE_BACKEND_URL}/Auth/Register`,
            userData
          );
          console.log(import.meta.env.VITE_BACKEND_URL);
          set({
            user: data.user,
            token: data.token,
            isAuthenticated: true,
            loading: false,
          });

          toast.success("Registration successful!");
          return data;
        } catch (error) {
          const message = error.response?.data?.message || error.message;
          set({ error: message, loading: false });
          toast.error(message);
          throw error;
        }
      },

      // Logout user
      logout: async () => {
        try {
          await axios.post(
            `${import.meta.env.VITE_BACKEND_URL}/Auth/Logout`,
            {},
            {
              headers: {
                Authorization: `Bearer ${get().token}`,
              },
            }
          );
        } catch (error) {
          console.error("Logout error:", error);
        } finally {
          set({
            user: null,
            token: null,
            isAuthenticated: false,
          });
          toast.success("Logged out successfully");
        }
      },

      // Forgot password
      forgotPassword: async (email) => {
        set({ loading: true, error: null });
        try {
          await axios.post(
            `${import.meta.env.VITE_BACKEND_URL}/auth/forgot-password`,
            { email }
          );
          toast.success("Password reset link sent to your email");
          set({ loading: false });
        } catch (error) {
          const message = error.response?.data?.message || error.message;
          set({ error: message, loading: false });
          toast.error(message);
          throw error;
        }
      },

      // Reset password
      resetPassword: async ({ token, newPassword }) => {
        set({ loading: true, error: null });
        try {
          await axios.post(
            `${import.meta.env.VITE_BACKEND_URL}/auth/reset-password`,
            { token, newPassword }
          );
          toast.success("Password reset successfully");
          set({ loading: false });
        } catch (error) {
          const message = error.response?.data?.message || error.message;
          set({ error: message, loading: false });
          toast.error(message);
          throw error;
        }
      },

      // Check authentication status
      checkAuth: async () => {
        const token = get().token;
        if (!token) return false;

        set({ loading: true });
        try {
          const { data } = await axios.get(
            `${import.meta.env.VITE_BACKEND_URL}/auth/me`,
            {
              headers: {
                Authorization: `Bearer ${token}`,
              },
            }
          );
          set({ user: data.user, isAuthenticated: true, loading: false });
          return true;
        } catch (error) {
          set({
            user: null,
            token: null,
            isAuthenticated: false,
            loading: false,
          });
          console.error("Authentication error:", error);
          return false;
        }
      },
    }),
    {
      name: "auth-storage", // LocalStorage key
      partialize: (state) => ({
        token: state.token,
        user: state.user,
      }),
    }
  )
);

// Add axios request interceptor to include token
axios.interceptors.request.use((config) => {
  const token = useAuthStore.getState().token;
  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
});

// Add axios response interceptor to handle 401 errors
axios.interceptors.response.use(
  (response) => response,
  (error) => {
    if (error.response?.status === 401) {
      useAuthStore.getState().clearAuth();
      toast.error("Session expired. Please login again.");
    }
    return Promise.reject(error);
  }
);
