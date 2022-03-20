# 5. 분기 다루기

## 5-1. 값식문

- React의 JSX 문법을 사용할 때

```jsx
// 문(state)를 값의 자리에 넣는 경우 -> 에러 발생
<div id={if (condition) { return 'msg' }}>Hello world!</div>

React.createElement('div', {id: if (condition) { return 'msg' }}, 'Hello world!');

// 식
<div id={condition ? 'meg' : null}>Hello world!</div> // ok
```

- `if문`을 객체의 key의 `값` 으로 넣음
- 삼항 연산자(표현식)는 값으로 귀결될 수 있음
  - 객체의 값에는 `식`도 들어갈 수 있음

## 5-2. 삼항 연산자 다루기

- 삼항 연산자 => 조건 ? 참 : 거짓
- 삼항 연산자를 사용할 때 일관성을 갖자
  - 괄호를 써서 참과 거짓을 명확하게 표현해주자
  - 값을 리턴하는 것이 아닌 함수를 실행하는 경우는 차라리 if문을 사용하자

## 5-3. Truthy & Falsy

## 5-4. 단축평가(short-circuit evaluation)

- true && '리턴 값'
- false || '리턴 값'
- 삼항연산자를 대체하는 경우
  - state.data || 'Fetching...'

## 5-5. else if 피하기

## 5-6. else 피하기

## 5-7. Early return

- 사람이 사고하기 편한 로직이 됨

## 5-8. 부정 조건문 지양하기

- 생각을 여러번 해야할 수 있다
- 프로그래밍 언어 자체로 if문이 처음부터오고 true부터 실행시킨다
- 부정 조건을 사용하는 경우
  - Early return
  - Form Validation
  - 보안 혹은 검사하는 로직

## 5-9. Default case 고려하기

```ts
function sum(x = 0, y = 0) {
  return x + y;
}

function registerDay(userInputDay: string) {
  switch (userInputDay) {
    case "Mon":
      return "월요일";
    case "Tue":
      return "화요일";
    // ...
    default:
      throw new Error("입력받은 요일이 없습니다");
  }
}
```

- 경계조건(edge case) : 알고리즘이 처리하는 데이터의 값이 일정 범위를 넘는 경우에 발생하는 문제
  - e.g., -128 ~ 127의 범위를 넘는 순간 발생하는 문제

## 5-10. 명시적인 연산자 사용 지향하기

```js
// 예제 1
2 + 2 * 2; // 명시적으로 우선되는 곳에 괄호를 붙여 주기

// 예제 2.
if ((isLogin && token) || user)
```

- 연산자 우선순위를 다 암기하기 어려움

### 전위연산자 vs 후위연산자

```js
let number = 0;
number++;
number = number + 1; // 예측하기 더 쉬움
```

- redux : 예측 가능한 상태 컨테이너
  - Debuggable

## 5-11. Nullish coalescing operator

```js
// element.style.height = String(height || 10) + "px"; // 0을 넣고 싶어도 넣을 수 없음
element.style.height = String(height ?? 10) + "px"; // better
```

```js
null || undefined ?? "foo"; // Error
(null || undefined) ?? "foo"; // ok
```

- 연산자 우선순위 때문에 병렬로 여러개 사용 불가능 함

  - No chaining with AND or OR operator

- optional chaining 이랑 궁합이 좋음 !
  - 객체 섹션에서 다룸

## 5-12. 드모르간의 법칙

```js
const isValidUser = true; // 서버에서 받아옴
const isValidToken = true; // 서버에서 받아옴
{
  // 예제 1.
  // before
  if (!(isValidUser && isValidToken)) {
    console.log("로그인 실패");
  }

  // after
  if (!isValidUser || !isValidToken) {
    console.log("로그인 실패");
  }
}
```

- 적절히 사용하면 가독성 및 유지보수성이 좋아진다
