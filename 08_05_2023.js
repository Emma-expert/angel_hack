function generatePermutations(str) {
    const result = [];
    if (str.length === 1) {
      result.push(str);
      return result;
    }
    for (let i = 0; i < str.length; i++) {
      const firstChar = str[i];
      const charsLeft = str.substring(0, i) + str.substring(i + 1);
      const innerPermutations = generatePermutations(charsLeft);
      for (let j = 0; j < innerPermutations.length; j++) {
        result.push(firstChar + innerPermutations[j]);
      }
    }
    return result;
  }
  
  function isDivisibleBy7(numStr) {
    let remainder = 0;
    for (let i = 0; i < numStr.length; i++) {
      const digit = parseInt(numStr[i]);
      remainder = (remainder * 10 + digit) % 7;
    }
    return remainder === 0;
  }
  
  const str = "1867";
  const permutations = generatePermutations(str);
  const divisiblePermutations = permutations.filter(isDivisibleBy7);
  
  if (divisiblePermutations.length > 0) {
    const min = Math.min(...divisiblePermutations);
    const max = Math.max(...divisiblePermutations);
    const average = (min + max) / 2;
    console.log(`The average between the smallest and largest permutation divisible by 7 is: ${average}`);
  } else {
    console.log("None of this permutation of the digits is divisible by 7.");
  }
  