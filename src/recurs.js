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




 // Спереду назад
// const arr = [2, 2, 2, 187, 200, 228, 2];

// function sumArray(mass, i) {
//     if (i === mass.length - 1) {
//       return arr[i];
//     }
//       return mass[i] + sumArray(arr, i + 1);
// }

// console.log(sumArray(arr, 0));



// Сзаду вперёд
// const arr = [1, 2, 3, 4];
// const number = sumArray(arr, arr.length - 1);
// console.log(number);

// function sumArray(arr, i) { 
//     if (i === 0) {
//       return arr[0];
//     }
//   return arr[i] + sumArray(arr, i - 1);
// }



// const arr = [4, 20, 1, 5, 1];

// for(i = 0; i < arr.length; i++) {
//   console.log(arr[i]);
// }

// function typeElem(matrix, i) {
//   if (i === matrix.length - 1) {
//     return matrix[matrix.length - 1];
//   }
//   console.log(matrix[i]);
//   return typeElem(matrix, i + 1);
// }

// console.log(typeElem(arr, 0));


const arr = [2, 2, 2, 187, 200, 228, 2, 4, 322];

function sumArray(mass, i) {
  if (i === mass.length - 1) {
    return mass[i];
  } else {
    if(arr[i] % 2 === 0) {
    return mass[i] + sumArray(arr, i + 1);
    }
    else {
      return sumArray(arr, i + 1);
    }
  }
}
console.log(sumArray(arr, 0));
