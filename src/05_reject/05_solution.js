// Code your solution here
function reject(arr, func) {
  let rej = arr.filter(function (val) {
    return !func(val);
  });

  return rej;
}

function testWord(word) {
  return word.length > 3;
}

let words = [
  'one',
  'two',
  'word',
  'three',
  'four',
  'five',
  'six',
  'seven',
  'eight',
];

let rejWords = reject(words, rejWords);
console.log(rejWords);
