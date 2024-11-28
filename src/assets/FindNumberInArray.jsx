import React, { useState } from "react";

function FindNumberInArray() {
  const [array, setArray] = useState([1, 2, 3, 4, 5]);
  const [numberToFind, setNumberToFind] = useState("");

  function findNumber(arr, num) {
    return arr.includes(num)
      ? `Number ${num} found!`
      : `Number ${num} not found!`;
  }

  return (
    <div>
      <h1>Find a Number in Array</h1>
      <input
        type="number"
        placeholder="Enter number to find"
        value={numberToFind}
        onChange={(e) => setNumberToFind(e.target.value)}
      />
      <button onClick={() => alert(findNumber(array, Number(numberToFind)))}>
        Find Number
      </button>
    </div>
  );
}

export default FindNumberInArray;
