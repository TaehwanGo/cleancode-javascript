# 4. 경계 다루기

## 4-1. min - max

```ts
function genRandomNumber(min: number, max: number) {
  return Math.floor(Math.random() * (max - min + 1) + min);
}

// 상수
const MIN_NUMBER = 1;
const MAX_NUMBER = 45;
```

- 상수는 숫자를 사용하기보단 명시적인 상수 식별자를 사용하자

```ts
function isAdult(age: number) {
  // 최소, 최대값 (포함 되는지 vs 안되는지)
  return age >= 20;
}
```

- 최대값 등의 경계 - 포함하는지 포함하지 않는지에 대한 컨벤션을 정할 필요가 있다.

### 경계 다루기 (min - max)

1. 최소값과 최대값을 다룬다
2. 최소값과 최대값 포함 여부를 결정해야 한다
3. 혹은 네이밍에 최소값과 최대값 포함 여부를 표현한다

- MAX_NUMBER -> MAX_IN_NUMBER

## 4-2. begin - end

- 시작과 끝이 동일하지 않은 경우 - 숙박
  - 체크인 : begin
  - 체크아웃 : 비어있음(end)

## 4-3. first - last

- 포함된 양 끝을 의미
- ~ 부터 ~ 까지
- 양 끝점이 존재하나 그 안에서 연속성이나 규칙이 보장이 되지 않음

## 4-4. prefix - suffix

- prefix : 접두사 - 앞쪽에 붙이는 단어
- suffix : 접미사 - 뒤쪽에 붙이는 단어
- 팀에서 네이밍 같은 규칙을 정하면 일관성을 가질 수 있어서 좋다

## 4-5. 매개변수의 순서가 경계다

- 매개변수에 두개를 받을 때 그 순서가 처음과 끝을 의미하는 경우

```js
genRandomNumber(1, 50); // genRandomNumber가 뭔지 몰라도 1~50 사이의 숫자를 랜덤하게 생성한다는 것을 알 수 있음
```

- 매개변수의 순서가 경계다
- rest parameter를 고려
- arguments가 많을 땐 객체로 만드는 것을 고려해라
- 래핑하는 함수

```js
function someFunc(arg1, arg2, arg3, arg4) {
  // ...
}

// arg3, 4는 잘 사용안한다면 래핑하는 함수를 사용할 수도 있음
function getFunc(arg1, arg2) {
  someFunc(arg1, arg2);
}
```
