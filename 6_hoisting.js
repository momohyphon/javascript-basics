/**
 * Hoisting
 */
console.log('Hello');
console.log('World');

console.log(name);
var name = '코드팩토리';
console.log(name);

// var name;
// console.log(name);
// name = '코드팩토리'
// console.log(name);
/**
 * Hoisting이란 무엇인가?
 * 
 * 모든 변수의 선언문이 코드의 최상단으로 이동하는 것처럼 느껴지는 현상을 이야기 한다.
 */
console.log(yuJin);
// let yuJin = '안유진';
const yuJin;