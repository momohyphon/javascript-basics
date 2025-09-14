/**
 * Operators
 * 
 * 연산자
 * 
 */

/**
 * 산술연산자
 * 
 * 1)덧셈
 * 2)뺄셈
 * 3)곱셈
 * 4)나눗셈
 * 5)나머지
 */

console.log(10 + 10);
console.log(10 - 10);
console.log(10 * 10);
console.log(10 / 10);
console.log(10 % 3);

console.log('----------------------');

console.log(10 * (10 + 10));

/**
 * 증가와 감소
 */

let number = 1;

number ++;
console.log(number);

number --;
console.log(number);

console.log('---------------------');

/**
 * 연산자의 위치
 */
let result = 1;
console.log(result)

result = number++;
console.log(result, number);

result = number--;
console.log(result, number)

result = ++number;
console.log(result, number)

result = --number;
console.log(result, number)

//통상적으로 앞에 ++는 사용하지 않는다.
/**
 * 숫자 타입이 아닌 타입에 +, -사용하면 어떻게 될까?
 * 
 */

let sample = "99"
console.log(+sample);
console.log(typeof +sample)

console.log(sample);
console.log(typeof sample)

sample = true;
console.log(+sample);
console.log(typeof +sample);

sample =false;
console.log(+false);
console.log(typeof +sample);

sample ='안유진';
//Nan --> NOT a number
console.log(+sample);

sample = '99';
console.log(-sample);
console.log(typeof -sample);
