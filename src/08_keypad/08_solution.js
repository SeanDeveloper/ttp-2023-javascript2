// Code your solution here
function presses(str) {
  let keypad = [
    ['a', 'b', 'c', '2'],
    ['d', 'e', 'f', '3'],
    ['g', 'h', 'i', '4'],
    ['j', 'k', 'l', '5'],
    ['m', 'n', 'o', '6'],
    ['p', 'q', 'r', 's', '7'],
    ['t', 'u', 'v', '8'],
    ['w', 'x', 'y', 'z', '9'],
    [' '],
  ];

  //   const index = Object.keys(keypad).length;

  //   console.log(index);
  str = str.split('');
  let totalAmount = 0;
  for (let x = 0; x <= Object.keys(keypad).length - 1; x++) {
    let keys = keypad[x];
    for (let y = 0; y <= keys.length; y++) {
      Object.values(str).forEach(function (value) {
        // utilizing the forEach function to iterate through each value
        // value = char within str
        if (value.toLowerCase() == keys[y]) {
          totalAmount += y + 1;
        }
      });
    }
  }
  console.log(totalAmount);
}

presses('zebra');
presses('Hello World');
presses('THREE3');
