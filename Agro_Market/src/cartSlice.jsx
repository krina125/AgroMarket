import { createSlice } from "@reduxjs/toolkit";

// ✅ Load cart from localStorage on startup
const loadCartFromStorage = () => {
  try {
    const cart = localStorage.getItem("cart");
    return cart ? JSON.parse(cart) : []; // If cart exists, parse it; otherwise, return an empty array
  } catch (error) {
    console.error("Error loading cart from localStorage:", error);
    return [];
  }
};

// ✅ Function to save cart to localStorage
const saveCartToStorage = (cart) => {
  try {
    localStorage.setItem("cart", JSON.stringify(cart));
  } catch (error) {
    console.error("Error saving cart to localStorage:", error);
  }
};

const initialState = {
  items: loadCartFromStorage(), // ✅ Load cart from localStorage on page load
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCart: (state, action) => {
      const item = state.items.find((i) => i.id === action.payload.id);
      if (item) {
        state.items = state.items.map((i) =>
          i.id === action.payload.id ? { ...i, quantity: i.quantity + 1 } : i
        );
      } else {
        state.items.push({ ...action.payload, quantity: 1 });
      }
      saveCartToStorage(state.items);
    },
    removeFromCart: (state, action) => {
      state.items = state.items.filter((item) => item.id !== action.payload);
      saveCartToStorage(state.items);
    },
    
    increaseQuantity: (state, action) => {
      const item = state.items.find((i) => i.id === action.payload);
      if (item) {
        item.quantity += 1;
      }
      saveCartToStorage(state.items); // ✅ Save cart after increasing quantity
    },
    decreaseQuantity: (state, action) => {
      const item = state.items.find((i) => i.id === action.payload);
      if (item && item.quantity > 1) {
        item.quantity -= 1;
      } else {
        state.items = state.items.filter((i) => i.id !== action.payload);
      }
      saveCartToStorage(state.items); // ✅ Save cart after decreasing quantity
    },
    clearCart: (state) => {
        state.items = [];
        localStorage.removeItem("cart"); // ✅ Clear storage
      },
  },
});

export const { addToCart, removeFromCart, increaseQuantity, decreaseQuantity, clearCart } = cartSlice.actions;
export default cartSlice.reducer;
