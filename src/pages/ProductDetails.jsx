import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";
import Button from "@mui/material/Button";
const ProductDetails = () => {
  const [product, setProduct] = useState([]);
  const [errorMessage, setErrorMessage] = useState("");

  const Id = useParams();

  const productId = Id.productId;

  const fetchingSpecificProduct = async () => {
    const response = await axios.get(
      "https://fakestoreapi.com/products/" + productId
    );
    console.log("responce in fetching specific", response);

    if (response.data) {
      setProduct(response.data);
      setErrorMessage("");
    } else {
      if (productId) {
        setErrorMessage("invalid Product Id");
        console.log(errorMessage);
      } else {
        setErrorMessage("You didn't pass an id");
        console.log(errorMessage);
      }
    }
  };

  useEffect(() => {
    fetchingSpecificProduct();
  }, []);

  return (
    <>
      {productId ? (
        <>
          {errorMessage ? (
            <>
              <h1>{errorMessage}</h1>
            </>
          ) : (
            <>
              <div className="container mx-auto px-4 py-8">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {/* Left Column: Product Image */}
                  <div className="flex justify-center items-center">
                    <img
                      src={product.image}
                      alt={product.title}
                      className="w-full h-auto object-cover rounded-lg shadow-lg"
                    />
                  </div>

                  {/* Right Column: Product Details */}
                  <div className="flex flex-col justify-between">
                    <div className="p-4 bg-white rounded-lg shadow-lg">
                      <h1 className="text-2xl font-bold mb-2">
                        {product.title}
                      </h1>
                      <p className="text-gray-700 mb-4">
                        {product.description}
                      </p>
                      <div className="flex items-center space-x-4 mt-4">
                        <h2 className="text-xl font-semibold text-blue-600">
                          $ {product.price}
                        </h2>
                        <Button
                          className="flex items-center px-4 py-2 bg-blue-500 text-white font-bold rounded-lg hover:bg-blue-600"
                          variant="contained"
                        >
                          Add to Cart
                        </Button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </>
          )}
        </>
      ) : (
        <>
          <h1>{errorMessage}</h1>
        </>
      )}
    </>
  );
};

export default ProductDetails;
