function add(numbers) {
    if (numbers === "") {
      return 0;
    }
  
    let delimiter = ",";
    let numbersArray = [];
  
    // Check for custom delimiter
    if (numbers.startsWith("//")) {
      const delimiterLine = numbers.split("\n")[0];
      delimiter = delimiterLine.substring(2);
      numbers = numbers.substring(delimiterLine.length + 1);
    }
  
    // Split numbers by delimiter and newline
    numbersArray = numbers.split(new RegExp(`[${delimiter}\n]`));
  
    let sum = 0;
    let negativeNumbers = [];
  
    // Calculate sum and check for negative numbers
    for (let i = 0; i < numbersArray.length; i++) {
      const number = parseInt(numbersArray[i]);
      if (number < 0) {
        negativeNumbers.push(number);
      } else {
        sum += number;
      }
    }
  
    // Throw exception if negative numbers are found
    if (negativeNumbers.length > 0) {
      throw new Error(`negative numbers not allowed ${negativeNumbers.join(", ")}`);
    }
  
    return sum;
  }
  
  // Test cases
  console.log(add("")); // Output: 0
  console.log(add("1")); // Output: 1
  console.log(add("1,5")); // Output: 6
  console.log(add("1\n2,3")); // Output: 6
  console.log(add("//;\n1;2")); // Output: 3
  console.log(add("1,-2,3")); // Output: Error: negative numbers not allowed -2
  console.log(add("1,-2,-3")); // Output: Error: negative numbers not allowed -2, -3