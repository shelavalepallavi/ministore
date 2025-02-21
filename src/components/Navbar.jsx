import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  setSearchQuery,
  fetchCategories,
  fetchProductsByCategory,
} from "../redux/productSlice";
import { loadCart } from "../redux/cartSlice";

const Navbar = () => {
  const dispatch = useDispatch();
  const categories = useSelector((state) => state.product.categories);
  const cartItems = useSelector((state) => state.cart.cartItems) || [];
  const cartCount = cartItems.reduce(
    (total, item) => total + (item.quantity || 1),
    0
  );
  console.log(cartItems);
  console.log(cartCount);
  useEffect(() => {
    dispatch(fetchCategories());
    dispatch(loadCart());
  }, [dispatch]);
  console.log("Categories:", categories);

  const handleCategorySelect = (category) => {
    dispatch(fetchProductsByCategory(category));
  };
  return (
    <div>
      <nav className="w-full  min-h-16 bg-[#FFC13E]  flex flex-wrap justify-between items-center px-6 py-3 gap-4 md:flex-nowrap md:px-10">
        <a
          href="/"
          className="text-2xl font-medium w-full text-center md:w-auto"
        >
          MiniStore
        </a>
        <div className="flex flex-wrap  items-center gap-4 w-full justify-center md:justify-end">
          <div className="flex items-center gap-2 border-[0.5px] border-gray-200 bg-gray-50 rounded-lg py-2 px-4 shadow-sm w-full max-w-md">
            <img src="/search.svg" alt="search" className="w-5 h-5" />
            <input
              type="text"
              placeholder="search..."
              className="outline-0 w-full md:w-56 bg-transparent"
              onChange={(e) =>
                dispatch(setSearchQuery(e.target.value.toLowerCase()))
              }
            />
          </div>

          <select
            onChange={(e) => handleCategorySelect(e.target.value)}
            className="p-2 rounded-md bg-white  w-full sm:w-auto text-sm sm:text-base"
          >
            <option value="">Select Category</option>
            {categories.map((category) => (
              <option key={category} value={category}>
                {category}
              </option>
            ))}
          </select>
          <button className="cursor-pointer relative">
            <img src="/cart.svg" alt="cart" className="w-7 h-7" />
            {cartCount > 0 && (
              <span className="absolute top-0  right-0 bg-red-500 text-white text-xs w-4 h-4 flex items-center justify-center rounded-full">
                {cartCount}
              </span>
            )}
          </button>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
