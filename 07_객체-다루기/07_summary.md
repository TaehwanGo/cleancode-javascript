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

## 7-5. Object.freeze

## 7-6. Prototype 조작 지양하기

## 7-7. hasOwnProperty

## 7-8. 직접 접근 지양하기

## 7-9. Optional Chaining

## 7-10. Extends & Mixin
