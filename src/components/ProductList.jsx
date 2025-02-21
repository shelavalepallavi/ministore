
import React, {useState } from "react";
import ProductModal from "./ProductModal";
import { useDispatch, useSelector } from "react-redux";
import { fetchProductById, fetchProductsByCategory } from "../redux/productSlice";
import { useEffect } from "react";
import { addToCart } from "../redux/cartSlice";

const ProductList = () => {
  const dispatch = useDispatch();

  const { products, searchQuery } = useSelector((state) => state.product);

  const filteredProducts = products.filter((product) =>
    product.title.toLowerCase().includes(searchQuery?.toLowerCase() || "")
  );

  const [selectProduct, setSelectProduct] = useState(null);

  useEffect(() => {
    dispatch(fetchProductsByCategory("")); 
  }, [dispatch]);
  console.log("Fetched Products:", products);

 
  const handleProductClick = async (productId) => {
    await dispatch(fetchProductById(productId)); 
    setSelectProduct(productId); 
  };
  
  return (
    <div className=" py-16 px-4 sm:px-6 md:px-12 lg:px-20 w-full">
      <div className="flex flex-col gap-4 mx-auto   w-full">
        <div className="flex flex-col gap-6">
          <div className="flex items-center gap-4">
            <p className="bg-orange-600 w-3 h-8 rounded-sm"></p>
            <p className="text-orange-600 font-semibold">Our Products</p>
          </div>
          <h1 className="text-2xl font-semibold">Explore Our Products</h1>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-x-4 sm:gap-x-6 gap-y-14 justify-center py-20  shadow-sm">
          {filteredProducts.map((product) => (
            <div
              key={product.id}
              className="border border-gray-100 rounded-lg shadow-md hover:shadow-lg transition flex flex-col justify-between items-center text-center relative max-w-full w-[90%] sm:max-w-[300px] h-[380px] sm:h-[420px] mx-auto cursor-pointer"
              // onClick={() => setSelectProduct(product.id)}
              onClick={() => handleProductClick(product.id)}

            >
              {product.id % 2 === 0 && (
                <span className="absolute top-2 left-2 bg-green-500 text-white text-xs px-2 py-1 rounded">
                  NEW
                </span>
              )}
              <div className="h-48 w-full bg-gray-100 flex items-center justify-center rounded">
                <img
                  src={product.image}
                  alt={product.title}
                  className="h-36 object-contain mix-blend-darken"
                />
              </div>

              <div className="p-4 flex flex-col flex-grow gap-2 text-sm sm:text-base">
                <h2 className="text-lg font-semibold w-full line-clamp-2">
                  {product.title}
                </h2>
                <div className="flex flex-col items-center mt-2">
                  <p className="text-amber-500 font-semibold ">
                    ${product.price}
                  </p>
                  <div className="flex items-center justify-center gap-1 text-yellow-500 text-sm">
                    {Array.from({
                      length: Math.round(product.rating.rate),
                    }).map((_, index) => (
                      <span key={index}>⭐</span>
                    ))}
                    <span className="text-gray-500 text-xs">
                      ({product.rating.count})
                    </span>
                  </div>
                </div>

                <button className="bg-black text-white py-2 w-full rounded-lg  hover:bg-white hover:font-medium hover:text-black hover:border transition duration-500 mt-auto cursor-pointer" onClick={(e) => {
                  e.stopPropagation(); 
                  console.log("Product being added to cart:", product);
                  dispatch(addToCart(product));

                }}>
                  Add To Cart
                </button>
              </div>
            </div>
          ))}
        </div>

        <div className="py-14 px-4 sm:px-6 md:px-12 lg:px-20">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10 sm:gap-12 md:gap-16 items-center text-center">
            {[
              {
                icon: "/delivery.svg",
                title: "FREE AND FAST DELIVERY",
                description: "Free delivery for all orders over $140",
              },
              {
                icon: "/headset.svg",
                title: "24/7 CUSTOMER SERVICE",
                description: "Friendly 24/7 customer support",
              },
              {
                icon: "/setting-done.svg",
                title: "MONEY BACK GUARANTEE",
                description: "We return money within 30 days",
              },
            ].map((item, index) => (
              <div key={index} className="flex flex-col items-center gap-3">
                <div className="bg-black p-3 sm:p-3 rounded-full border-6 sm:border-8 border-gray-300 mb-2">
                  <img
                    src={item.icon}
                    alt={item.title}
                    className="w-8 sm:w-10 h-8 sm:h-10"
                  />
                </div>
                <h1 className="font-semibold text-base sm:text-lg">
                  {item.title}
                </h1>
                <p className="text-sm sm:text-base text-gray-600">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>

        {selectProduct && (
          <ProductModal
            productId={selectProduct}
            onClose={() => setSelectProduct(null)}
          />
        )}
      </div>
    </div>
  );
};

export default ProductList;
