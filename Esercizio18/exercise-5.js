function memoize(fn) {
  let cache = {};
  return (num) => {
    console.log(`\nNumero in controllo: ${num}\n`);
    if (num in cache) {
      return `${num} e' già presente nel db, fattoriale: ${fn(num)}\n`;
    } else {
      cache[num] = fn(num);
      return `${num}: ${fn(num)}`;
    }
  };
}

function factorial(x) {
  if (x === 0) {
    return 1;
  }
  let ris = 0;

  return x * factorial(x - 1);
}

const fattoriale = memoize(factorial);

factorial = memoize(factorial);
console.log(factorial(10));
console.log(factorial(6));
console.log(factorial(5));
