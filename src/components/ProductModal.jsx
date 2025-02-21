
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addToCart } from "../redux/cartSlice";
import { fetchProductById } from "../redux/productSlice";

const ProductModal = ({ productId, onClose }) => {
  const dispatch = useDispatch();
  const product = useSelector((state) => state.product.product);
  const loading = useSelector((state) => state.product.loading);
  const error = useSelector((state) => state.product.error);
  const [quantity, setQuantity] = useState(1);

  useEffect(() => {
    if (productId) {
      dispatch(fetchProductById(productId));
    }
  }, [productId, dispatch]);

  const handleAddToCart = () => {
    dispatch(addToCart({ ...product, quantity }));
    console.log(product)
  };

  if (!product) return null;

  return (
    <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 w-full">
      <div className="bg-white px-6 lg:px-10 py-6 lg:py-12 rounded-3xl shadow-lg w-full sm:w-1/2 relative mx-8 sm:mx-0">
        <button
          className="absolute top-4 right-4 text-xl cursor-pointer"
          onClick={onClose}
        >
          ✖
        </button>
        {loading && <></>}
        {error && <p className="text-center text-red-500">{error}</p>}

        {!loading && !error && product && (
          <div className="flex flex-col lg:flex-row gap-6 rounded-3xl h-[80vh] lg:h-auto">
            <div className="h-auto w-full bg-gray-100 flex items-center justify-center p-4 lg:rounded-bl-3xl lg:rounded-tl-3xl rounded-3xl lg:rounded-br-none lg:rounded-tr-none shadow-sm">
              <img
                src={product.image}
                alt={product.title}
                className="h-auto max-h-full max-w-[150px] lg:max-w-[200px] xl:max-w-[250px] object-contain mix-blend-darken"
              />
            </div>
            <div className="flex flex-col flex-grow gap-2 py-4 lg:py-6">
              <h2 className="text-xl font-semibold w-full line-clamp-2">
                {product.title}
              </h2>
              <div className="flex flex-col flex-wrap gap-2 lg:gap-4">
                <div className="flex flex-wrap items-center gap-4 text-xs sm:text-sm md:text-base">
                  <div className="flex items-center gap-[2px] sm:gap-1">
                    {Array.from({ length: Math.round(product.rating.rate) }).map(
                      (_, index) => (
                        <span key={index} className="text-yellow-500 text-sm md:text-lg">
                          ⭐
                        </span>
                      )
                    )}
                  </div>
                  <span className="text-gray-500 text-[10px] sm:text-xs md:text-sm">
                    ({product.rating.count} Reviews)
                  </span>
                  <span className="hidden sm:inline text-gray-500"> | </span>
                  <span className="text-teal-400 text-xs sm:text-sm md:text-base">
                    In stock
                  </span>
                </div>
                <p className="text-gray-700 text-lg lg:text-2xl font-medium">
                  ${product.price}
                </p>
              </div>

              <div className="py-4 lg:py-6 border-b">
                <p className="text-gray-700 line-clamp-3">{product.description}</p>
              </div>

              <div className="flex flex-col xl:flex-row gap-4 lg:gap-2 pt-6 w-full">
                <div className="flex items-center justify-between border rounded w-full sm:w-auto">
                  <button
                    className="w-14 xl:w-10 h-full border-r bg-gray-200 transition disabled:opacity-50 cursor-pointer py-1"
                    onClick={() => setQuantity((prev) => Math.max(1, prev - 1))}
                    disabled={quantity === 1}
                  >
                    -
                  </button>
                  <p className="min-w-[50px] text-center">{quantity}</p>
                  <button
                    className="w-14 xl:w-10 h-full bg-amber-400 hover:bg-amber-500 transition flex justify-center items-center cursor-pointer py-1"
                    onClick={() => setQuantity((prev) => prev + 1)}
                  >
                    +
                  </button>
                </div>
                <button
                  className="bg-black text-white py-2 px-6 w-full sm:w-auto rounded-lg hover:bg-white hover:text-black hover:border hover:font-medium transition duration-300 cursor-pointer"
                  onClick={handleAddToCart}
                >
                  Add to cart
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default ProductModal;
