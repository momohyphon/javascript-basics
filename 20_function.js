/**
 * function --> 함수
 */

/**
 * 만약에 2라는 숫자에 *10/ 2 % 3 스트링으로 변환해서
 * 반환받고 싶다면 어떻게 해야할까?
 */

console.log((2 * 10 / 2 % 3).toString());
console.log((3 * 10 / 2 % 3).toString());

/**
 * DRY
 * D --> Don't
 * R --> Repeat
 * Y --> Yourself
 */

function calculate() {
  console.log((2 * 10 / 2 % 3).toString());  
}
//calculate();

function calculate(number) {
  console.log((number * 10 / 2 % 3).toString());  
}
/**
 * 함수에서 입력받는 값에 대한 정의를 Parameter라고 한다.
 * 
 * 실제 입력하는 값은 argument라고 한다.
 */

calculate(4);
calculate(5);

function multiply(x, y) {
    console.log(x * y);
}
multiply(2, 4);

function multiply(x, y = 10) {
    console.log(x * y);
}
multiply(2, 4);
multiply(2); //Default pharameter y의 값은 아규먼트가 정해지지 않으면 함수에서 정의한 값이 적용됨.

/**
 * 반환 받기
 * rerurn 받기
 */

console.log('--------------------');
function multyply(x, y) {
    return x * y;
}
const result1 = multiply(2, 4);
console.log(result1);

const result2 = multiply(4, 5);
console.log(result2);

/**
 * Arrow 함수
 */

const multiply2 = (x, y) => {
    return x * y;
}
console.log(multiply2(3, 4));

const multiply3 = (x, y) => x * y;
console.log(multiply3(4, 5));

const multiply4 = x => x * 2;
console.log(multiply4(2));

const multiply5 = x => y => z => `x: ${x} y: ${y} z: ${z}`; 
console.log(multiply5 (2)(5)(7));

function multiply6(x) {
    return function(y) {
        return function(z) {
            return `x: ${x} y: ${y} z: ${z}`
        }
    }
}
console.log(multiply6(3)(4)(5));

const multiplyTwo = function(x, y) {
    return x * y;
}
console.log(multiplyTwo(4, 5));