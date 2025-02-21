import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const fetchCategories = createAsyncThunk("product/fetchCategories", async () => {
  const response = await axios.get("https://fakestoreapi.com/products/categories");
  return response.data;
});


export const fetchProductsByCategory = createAsyncThunk(
  "product/fetchByCategory",
  async (category) => {
    const url = category
      ? `https://fakestoreapi.com/products/category/${category}`
      : "https://fakestoreapi.com/products";
    const response = await axios.get(url);
    return response.data;
  }
);


export const fetchProductById = createAsyncThunk(
  "product/fetchProductById",
  async (productId, { rejectWithValue }) => {
    try {
      const response = await axios.get(`https://fakestoreapi.com/products/${productId}`);
      return response.data;
    } catch (error) {
      return rejectWithValue("Failed to load product details");
    }
  }
);

const productSlice = createSlice({
  name: "product",
  initialState: {
    products: [],
    categories: [],
    product: null,
    loading: false, 
    error: null, 
    searchQuery: "",
    selectedCategory: "",
  },
  reducers: {
    setSearchQuery: (state, action) => {
      state.searchQuery = action.payload;
    },
    setSelectedCategory: (state, action) => {
      state.selectedCategory = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder
     
      .addCase(fetchCategories.fulfilled, (state, action) => {
        state.categories = action.payload;
      })

      
      .addCase(fetchProductsByCategory.fulfilled, (state, action) => {
        state.products = action.payload;
      })

      
      .addCase(fetchProductById.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchProductById.fulfilled, (state, action) => {
        state.loading = false;
        state.product = action.payload;
      })
      .addCase(fetchProductById.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      });
  },
});

export const { setSearchQuery, setSelectedCategory } = productSlice.actions;
export default productSlice.reducer;
