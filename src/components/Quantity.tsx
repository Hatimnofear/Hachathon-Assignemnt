"use client";

import { FaMinus, FaPlusCircle } from "react-icons/fa";
import React, { useState } from "react";

const Quantity = () => {
  const [quantity, setQuantity] = useState(1);

  const handleIncrement = () => {
    setQuantity(quantity + 1);
  };

  const handleDecrement = () => {
    setQuantity(quantity <= 1 ? 1 : quantity - 1);
  };

  return (
    <div className="center gap-x-3">
      <button
        className="w-7 h-7 border rounded-full center"
        onClick={() => handleDecrement()}
      >
        <FaMinus />
      </button>
      <div className="text-sm font-semibold">{quantity}</div>
      <button
        className="w-7 h-7 border rounded-full center"
        onClick={() => handleIncrement()}
      >
        <FaPlusCircle />
      </button>
    </div>
  );
};

export default Quantity;
