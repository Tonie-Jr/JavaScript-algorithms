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

//To check if the number is a power of 2
function isPowerOfTwo(n) {
    if (n < 1) {
        return false
    }
    while (n > 1) {
        if (n % 2 !== 0) {
            return false
        }
        n = n / 2
    }
    return true
}
console.log(isPowerOfTwo(5))

//Recursive Fibonacci Sequence
function recursiveFibonacci(n) {
    if (n < 2) {
        return n
    }
    return recursiveFibonacci(n-1) + recursiveFibonacci(n-2)
}
console.log(recursiveFibonacci(0))
console.log(recursiveFibonacci(1))
console.log(recursiveFibonacci(6))

//Recursive Factorial
function recursiveFactorial(n) {
    if (n === 0) {
        return 1
    }
    return n * recursiveFactorial(n-1)
}
console.log(recursiveFactorial(0))
console.log(recursiveFactorial(1))
console.log(recursiveFactorial(5))

// Bibary Search function
function binarySearch(arr, target) {
    let leftIndex = 0
    let rightIndex = arr.length - 1

    while(leftIndex <= rightIndex) {
        let middleIndex = Math.floor((leftIndex + rightIndex) / 2)
        if(target === arr[middleIndex]) {
            return middleIndex
        }
        if (target < arr[middleIndex]) {
            rightIndex = middleIndex - 1
        } else {
            leftIndex = middleIndex + 1
        }
    }
    return -1
}

console.log(binarySearch([-5, 2, 4, 6, 10], 10))
console.log(binarySearch([-5, 2, 4, 6, 10], 6))
console.log(binarySearch([-5, 2, 4, 6, 10], 20))