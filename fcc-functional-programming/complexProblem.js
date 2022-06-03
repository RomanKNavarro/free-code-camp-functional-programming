const squareList = arr => {
  return arr.filter(num => num % 1 === 0 && num > 0).map(num => num * num); 
};

const squaredIntegers = squareList([-3, 4.8, 5, 3, -3.2]);
const squared2 = squareList([4, 5.6, -9.8, 3.14, 42, 6, 8.34, -2]);
console.log(squaredIntegers);
console.log(squared2);

// FINISHED. NOT COMPLEX AT ALL