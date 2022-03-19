# 2. 변수 다루기

## 2-1. var를 지양하자

- var : 함수 스코프
- let, const : 블록 스코프, Temporal Dead Zone

## 2-2. functional scope & block scope

## 2-3. 전역 공간 사용 최소화

- 전역 공간 : global(Node.js) or window(브라우저) - 최상위 공간
- html에 가져온 서로 다른 두 파일에 있는 전역공간은 하나로 합쳐지기 때문에 에러를 발생시키기 쉬움
- 파일을 나눠도 스코프가 나뉘지 않음
- 전역 공간 사용을 최소화 하자 - 어디서나 접근 가능하기 때문에 스코프 분리가 안될 위험이 있다
  - 전역 변수 사용 X
  - 지역 변수를 사용하자
  - window, global을 조작하지 않는다
  - const, let을 사용하자

## 2-4. 임시변수 제거하기

- 어느 특정 공간 안에서 전역변수처럼 사용되는 것

```js
// bad
function getElements() {
  const result = {};
  result.title = document.querySelector(".title");
  result.text = document.querySelector(".text");

  return result;
}

// good
function getElements() {
  return {
    title: document.querySelector(".title"),
    text: document.querySelector(".text"),
  };
}
```

```js
// bad
function getDateTime(targetDate) {
  let month = targetDate.getMonth();
  let day = targetDate.getDate();

  // 추가적인 스펙 - 추가적인 요구사항 - 이 생길경우 문제가 될 수 있음
  // 함수 새로 추가 or 함수를 수정
  month = month >= 10 ? month : "0" + month;
  day = day >= 10 ? day : "0" + day;

  return {
    month,
    day,
  };
}

// good
function getDateTime(targetDate) {
  const month = targetDate.getMonth();
  const day = targetDate.getDate();

  return {
    month: month >= 10 ? month : "0" + month,
    day: day >= 10 ? day : "0" + day,
  };
}

function getDateTime() {
  const currentDateTime = getDateTime(new Date());

  return {
    month: computedKrDate(currentDateTime.month + "분 전"),
    day: currentDateTime.day + "분 전",
  };
}
```

- 임시변수를 제거해야하는 이유

  - 명령형으로 가득한 로직
  - 어디에서 어떻게 잘 못 되었는지 디버깅이 힘듦
  - 추가적인 코드를 작성하고 싶은 유혹에 빠지기 쉬움

- 해결책
  - 함수 나누기
  - 바로 반환
  - 고차함수 - map, filter, reduce
  - 선언형 코드로 바꿔서 올리는 연습
    - 나중에 선언형 vs 명령형

## 2-5. 호이스팅 주의하기
