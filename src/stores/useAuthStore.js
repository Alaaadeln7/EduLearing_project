import axios from "axios";
import toast from "react-hot-toast";
import { create } from "zustand";
import { persist } from "zustand/middleware";
import Cookies from "js-cookie";
export const useAuthStore = create(
  persist(
    (set, get) => ({
      user: null,
      token: null,
      isAuthenticated: false,
      loading: false,
      error: null,
      clearAuth: () => {
        Cookies.remove("token");
        set({
          user: null,
          token: null,
          isAuthenticated: false,
        });
      },

      initializeAuth: () => {
        const token = Cookies.get("token");
        console.log(token);
        if (token) {
          set({
            token,
            isAuthenticated: true,
          });
          get().checkAuth();
        }
      },

      // Login user
      login: async (credentials) => {
        set({ loading: true, error: null });
        try {
          const { data } = await axios.post(
            `http://e-learningproject.runasp.net/api/Auth/Login`,
            credentials
          );
          console.log(data);
          set({
            user: data,
            isAuthenticated: true,
            loading: false,
          });
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
        console.log(userData);
        try {
          const { data } = await axios.post(
            `http://e-learningproject.runasp.net/api/Auth/Register`,

            userData
          );
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
      // logout: async (userData) => {
      //   try {
      //     let { data } = await axios.post(
      //       `${import.meta.env.VITE_BACKEND_URL}/Auth/Logout`,
      //       { userData },
      //       {
      //         headers: {
      //           Authorization: `Bearer ${get().token}`,
      //         },
      //       }
      //     );
      //   } catch (error) {
      //     console.error("Logout error:", error);
      //   } finally {
      //     set({
      //       user: null,
      //       token: null,
      //       isAuthenticated: false,
      //     });
      //     toast.success("Logged out successfully");
      //   }
      // },
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
