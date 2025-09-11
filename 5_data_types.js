/**
 * Data Types
 * 
 * 여섯개의 Primitive Types
 * 한개의 오브젝트 타입이 있다.
 *
 * Primitive 
 * 1) Number
 * 2) String
 * 3) Boolean
 * 4) undefined
 * 5) Null
 * 6) Simbol
 * 
 * Object
 * Function
 * Array
 * Object
 */
/**
 * Number Type
 */
const age= 32;;
const tempature = -10;
const pi = 3.14;

console.log(typeof age);
console.log(typeof tempature);
console.log(typeof pi);
console.log(typeof pi);
console.log('___________________');

const infinity = Infinity
const nInfinity = -Infinity

console.log(typeof infinity);
console.log(typeof nInfinity);
console.log('________________');

/**
 * String type
 */
const codeFactory = '"코드" 팩토리';
console.log(codeFactory)
console.log(typeof codeFactory)

const ive = ("'아이브' 안유진")
console.log(ive);

/**
 * Template Literal
 * 
 * Escaping Character
 * 1) newLine = \n
 * 2) tab = \t
 * 3) 백슬레시를 스트링으로 표현하고 싶다면 두번 입력하면 된다.
 */

const iveYuJin = '아이브\n안유진';
console.log(iveYuJin);
const iveWonYoung = '아이브\t장원영';
console.log(iveWonYoung);
const backSlash = '아이브\\코드팩토리';
console.log(backSlash);
const smallQuotation = '아이브\'코드팩토리';
console.log(smallQuotation);
const iveWonYoung2 = `아이브1 '"//////
장원영`;
console.log(iveWonYoung2);
console.log(typeof iveWonYoung2);

const groupName = '아이브';
console.log(groupName + ' 안유진');
console.log(`${groupName} 안유진`);
 /**
  * Boolean Type
  */
const isTrue = true;
const isFalse = false;

console.log(typeof isTrue)
console.log(typeof isFalse)

/**
 * Undefined
 * 
 * 사용자가 직접 값을 초기화하지 않았을때
 * 지정되는 값이다.
 * 
 * 직접 undefined로 값을 초기화하는건 지양해야 한다.
 */
let noInit;
console.log(noInit);
console.log(typeof noInit);

/**
 * Null Type
 * 
 * underfind와 마찬가지로 명시적으로 없는 값으로 초기화할때
 * 사용된다.
 */

let init = null;
console.log(init);
console.log(typeof init);

/**
 * symbol Type
 * 
 * 유일마이한 값을 생성할때 사용한다.
 * 다른 프리미티브 값들과 다르게 symbol함수를
 * 호출해서 사용한다.
 */
const test1 = '1';
const test2 = '2';

console.log(test1 === test2);
