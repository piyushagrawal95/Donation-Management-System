import { createAsyncThunk } from "@reduxjs/toolkit";
import API from "../../../services/API";
import { toast } from "react-hot-toast";

// User Login
export const userLogin = createAsyncThunk(
  "auth/login",
  async ({ role, email, password }, { rejectWithValue }) => {
    try {
      const { data } = await API.post("/auth/login", { role, email, password });

      if (data.success) {
        // Store token and navigate
        localStorage.setItem("token", data.token);
        toast.success(data.message || "Login successful");
        window.location.replace("/"); // Replace with useNavigate in components if possible
      }
      return data;
    } catch (error) {
      const errorMessage =
        error.response?.data.message || error.message || "Login failed";
      toast.error(errorMessage);
      return rejectWithValue(errorMessage);
    }
  }
);

// User Registration
export const userRegister = createAsyncThunk(
  "auth/register",
  async (
    {
      name,
      role,
      email,
      password,
      phone,
      organisationName,
      address,
      hospitalName,
      website,
    },
    { rejectWithValue }
  ) => {
    try {
      const { data } = await API.post("/auth/register", {
        name,
        role,
        email,
        password,
        phone,
        organisationName,
        address,
        hospitalName,
        website,
      });

      if (data?.success) {
        toast.success("User registered successfully");
        window.location.replace("/login"); // Replace with useNavigate in components if possible
      }
      return data;
    } catch (error) {
      const errorMessage =
        error.response?.data.message || error.message || "Registration failed";
      toast.error(errorMessage);
      return rejectWithValue(errorMessage);
    }
  }
);

// Get Current User
export const getCurrentUser = createAsyncThunk(
  "auth/getCurrentUser",
  async (_, { rejectWithValue }) => {
    try {
      const { data } = await API.get("/auth/current-user");
      return data;
    } catch (error) {
      const errorMessage =
        error.response?.data.message || error.message || "Failed to fetch user";
      toast.error(errorMessage);
      return rejectWithValue(errorMessage);
    }
  }
);

