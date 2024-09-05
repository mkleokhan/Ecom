import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";
import Button from "@mui/material/Button";
import Products from "./Products";
import { useDispatch } from "react-redux";
import { addToCart } from "../Redux/Cart/cartActions";

const ProductDetails = () => {
  const [product, setProduct] = useState({});
  const [errorMessage, setErrorMessage] = useState("");
  const { productId } = useParams();
  const dispatch = useDispatch();

  // Fetch specific product by productId
  const fetchingSpecificProduct = async () => {
    try {
      const response = await axios.get(
        `https://fakestoreapi.com/products/${productId}`
      );
      if (response.data) {
        setProduct(response.data);
        setErrorMessage("");
      }
    } catch (error) {
      setErrorMessage("Product not found or invalid Product Id");
    }
  };

  // Handle add to cart functionality
  const handleAddToCart = () => {
    dispatch(
      addToCart({
        id: product.id,
        name: product.title,
        price: product.price,
        quantity: 1, // Set initial quantity to 1
        image: product.image,
      })
    );
  };

  // Fetch product on component mount or when productId changes
  useEffect(() => {
    fetchingSpecificProduct();
  }, [productId]);

  return (
    <>
      {productId ? (
        <>
          {errorMessage ? (
            <div className="container mx-auto px-4 py-8">
              <h1 className="text-red-500 text-center">{errorMessage}</h1>
            </div>
          ) : (
            <div className="container mx-auto px-4 py-8 grid grid-cols-1 md:grid-cols-2 gap-8">
              {/* Left Column: Product Image */}
              <div className="flex justify-center items-center">
                <img
                  src={product.image}
                  alt={product.title}
                  className="w-full h-auto max-w-xs md:max-w-sm object-cover rounded-lg shadow-lg"
                />
              </div>
              {/* Right Column: Product Details */}
              <div className="flex flex-col justify-between h-full">
                <div className="p-4 bg-white rounded-lg shadow-lg">
                  <h1 className="text-2xl md:text-3xl font-bold mb-2">
                    {product.title}
                  </h1>
                  <p className="text-gray-700 mb-4 text-sm md:text-base">
                    {product.description}
                  </p>
                  <div className="flex flex-col sm:flex-row items-center sm:items-start space-y-4 sm:space-y-0 sm:space-x-4 mt-4">
                    <h2 className="text-xl font-semibold text-blue-600">
                      $ {product.price}
                    </h2>
                    <Button
                      onClick={handleAddToCart}
                      className="flex items-center px-4 py-2 bg-blue-500 text-white font-bold rounded-lg hover:bg-blue-600"
                      variant="contained"
                    >
                      Add to Cart
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          )}
        </>
      ) : (
        <div className="container mx-auto px-4 py-8">
          <h1 className="text-red-500 text-center">Product ID is missing</h1>
        </div>
      )}

      <div className="container mx-auto px-4 py-8 text-center">
        <h2 className="text-lg md:text-xl lg:text-2xl font-semibold text-gray-900 dark:text-white">
          Explore more of our products
        </h2>
      </div>
      <Products />
    </>
  );
};

export default ProductDetails;
