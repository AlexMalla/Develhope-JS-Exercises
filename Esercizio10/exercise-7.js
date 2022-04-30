function sumUntil(maxValue) {
  let sum = "";
  realSum = 0;
  
  for (let i = 1; i <= maxValue; i++) {
    sum = `${sum} + ${i}`;
    realSum = realSum + i
  }
  sum += ` = ${realSum}`
  return sum;
}

console.log(sumUntil(5));