var array1 = [1,2,3,4,5,6];
console.log(array1);
console.log(array1.length);
console.log(array1.at(3));
console.log(array1[3]);
console.log(array1.push(7));
console.log(array1.pop());
console.log(array1.shift());
console.log(array1.unshift(10));
// console.log(array1.)
array1[3] = 25;
console.log(array1);

var A1 = [1,2,3];
var A2 = [4,5,6];
var A3 = [7,8,9];
var A1 = A1.concat(A2,A3);
var A1 = A1.concat(A3);
console.log(A1);

var A4 = ["a","b","c","d","e","f"];
console.log(A4.flat());
console.log(A4[2]);

console.log(A4.copyWithin(1,0,3))
console.log(A4[0])