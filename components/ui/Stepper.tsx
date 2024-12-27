"use client";

import { useState } from "react";

const Stepper = () => {
  const [number, setNumber] = useState(0);
  const [showNumber, setShowNumber] = useState(0);
  const [isInputActive, setIsInputActive] = useState<boolean>();

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = parseInt(e.target.value, 10);
    setNumber(value);
  };

  const handleClick = () => {
    setShowNumber(number);
  };

  const handleFocus = () => setIsInputActive(true);
  const handleBlur = () => setIsInputActive(false);

  return (
    <div>
      <div>
        <button
          onClick={() => setNumber((prev) => prev - 1)}
          disabled={isInputActive}
          style={{ backgroundColor: isInputActive ? "red" : "green" }}
        >
          -
        </button>
        <input
          type="number"
          value={number}
          onChange={handleInputChange}
          onFocus={handleFocus}
          onBlur={handleBlur}
        />
        <button
          onClick={() => setNumber((prev) => prev + 1)}
          disabled={isInputActive}
          style={{ backgroundColor: isInputActive ? "red" : "green" }}
        >
          +
        </button>
      </div>
      <div>
        <button onClick={handleClick}>Show Number</button>
        <span>{showNumber}</span>
      </div>
    </div>
  );
};

export default Stepper;
