// const arr = [1, 2, 3, 4];

// function sumArr() { 
//   let sum = arr.shift();
//     if (arr.length !== 0) {
//       sum += sumArr(arr);
//     }
//   return sum;
// }
// console.log(sumArr(arr));

// const factorial = (number) => {
//   if(number === 0) {
//     return 1;
//   } else {
//     return number * factorial(number - 1);
//   }
// }

// console.log(factorial(5));

// function sumTo(n) {
//   if (n === 0) {
//     return 0;
//   } else {
//     return n + sumTo(n - 1);
//   }
// }

// console.log(sumTo(100));


const arr = [1, 2, 3, 4];
const number = checkLenght(arr);
console.log(number);


function checkLenght(arr) {
  return sumArray(arr, arr.length - 1);
}

function sumArray(arr, i) { 
    if (i === 0) {
      return arr[0];
    }
  return arr[i] + sumArray(arr, i - 1);
}