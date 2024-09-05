import React from "react";
import { useLocation } from "react-router-dom";

const Receipt = () => {
  const location = useLocation();
  const { receipt, total } = location.state || { receipt: [], total: 0 };

  return (
    <div className="max-w-7xl mx-auto px-4 py-6">
      <h1 className="text-2xl font-bold mb-4">Receipt</h1>
      {receipt.length === 0 ? (
        <p>No items in receipt.</p>
      ) : (
        <div className="bg-white shadow-md rounded-lg p-6">
          <ul>
            {receipt.map((item, index) => (
              <li key={index} className="flex justify-between mb-4">
                <div>
                  <h2 className="text-xl font-semibold">{item.name}</h2>
                  <p>Price: ${item.price.toFixed(2)}</p>
                  <p>Quantity: {item.quantity}</p>
                </div>
                <p>Total: ${item.total.toFixed(2)}</p>
              </li>
            ))}
          </ul>
          <div className="flex justify-between items-center mt-6">
            <h2 className="text-xl font-bold">Total: ${total.toFixed(2)}</h2>
          </div>
        </div>
      )}
    </div>
  );
};

export default Receipt;
