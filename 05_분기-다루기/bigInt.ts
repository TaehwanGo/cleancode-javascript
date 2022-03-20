// number + n => bigInt, large integers
// https://www.designcise.com/web/tutorial/what-does-n-at-the-end-of-a-number-mean-in-javascript
// https://ko.javascript.info/bigint
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/BigInt
// number로 표현하기에 너무 큰 숫자를 감싸는 객체
const BIG_NUMBER = 987789789876123123123123123123123123123123123123123123123123123123123123123123123;
console.log(BIG_NUMBER);
console.log(BigInt(BIG_NUMBER)); // 정확하게 맞진 않는다
