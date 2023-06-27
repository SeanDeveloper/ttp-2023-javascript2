// Code your solution here

function useMapToUpperCase(arg) {
  let arr = Array.from(arg);
  let uppercase = arr.map(function (upper) {
    return Element.useMapToUpperCase;
  });

  return uppercase;
}

function useFilter(str) {
  let char = [...str]; // spread operator, creates an array
  let filter = char.filter(function (callback) {
    return callback === '@';
  });
  return filter.length > 0;
}

function sumWithReduce(arr) {
  let sum = arr.reduce(function (accumulator, value) {
    return accumulator + value;
  }, 0);

  return sum;
}

function filterEvensDoubleAndSum(arr) {
  let total = arr
    .filter(function (val) {
      return val % 2 === 0;
    })
    .map(function (val) {
      return val * 2;
    })
    .reduce(function (accumulator, value) {
      return accumulator + value;
    }, 0);

  return total;
}
