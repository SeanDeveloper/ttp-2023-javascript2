// Code your solution here

function sayHelloWorld() {
  console.log('Hello World');
}

let count = 0;
function thrice(obj) {
  if (count < 3) {
    count++;
    obj();
  } else {
    return undefined;
  }
}

thrice(sayHelloWorld);
thrice(sayHelloWorld);
thrice(sayHelloWorld);
thrice(sayHelloWorld);
thrice(sayHelloWorld);
