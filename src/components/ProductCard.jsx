import React from "react";
import Button from "@mui/material/Button";
import { useDispatch } from "react-redux";
import { addToCart } from "../Redux/Cart/cartActions";

const ProductCard = (props) => {
  const dispatch = useDispatch();

  const handleAddToCart = () => {
    dispatch(
      addToCart({
        id: props.id,
        name: props.title,
        price: props.price, // Ensure this is a valid number
        quantity: 1, // Initialize with a valid quantity
        image: props.imageUrl,
      })
    ); // Dispatch addToCart action with product details
  };
  // console.log(handleAddToCart());
  return (
    <div className="p-4 w-full sm:w-1/2 md:w-1/3 lg:w-1/4">
      <div className="bg-slate-500 shadow-md rounded-3xl dark:bg-gray-800 dark:border-gray-700">
        <img
          className="w-full h-48 object-contain"
          src={props.imageUrl}
          alt="product image"
        />
        <div className="px-5 py-5">
          <p
            className="text-white font-oswald text-lg tracking-tight dark:text-white cursor-pointer overflow-hidden text-ellipsis whitespace-nowrap"
            onClick={props.clickHandler}
          >
            {props.title}
          </p>

          <div className="flex items-center justify-between">
            <span className="mt-4 text-sm font-bold text-white dark:text-white mr-3">
              ${props.price}
            </span>
            <Button
              variant="contained"
              className="mt-4 ml-5 py-0 px-4 "
              onClick={handleAddToCart}
            >
              Add to cart
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
