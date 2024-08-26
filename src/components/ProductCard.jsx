import React from "react";
import Button from "@mui/material/Button";

const ProductCard = (props) => {
  return (
    <div className="w-full md:w-1/2 lg:w-1/3 p-4">
      <div className="bg-white shadow-md rounded-lg overflow-hidden h-full flex flex-col justify-between">
        <div className="p-4">
          <h2
            className="text-xl font-bold mb-2 cursor-pointer"
            onClick={props.clickHandler}
          >
            {props.title}
          </h2>
          <div className="mb-4">
            <img
              src={props.imageUrl}
              alt={props.title}
              className="w-full h-48 object-cover"
            />
          </div>
          <h3 className="text-gray-700 mb-4">{props.description}</h3>
        </div>
        <div className="p-4 bg-gray-100">
          <h1 className="text-2xl font-bold text-gray-900">${props.price}</h1>
        </div>
        <Button
          className="flex items-center px-4 py-2 bg-blue-500 text-white font-bold rounded-lg hover:bg-blue-600"
          variant="contained"
        >
          Add to Cart
        </Button>
      </div>
    </div>
  );
};

export default ProductCard;
