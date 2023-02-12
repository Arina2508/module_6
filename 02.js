function isPrime(num) {
  if (num > 1000) {
    return "данные не верны";
  }

  if (num <= 1) {
    return false;
  }

  for (let i = 2; i < num; i++) {
    if (num % i === 0) {
      return false;
    }
  }

  return "данные верны";
}
console.log(isPrime(1001));
console.log(isPrime(53));
