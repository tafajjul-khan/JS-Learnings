Array.prototype.myCustomMap = function (callback) {
  // 1. Create the container for the new data
  const resultantArray = [];

  // 2. 'this' refers to the array the method was called on
  for (let i = 0; i < this.length; i++) {
    // 3. Ensure we handle sparse arrays (don't map indexes that don't exist)
    if (this.hasOwnProperty(i)) {
      // 4. Run the callback and capture the returned value
      // Arguments: current element, index, original array
      const mappedValue = callback(this[i], i, this);

      // 5. Add to our new collection
      resultantArray.push(mappedValue);
    }
  }

  // 6. Return the brand new array
  return resultantArray;
};

/// foreach function internals

Array.prototype.myCustomForEach = function (callback) {
  // 'this' is the array
  for (let i = 0; i < this.length; i++) {
    // Skip holes in sparse arrays
    if (this.hasOwnProperty(i)) {
      // Execute callback: (value, index, array)
      callback(this[i], i, this);
    }
  }
  // Note: There is no return statement. It returns 'undefined' by default.
};

// reduce function internals
Array.prototype.myCustomReduce = function (callback, initialValue) {
  let accumulator = initialValue;
  let startIndex = 0;

  // If no initial value is provided, we use the first element
  if (initialValue === undefined) {
    if (this.length === 0) {
      throw new TypeError("Reduce of empty array with no initial value");
    }
    accumulator = this[0];
    startIndex = 1; // Start looping from the second element
  }

  for (let i = startIndex; i < this.length; i++) {
    if (this.hasOwnProperty(i)) {
      // The core magic: Accumulator is updated by the callback's return value
      accumulator = callback(accumulator, this[i], i, this);
    }
  }

  return accumulator;
};

// Using the logic from our earlier internal implementation
const prices = [10, 20, 30];

const formattedPrices = prices.myCustomMap((price) => `$${price}.00`);

console.log(formattedPrices); // ["$10.00", "$20.00", "$30.00"]
console.log(prices);          // [10, 20, 30] (Original is untouched)

const users = [
  { id: 'a1', name: 'Alice' },
  { id: 'b2', name: 'Bob' }
];

// Internal logic: accumulator starts as {}
const userMap = users.myCustomReduce((acc, user) => {
  acc[user.id] = user.name;
  return acc;
}, {});

console.log(userMap); // { a1: "Alice", b2: "Bob" }
console.log(userMap['a1']); // "Alice" (Instant lookup)