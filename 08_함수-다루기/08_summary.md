# 8. 함수 다루기

- 자바스크립트는 일급함수

## 8-1. 함수, 메서드, 생성자

```js
// 함수
function func() {
  return this;
}
func(); // this : 전역 객체

// 메서드
const obj = {
  method() {
    // concise 메서드 : 간결한 메서드 == method: function() {} -> ES2015 이후
    return this;
  },
};
obj.method(); // this : obj

// 생성자 함수 - 클래스가 나오면서 잘 안쓰임
function Func() {
  return this;
}
class Func1 {
  constructor() {
    // 생성자 함수의 syntactic sugar
  }
}
const instance = new Func(); // this : instance
```

- 자바스크립트 함수는 1급 객체

  - 변수나 데이터에 담길 수 있음
  - 매개변수로 전달 가능(콜백 함수)
  - 함수가 함수를 반환(고차 함수)

- 객체의 메서드 : 의존성이 있는 함수, OOP에서 행동을 의미

## 8-2. argument & parameter

- 함수에서 넘기는 인자를 뭐라고 부르나요?

  - Parameter : 함수가 선언된 부분은 parameter
    - Function parameters are the names listed in the function's definition.
    - 형식을 갖춤(다른 사람이 사용하기 때문)
  - Argument(Actual parameter): 함수를 사용할 때 parameter로 전달하는 것은 argument
    - Function arguments are the real values passed to the function.
    - 함수를 사용할 때 넘기는 인자
  - https://developer.mozilla.org/en-US/docs/Glossary/Parameter

## 8-3. 복잡한 인자 관리하기

- 함수에 몇개의 인자를 넘기는게 적당한 것일까?
  - 매개변수의 순서가 의미가 있다면 3개, 4개도 괜찮지만 아니라면 많은 경우 객체로 넘기는게 좋다

```js
// 정말 중요한 것은 명시적으로 앞으로 빼도 됨
function createCar(name, { type, color, brand }) {
  return { name, type, color, brand };
}
```

```js
function createCar(name, { type, color, brand }) {
  if (!name) {
    throw new Error("name is required"); // typescript에선 필요없지만 JS에선 필요
  }
  return { name, type, color, brand };
}
```

## 8-4. Default Value

```js
function createCarousel(option) {
  options = options || {};
  var margin = options.margin || 0;
  var center = options.center || false;
  var navElement = options.navElement || "div";
  return {
    margin,
    center,
    navElement,
  };
}

function createCarousel({
  margin = 0,
  center = false,
  navElement = "div",
} = {}) {
  return {
    margin,
    center,
    navElement,
  };
}
```

```js
// 필수값을 넘기지 않으면 에러던지기 - Typescript에선 필요없음
const required = (argName) => {
  throw new Error("required is " + argName);
};

function createCarousel({
  margin = required("margin"), // margin을 넘기지 않으면 에러를 던짐
  center = false,
  navElement = "div",
} = {}) {
  return {
    margin,
    center,
    navElement,
  };
}
```

## 8-5. Rest Parameters

- arguments 대신 ...num 같이 Rest Parameter를 사용하자
  - spread operator와 똑같이 생겼지만 다른 것이다

```js
function sumTotal(...args) {
  return args.reduce((acc, cur) => acc + cur);
}

// 다른 매개변수와도 조합 가능 - parameter 중에서 가장 마지막에 있어야 함(그 뒤에 것은 무시 됨)
function sumTotal(initValue, bonusValue, ...args) {
  return args.reduce((acc, cur) => acc + cur);
}
```

## 8-6. void & return

- void : 함수에 반환이 없는 것

```js
function handleClick() {
  if (condition) {
    // return setState(false); // bad
    setState(false);
    return; // 명확히 나눠주는 것이 좋다
  }

  // some code...
}

function showAlert(message) {
  alert(message);
}

// void 를 붙일 수도 있음 - 호출 불가능한 함수가 됨
void function func1() {};
```

## 8-7. 화살표 함수

- 화살표 함수
  - this에 undefined가 바인딩 됨
  - call, apply, bind 같은 this 바인딩 메서드를 사용할 수 없음
  - arguments parameter를 사용할 수 없음
    - rest parameter를 사용하는게 더 낫다
  - 생성자 함수로 사용될 수 없음
    - 클래스 쓰면 그만이야~
- 클래스의 메서드는 화살표함수 대신 일반함수를 쓰는게 더 낫다

  - 화살표함수는 생성자에서 초기화 됨
  - 클래스안에서 화살표 함수를 쓰면 상속받은 자식 클래스에서 overriding을 할 수 없다

- 화살표함수는 yield 키워드와 같이 사용할 수 없음
- 그래도 그 외 함수용도론 사용하는 것은 좋다

## 8-8. Callback function

- 콜백 함수 : 함수의 실행권을 다른 함수에 위임 하는 함수

## 8-9. 순수 함수

- 자바스크립트는 동적인 언어
- Redux : 자바스크립트 앱을 위한 예측 가능한 상태 컨테이너

  - 일관적으로 동작
  - 테스트를 하기 쉬움
  - 디버깅이 쉬움
  - Reducer
    - 순수(pure)함수를 사용해야 한다
      - 부작용(side effect)을 발생시키지 않는 함수

- 순수함수가 아니게 만드는 조건들
  - https://redux.js.org/tutorials/fundamentals/part-3-state-actions-reducers#rules-of-reducers
  - Logging a value to the console
  - Saving a file
  - Setting An async timer
  - Making an AJAX HTTP request
  - Modifying some state that exists outside of a function, or mutating arguments to a function
  - Generating random numbers or unique random IDs (such as `Math.random()` or `Date.now()`)

```js
// 순수함수가 아닌 함수
let num1 = 10;
let num2 = 20;
function impureSum1() {
  return num1 + num2;
}
num1 = 123; // 누군가 조작하면 함수의 결과 값이 예측이 안 됨
impureSum1();
```

```js
// 순수 함수
function changeObj(obj) {
  return { ...obj, one: 100 };
}
```

- 자바스크립트 객체를 argument로 전달하고 함수안에서 parameter 객체를 조작하면 원본에도 영향을 준다
  - 함수에서 객체를 조작할 때 복사 후 조작해서 원본에 영향을 주지 않도록 하자

## 8-10. Closure

```js
function add(num1) {
  return function (num2) {
    return function (calculateFn) {
      return calculateFn(num1, num2);
    };
  };
}

function sum(num1, num2) {
  return num1 + num2;
}

const addOne = add(1);
const addTwo = addOne(2); // closure 성질로 인해 addOne에서 입력한 1을 기억
const sumAdd = addTwo(sum); // closure 성질로 인해 addOne, addTwo에서 입력한 1, 2를 기억한 것을 콜백함수 sum에 의해 계산 됨 => 3
console.log(sumAdd); // 3
```

```js
const arr = [1, 2, 3, "a", "b", "c"];

function isTypeOf(type) {
  return function (value) {
    return typeof value === type;
  };
}

const isNumber = isTypeOf("number");

arr.filter(isNumber);
console.log(arr.filter(isTypeOf("number")));
```

## 8-11. 고차 함수

## 8-12. Currying
