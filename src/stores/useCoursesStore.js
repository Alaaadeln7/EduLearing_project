import axios from "axios";
import { create } from "zustand";

export const useCoursesStore = create((set) => ({
  courses: [],
  loading: false,
  error: null,
  course: null,

  getAllCourses: async () => {
    set({ loading: true, error: null });

    try {
      const response = await axios.get(
        `${import.meta.env.VITE_BACKEND_URL}/Course`
      );
      set({ courses: response?.data?.data, loading: false });
    } catch (error) {
      console.error("Error fetching courses:", error);
      set({ error, loading: false });
    }
  },
  createCourse: async (data) => {
    set({ loading: true, error: null });
    try {
      const response = await axios.post(
        `${import.meta.env.VITE_BACKEND_URL}/Course`,
        data
      );
      set({ courses: response?.data?.data, loading: false });
    } catch (error) {
      console.error("Error creating course:", error);
      set({ error, loading: false });
    }
  },
  getSingleCourse: async (id) => {
    set({ loading: true, error: null });
    try {
      const response = await axios.get(
        `${import.meta.env.VITE_BACKEND_URL}/Course/${id}`
      );
      set({ course: response?.data, loading: false });
    } catch (error) {
      console.error("Error fetching course:", error);
      set({ error, loading: false });
    }
  },
}));
