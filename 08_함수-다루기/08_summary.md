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

## 8-4. Default Value

## 8-5. Rest Parameters

## 8-6. void & return

## 8-7. 화살표 함수

## 8-8. Callback function

## 8-9. 순수 함수

## 8-10. Closure

## 8-11. 고차 함수

## 8-12. Currying
