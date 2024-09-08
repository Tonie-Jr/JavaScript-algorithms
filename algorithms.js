//The big O notation example Big-O = O(n)
function summation(n) {
    let sum = 0;
    for (let i =1; i <= n; i++) {
        sum += i;
    }
    return sum;
}
console.log(summation(20))

//fibonacci Big-O = O(n)
function fibonacci(n) {
    const fib = [0, 1]
    for (let i = 2; i < n; i++) {
        fib[i] = fib[i-1] + fib[i-2]
    }
    return fib
}
console.log(fibonacci(1))
console.log(fibonacci(1))
console.log(fibonacci(2))
console.log(fibonacci(3))
console.log(fibonacci(4))
console.log(fibonacci(5))
console.log(fibonacci(25))

//Factorial of a positive integer. The Big-O is O(n)
function factorial (n) {
    let fact = 1
    for (let i = 2; i <= n; i++) {
        fact = fact * i
    }
    return fact
}
console.log(factorial(2))
console.log(factorial(5))

// To check if a number is prime. The big-O is O(n)
function isPrime(n) {
    if (n < 2) {
        return false
    }
    for (let i = 2; i < 2; i++) {
        if(i % n ===0) {
            return false
        }
    }
    return true
}
console.log(isPrime(5))