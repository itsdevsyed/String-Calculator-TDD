function add(numbers) {
  if (numbers === "") return 0; // Return 0 for an empty string

  let delimiter = ','; // Default delimiter is a comma

  // Handle custom delimiters
  if (numbers.startsWith('//')) {
      const parts = numbers.split('\n'); // Split by new line
      delimiter = parts[0][2]; // Custom delimiter is specified in the first part
      numbers = parts[1]; // The actual numbers are in the second part
  }

  // Replace newlines with the delimiter
  const nums = numbers.replace(/\n/g, delimiter).split(delimiter).map(num => parseInt(num));

  // Check for negative numbers
  const negatives = nums.filter(num => num < 0);
  if (negatives.length > 0) {
      throw new Error(`negative numbers not allowed: ${negatives.join(', ')}`);
  }

  // Sum the numbers and return the result
  return nums.reduce((sum, current) => sum + current, 0);
}

module.exports = add; // Export the add function for use in test.js
