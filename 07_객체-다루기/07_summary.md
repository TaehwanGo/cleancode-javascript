# 7. 객체 다루기

## 7-1. Shorthand Properties

```js
const firstName = "Taehwan";
const lastName = "Go";

const person = {
  firstName, // == firstName: firstName
  lastName,
  getFullName() {
    // concise method
    return this.firstName + " " + this.lastName;
  },
};
```

## 7-2. Computed Property Name

- 계산된

```jsx
// react 예시
const [state, setState] = useState({
  id: "",
  password: "",
});

const handleChange = (e) => {
  setState({
    [e.target.name]: e.target.value,
  });
};

return (
  <React.Fragment>
    <input value={state.id} onChange={handleChange} name="name"> // -> state => { name: state.id }
    <input value={state.password} onChange={handleChange} name="password"> // -> { password: state.password }
  </React.Fragment>
)
```

- Computed Property Name : `[e.target.name]: e.target.value,`

```js
// redux 예시
const noop = createAction("INCREMENT");

const reducer = handleActions(
  {
    [noop]: (state, action) => ({
      counter: state.counter + action.payload,
    }),
  },
  { counter: 0 }
);
```

## 7-3. Lookup Table

- 배열 데이터 구조에서 `키와 밸류`로 관리된 배열이 나열된 형태
- json과 같이 나열된 테이블
- if문이 너무 늘어지면 switch문
- objectLookup table
  - 분기문이 객체의 키와 밸류로 이루어짐

```js
function getUserType(type) {
  const USER_TYPE = {
    ADMIN: "관리자",
    INSTRUCTOR: "강사",
    STUDENT: "수강생",
    UNDEFINED: "해당 없음",
  };

  return USER_TYPE[type] ?? USER_TYPE.UNDEFINED;
}
```

- USER_TYPE 에 해당하는 object를 따로 constants에서 관리해서 import해올 수도 있음

## 7-4. Object Destructuring

- 함수로 전달하는 인자가 3개 이상일 때 객체로 전달
- 전달하고 싶지 않은 것은 전달 안해도 됨

```js
function Person(name, { age, location }) {
  this.name = name;
  this.age = age;
  this.location = location;
}

const pcoOptions = {
  age: 30,
  location: "korea",
};

const poco = new Person("tony", {
  age: 30,
  location: "korea",
});
```

- options는 객체로 받음(많은 라이브러리들을 떠올려보자)

### 배열은 객체로도 구조분해 할당이 가능하다

```js
const orders = ["First", "Second", "Third"];

const [s1, , s3] = orders; // 배열로 구조분해 할당할 수도 있고 - 사용하지 않는 것은 비워놔도 됨
console.log(s1, s3);

const { 0: str1, 2: str3 } = orders; // 객체로 구조분해 할당을 할 수도 있다 - 많은 경우에 유용
console.log(str1, str3);
```

## 7-5. Object.freeze

- Object.isFrozen() 메서드로 프리징이 됐는지 안됐는지 확인 가능

```js
const STATUS = Object.freeze({
  PENDING: "PENDING",
  SUCCESS: "SUCCESS",
  FAIL: "FAIL",
  OPTIONS: {
    GREEN: "GREEN",
    RED: "RED",
  },
});

Object.isFrozen(STATUS.OPTIONS); // false
```

- deep freezing 방법
  - 대중적인 유틸 라이브러리(lodash)
  - 직접 유틸 함수 생성
    - 객체를 순회
    - 값이 객체인지 확인
    - 객체이면 재귀
    - 그렇지 않으면 Object.freeze
  - Typescript -> readonly

## 7-6. Prototype 조작 지양하기

- 1. 자바스크립트가 이미 많이 발전했기 때문

  - 클래스를 사용 안 할 이유가 없음
  - 1-1. 직접 만들어서 모듈화
  - 1-2. 직접만든 모듈을 배포 -> npm

- 2. 자바스크립트 빌트인 메서드를 건들지 말자

  - 이미 많은 빌트인 메서드들이 제공되고 있음

- 3. fxjs, lodash 등 대중적인 라이브러리를 사용

## 7-7. hasOwnProperty

## 7-8. 직접 접근 지양하기

## 7-9. Optional Chaining

## 7-10. Extends & Mixin
