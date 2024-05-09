export function customSumBy(data, key) {
  if (!Array.isArray(data)) {
    throw new Error("Data must be an array.");
  }

  return data.reduce((accumulator, item) => {
    const value = item[key]; // Get the value associated with the key

    // Ensure the value is a number, parse if it's not
    const numberValue = typeof value === "number" ? value : parseFloat(value);

    // Check if the parsed value is a valid number
    if (isNaN(numberValue)) {
      throw new Error(`Invalid number encountered: ${value}`);
    }

    return accumulator + numberValue; // Accumulate the sum
  }, 0); // Start the accumulator at zero
}
