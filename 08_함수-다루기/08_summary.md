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

## 8-9. 순수 함수

## 8-10. Closure

## 8-11. 고차 함수

## 8-12. Currying
