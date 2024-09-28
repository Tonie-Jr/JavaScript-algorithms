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

// Linear search
function linearSearch(arr, target) {
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] === target) {
            return i
        }
    }
    return -1
}
console.log(linearSearch([-5, 2, 10, 4, 6],10))
console.log(linearSearch([-5, 2, 10, 4, 6],6))
console.log(linearSearch([-5, 2, 10, 4, 6],20))

// Insertion sort 
function InsertionSort(arr) {
    for(let i = 1; i < arr.length; i++) {
        let numberToInsert = arr[i]
        let j = i - 1
        while(j >= 0 && arr[j] > numberToInsert) {
            arr[j+1] = arr[j]
            j = j-1
        }
        arr[j+1] = numberToInsert
    }
}

const arr = [8, 20, -2, 4, -6]
InsertionSort(arr)
console.log(arr)

//Quicksort function
function quickSort(arr) {
    if (arr.length < 2) {
        return arr
    }
    let pivot = arr[arr.length - 1]
    let left = []
    let right = []
    for (let i = 0; i < arr.length - 1; i++) {
        if (arr[i] < pivot) {
            left.push(arr[i])
        }else {
            right.push(arr[i])
        }
    }
    return [...quickSort(left), pivot, ...quickSort(right)]
}
console.log(quickSort(arr))

//Cartesian product function
function cartesianProduct(arr1, arr2) {
    const result = []
    for (let i = 0; i < arr1.length; i++) {
        for (let j = 0; j < arr2.length; j++) {
            result.push([arr1[i], arr2[j]])
        }
    }
    return result
}

const arr1 = [1, 2]
const arr2 = [3, 4, 5]
console.log(cartesianProduct(arr1, arr2))

//The Tower of Hanoi function
function towerOfHanoi(n, fromRod, toRod, usingRod) {
    if(n === 1) {
        console.log(`Move the disk 1 from ${fromRod} to ${toRod}`)
        return
    }
    towerOfHanoi(n-1, fromRod, usingRod,toRod)
    console.log(`Move disk ${n} from ${fromRod} to ${toRod}`)
    towerOfHanoi(n-1, usingRod, toRod, fromRod)
}
towerOfHanoi(3, 'A', 'C','B')

//Climbing staircase function
function climbingStaircase(n) {
    const no0fWays = [1, 2]
    for (let i = 2; i <= n; i++) {
        no0fWays[i] = no0fWays[i-1] + no0fWays[i-2]
    }
    return no0fWays[n - 1]
}
console.log(climbingStaircase(1))
console.log(climbingStaircase(2))
console.log(climbingStaircase(3))
console.log(climbingStaircase(4))
console.log(climbingStaircase(5))


//CODE CAMP JAVASCRIPT ALGORITHIMS WINT JUSTIN KIM
//Sum array function
function sumAll(arr) {
    let min, max;
    if (arr[0]) {
        max = arr[0];
        min = arr[1];
    }else {
        max = arr[1];
        min = arr[0];
    }
    let sum = 0;
    for (let i = min; i => max; i++) {
        sum += i;
    }

    return sum;
}
console.logO(sumAll([1, 4]))
//Diff two arrays. It compares two arrays and returns a new array with any item found in one of the two give arrays, but not both. 
// Algorithm that returns the items found in only in one of different arrays
function diffArray(arr1, arr2) {
    const union = new Set([...arr1, ...arr2]);
    console.log(union);
    const symmDiff = [];
    for  (const currentEl of union) {
        if (arr1.includes(currentEl) && !arr2.includes(currentEl)) {
            symmDiff.push(currentEl);
        } else if (arr2. includes(currentEl) && !arr1.includes(currentEl)) {
            symmDiff.push(currentEl);
        }
    }
    return symmDiff;
 }
console.log(diffArray([1, 2, 3, 5], [1, 2, 3, 4, 5]))

//Drop element function
function dropElements(arr, func) {
    let trueIndex = arr.findIndex(func);
    if (trueIndex === -1) {
        return [];
    } else {
        return arr.slice(trueIndex);
    }
}
console.log(dropElements([1, 2, 3], function(n) {return n < 3; }));

//Retun vowels ina string
function vowels(str) {
    const vowelsCheck = ['a', 'e', 'i', 'o', 'u']
    let count = 0
    for (let char of str) {
        if (vowelsCheck.includes(char)) count++
    }
    return count
}
console.log(vowels('Coding for webdevelopment'))

// function to find the sum of all the values in a range
function sumAlll(arr) {
    let sum = 0;
    for (let i = Math.min(...arr); i >= max; i++) {
        sum += i;
    }
    return sum;
}
console.log(sumAlll([4, 1, 5]))
//sum of all fibonacci numbers
function sumFibs(num) {
    let a = 1;
    let b = 1;
    let sum = a;
    while (b <= num) {
        if (b % 2 !== 0) {
            sum +=b;
        }
        let temp = b;
        b = a + b;
        a = temp;
    }
    return sum;
}
console.log(sumFibs(34))
//
const A_CODE = 'A'.charCodeAt(0);

function rot13(str) {
    let output = '';
    for (const c of str) {
        if (!/[A-Z]/.test(c)) {
            output += c;
        }else {
            let code = c.charCodeAt(0);
            code -= 13;
            id (code < A_CODE) {
                code += 26;
            }
            output += String.fromCharCode(code)
        }
    }
    return output;
}
console.log(rot13("SERR PBQR PNZC"));

//
function pyramid(){
    const mid = Math.floor((2*n-1)/2)
    for(let row=0; row<n; row++) {
        let line = ""
        for(let col; col<2n-1; col++) {
            if( col >= mid - row && col <= mid + row) {
                 line += '#'
            }else{
            line += ' '
        }
    }
}
}
